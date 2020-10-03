const searchHandler ={
    name: "search",
    priority: 10,
    // This pattern is the name you can later use in "actions.source.fetch"
    // to fetch the content or "state.source.get" to get the data.
    pattern: `/search/`, 
    // This is the function triggered when you use:
    // actions.source.fetch("primaryMenu");
    func: async ({ route, state, libraries, params }) => {
        const parseRoute = libraries.source.parse(route);
        const searchString = parseRoute.query.s;
        const postTypes = ["post","page","career","faculty", "investigation", "resource"];

        //Solicita los datos al API
        const responseRaw = await libraries.source.api.get({
            endpoint: `search/`,
            params : {
                _embed: true,
                page: 1,
                per_page: 12,
                search: searchString,
                type: "post",
                subtype: postTypes,
            }
        });

        const dataRaw = await responseRaw.json();

        //Prepara cada tipo de dato con los items de cada tipo para la consulta
        //Solo se consultaran los tipos de datos que tienen resultados de búsqueda
        const postTypesData = await postTypes.map( (type) =>{
            return {
                endpoint: type=="post"? "posts":type=="page"? "pages":type, 
                items: dataRaw.filter( (item) =>{ 
                    return item.subtype == type;
                }).map((item)=>{
                    return item.id;
                })
            };
        }).filter((type)=>{
            return type.items.length > 0;
        })

        for await (let query of postTypesData) {
            const response = await libraries.source.api.get({
                endpoint: `${query.endpoint}/`,
                params : {
                    _embed: true,
                    include: query.items,
                }
            });
            
            await libraries.source.populate({response, state});
        }

        const data = dataRaw.map( (item) =>{
            const {id, subtype, link} = item;
            return Object.assign({},{id,type:subtype, link});
        });

        await Object.assign(state.source.data[route], {
            items: data,
            isArchive : true,
            isSearch : true,
            isPostTypeArchive: true,
            searchQuery : searchString,
            // type: "post"
        });
    }
}

export default searchHandler;
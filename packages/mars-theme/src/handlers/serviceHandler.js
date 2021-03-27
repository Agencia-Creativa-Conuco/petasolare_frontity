const serviceHandler ={
    name: "services",
    priority: 10,
    // This pattern is the name you can later use in "actions.source.fetch"
    // to fetch the content or "state.source.get" to get the data.
    pattern: "/servicio/:slug+", 
    // This is the function triggered when you use:
    // actions.source.fetch("primaryMenu");
    func: async ({ route, state, libraries, params }) => {

        const slug = params.slug.split("/");

        /* Get Services */
        const response = await libraries.source.api.get({
            endpoint: `service`,
            params: {
                slug,
                _embed:true,
            }
        })
        
        const serviceData = await libraries.source.populate({
            response,
            state
        })

        const service = serviceData[0];
        const relatedIds = state.source[service.type][service.id].meta_box.service_related;

        if(relatedIds.length > 0){
            const relatedResponse = await libraries.source.api.get({
                endpoint: `service`,
                params: {
                    include:relatedIds,
                    _embed:true,
                }
            });
    
            const relatedServiceData = await libraries.source.populate({
                response: relatedResponse,
                state
            })
    
            // Assign data to be consumed later.
            await relatedServiceData.map((item)=>{
                Object.assign(state.source.data[item.link], {
                    isPostType: true,
                    isServicio: true,
                    isReady: true,
                    isFetching: false
                });
            })
        }

        await serviceData.map((item)=>{
            Object.assign(state.source.data[item.link], {
                isPostType: true,
                isServicio: true,
                isReady: true,
                isFetching: false
            });
        })

    }
}

export default serviceHandler;
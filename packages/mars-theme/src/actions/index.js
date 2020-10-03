const getSettings = async ({state, actions, libraries}) => {
    await actions.source.fetch("/wpmenus/main");
    await actions.source.fetch("/wpmenus/footer");
    // await actions.source.fetch(`/site/settings`);

    const response = await libraries.source.api.get({
        endpoint: `/site/v1/settings/`
    })

    // Extract data from response object.
    const data = await response.json();
    // Assign data to be consumed later.
    // This is the data returned when you use:
    await Object.assign(state.source, {
        settings:{
            ...data,
        }
    });
}

const getMenus = async ({state, actions, libraries}) => {
    let response = await libraries.source.api.get({
        endpoint: `/menus/v1/menus/`
    })

    // Extract data from response object.
    const data = await response.json();
    
    let menus = {};
    // state.theme.menu = [];

    for await (let menu of data){

        const response = await libraries.source.api.get({
            endpoint: `/menus/v1/menus/${menu.term_id}`,
        })
    
        const res = await response.json();

        state.theme.menu[res.name] = res;
    }

    // Assign data to be consumed later.
    // This is the data returned when you use:
    await Object.assign(state.source, {
        menus
    });
}

const beforeSSR = async (store) => {
    await getSettings(store);
    await getMenus(store);
};

const beforeCSR = async (store) => {
    await getSettings(store);
    await getMenus(store);
};

export {
    beforeSSR,
    beforeCSR,
}
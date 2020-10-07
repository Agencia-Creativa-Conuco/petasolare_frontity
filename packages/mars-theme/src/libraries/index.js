const getURL = (state, libraries, url) =>{
    const localURL = new URL(state.frontity.url);
    const apiURL = new URL(state.source.api);
    let link = url;

    if(url.startsWith("http")){
      const incomingURL = new URL(url);
      const parsedURL = libraries.source.parse(url);

      if(incomingURL.host == localURL.host || incomingURL.host == apiURL.host ){
        const {path,page,query,hash} = parsedURL;
        link = libraries.source.stringify({
          ...{path,page,query,hash}
        })
      }
    }

    return link;
}

export {
    getURL,
}
const getURL = (state, libraries, url) =>{
    const localURL = new URL(state.frontity.url);
    let link = url;

    if(url.startsWith("http")){
      const incomingURL = new URL(url);
      const parsedURL = libraries.source.parse(url);

      if(incomingURL.domain == localURL.domain){
        const {path,page,query,hash} = parsedURL;
        link = libraries.source.stringify({
          ...{path,page,query,hash}
        })
      }
      else{
        link = url;
      }
    }

    return link;
}

export {
    getURL,
}
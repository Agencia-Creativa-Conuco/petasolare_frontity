const settings = {
  "name": "petasolare",
  "state": {
    "frontity": {
      "url": "https://petasolare.com/",
      "title": "Petasolare",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          // "api": "http://172.27.32.1:10010/wp-json",
          "api": "https://petasolare.com/wp-json",
          "homepage" : "/petasolare",
          "postsPage" : "/blog",
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;

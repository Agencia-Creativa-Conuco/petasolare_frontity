const settings = {
  "name": "petasolare",
  "state": {
    "frontity": {
      "url": "http://petasolare.local/",
      "title": "Test Frontity Blog",
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
          "api": "http://petasolare.local/wp-json",
          // "api": "http://web.petasolare.conuco.do/wp-json",
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

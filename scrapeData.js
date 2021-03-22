let axios = require("axios");
let urls =[ "https://www.wikihow.com/Do-Tai-Chi"];
const promises = [];

for(let page = 0; page <= 5; page ++){
     promises.push(
          axios({method: "get",url:urls[page]})
          .then(res => {
              // Parse your result with Cheerio or whatever you like
          })
     );
}

// You can pass the responses on this resolve if you want.
Promise.all(promises).then(...)


let [ _, domain, ...subdomains] = Array.from(document.querySelectorAll("ul#breadcrumb.breadcrumbs li a")).map(
  (node) => node.textContent
);
let [root, child] = subdomains.slice(subdomains.length - 2)
root = 'Do ' + root;

let children = Array.from(document.querySelectorAll('li[id^=step-id] .whb')).map((node)  => node.textContent)
let grandchildren = Array.from(document.querySelectorAll('li[id^=step-id] .whb')).map((node)  => {
  if (node.nextElementSibling && node.nextElementSibling.nextElementSibling && node.nextElementSibling.nextElementSibling.tagName === 'UL') {
    return [...node.nextElementSibling.nextElementSibling.children].map((li) => li.textContent)
  } else {
    return null
  }
})

var subFrame = {
    'name': root,
    'children': [
      {
        'name': 'Take up ' + child,
        'children': children.map((childText, index) =>
          ({
            'name': childText,
            'children': (grandchildren[index]
              ? (grandchildren[index].map((grandchildText) =>
                  ({
                    'name': grandchildText,
                    'children': []
                  })
                )
                ) : [])
          })
        )
      },
      
    ],
};


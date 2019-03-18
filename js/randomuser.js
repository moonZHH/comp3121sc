function createNode(element) {
      return document.createElement(element);
}

function append(parent, el) {
      return parent.appendChild(el);
}

const ul = document.getElementById('randomuser'); // get the list where we place our results
const url = 'https://randomuser.me/api/?results=3'; // get results about 3 random  generated users
fetch(url)
.then((resp) => resp.json()) // transform the data into json
.then(function(data) {
      let authors = data.results;
      return authors.map(function(author) {
            let li = createNode('li'), img = createNode('img'), span = createNode('span');
            img.src = author.picture.medium;
            span.innerHTML = `${author.name.first} ${author.name.last}`;
            append(li, img); // list item
            append(li, span); // list item
            append(ul, li); // add the list item into the unordered list
      })
})
.catch(function(error) {
      console.log(error);
});

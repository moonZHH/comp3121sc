function createNode(element) {
      return document.createElement(element);
}

function append(parent, el) {
      return parent.appendChild(el);
}

const ul = document.getElementById('esathi');
const url = 'https://www.e-sathi.com/api.php?get=pages&query=unelmamovie';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
      alert(data);
})
.catch(function(error) {
      alert(error);
      console.log(error);
});

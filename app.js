'use strict'

function readIt(event) { // passes all tests
  if (event.target.files[0].type !== 'application/json') return alert ("file not supported, yo")
  const fr = new FileReader();

  fr.onload = function() {
    const obj = JSON.parse(this.result)
    const htmlDiv = document.getElementById('html');
    let htmlStr = '';

    const myFunc = (obj) => {
        obj.forEach((e) => {
        if (typeof e.content.content === 'string') {
          htmlStr += `<${e.tag}><${e.content.tag}>${e.content.content}</${e.content.tag}></${e.tag}>`

        } else if (Array.isArray(e.content.content)) {
          let next = e.content.content

          myFunc(next)
        } else if (Array.isArray(e.content)) {
          htmlStr += `<${e.tag}>`

          myFunc(e.content)

          htmlStr += `</${e.tag}>`
        } else {

          htmlStr += `<${e.tag}>${e.content}</${e.tag}>`
        }

      })

      htmlDiv.innerHTML = htmlStr; // not 'secure'

    }

    myFunc(obj);

  }
  fr.readAsText(this.files[0])
}

document.getElementById("file").addEventListener('change', readIt);

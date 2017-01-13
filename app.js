'use strict'

function readIt() { // passes all tests
  const fr = new FileReader();
  fr.onload = function() {
    const json = JSON.parse(this.result)
    const htmlDiv = document.getElementById('html');
    let htmlStr = '';

    const myFunc = (json) => {
        json.forEach((e) => {
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

      htmlDiv.innerHTML = htmlStr;

    }

    myFunc(json);

  }
  fr.readAsText(this.files[0])
}

document.getElementById("file").addEventListener('change', readIt);

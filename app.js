document.getElementById("file").addEventListener('change', function() { // passes first two tests
  let fr = new FileReader();
  fr.onload = function() {
    const json = JSON.parse(this.result)
    const htmlDiv = document.getElementById('html');


    for (let i = 0; i < json.length; i++) {
        if (typeof json[i].content.content === "string") {
          let tag = document.createElement(`${json[i].tag}`)

          let tag2 = document.createElement(`${json[i].content.tag}`)

          tag2.innerHTML = json[i].content.content;

          htmlDiv.appendChild(tag)

          let parent = document.getElementsByTagName(`${json[i].tag}`)

          parent = parent[i]
          parent.appendChild(tag2)
        } else {
          let tag = document.createElement(`${json[i].tag}`)

          let tag2 = document.createElement(`${json[i].content.tag}`)

          htmlDiv.appendChild(tag)

          const parent = document.getElementsByTagName(`${json[i].tag}`)[i]
          parent.appendChild(tag2)
          ////////////////////////
          let addCont = json[i].content.content
          for (let y = 0; y < addCont.length; y++) {
            let tag3 = document.createElement(`${addCont[y].tag}`)
            tag3.innerHTML = addCont[y].content
            tag2.appendChild(tag3)
          }
        }
    }
  }
  fr.readAsText(this.files[0])
})

function readIt() { // passes all tests
  const fr = new FileReader();
  fr.onload = function() {
    const json = JSON.parse(this.result)

    let parent = {}

   for (var i = 0; i < json.length; i++) {
    for (let key in json[i]) {
      const htmlDiv = document.getElementById('html');
      if (key === 'tag') htmlDiv.appendChild(json[i][key])
    }
   }
}
  fr.readAsText(this.files[0])
}

document.getElementById("file").addEventListener('change', readIt);

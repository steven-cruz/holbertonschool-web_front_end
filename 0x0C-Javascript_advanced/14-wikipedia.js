function createElement(data){
    let paragraph = document.createElement("p");
	let content = document.createTextNode(data);
	paragraph.appendChild(content);
	document.body.appendChild(paragraph);
}

function queryWikipedia(callback){
    // Asynchronous requests
    let request = new XMLHttpRequest();
    request.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);
    request.onreadystatechange = function (event) {
      if(request.readyState === 4) {
            if(request.status === 200) { callback(JSON.parse(request.responseText).query.pages[21721040].extract) } 
            else {
                const error = new Error('Error');
                return callback(error, null);
                }
      }
    }
    request.send();
}

queryWikipedia(createElement);

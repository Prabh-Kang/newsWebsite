console.log("JavaScript Online...");

// d0cc4c8c5f5146afbc43a8e1709eb667

var url = 'http://newsapi.org/v2/top-headlines?' + 'country=in&' + 'apiKey=d0cc4c8c5f5146afbc43a8e1709eb667'
let xhr = new XMLHttpRequest();
xhr.open("GET", url, true);

xhr.onprogress = function() {
    console.log("On Progess");

}
let newsArray = [];
let str = "";
xhr.onload = function() {
    if (this.status === 200) {
        let jsonResponse = JSON.parse(this.responseText)
        newsArray.push(jsonResponse);
        console.log(newsArray[0].articles);
        newsArray[0].articles.forEach(function(element, index) {
            str += `

            <div class="card-body border border-dark mb-3">
                <h5 class="card-title"><span class="badge badge-light border border-dark text-wrap">${index + 1}. ${element.title}</span></h5>
                <hr>
                <p class="card-text text-wrap">${element.content}</p>
                
                            <div class="card-footer text-muted border border-bottom rounded-sm">
                                <a href="${element.url}" class="btn btn-outline-primary btn-sm" target="_blank">Click to read the full article</a>
                            </div>

            </div>
        
            `
        });
        document.getElementById("outputDiv").innerHTML = str;


    } else {
        console.log("Error!!!");

    }
}
xhr.send();
//Problem: We need a simple way to look at a user's badge count and JavaScript points from a web browser.
//Solution: Use Node.js to perform the profile look-ups and serve out template via HTTP

var router = require("./router.js");

//1. Create a web server
var http = require('http');
http.createServer(function (request, response) {
    console.log(request.url);
    router.home(request, response);
    router.user(request, response);
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');


//2. Handle HTTP route GET / and POST / i.e. Home
    //if url == "/" && GET
        //Show search
    //if url =="/" && POST
        //redirect to /:username

//3. Handle HTTP route GET /:username i.e. /chalkers
    //if url == "/...."
        //get json from Treehouse
            //on the "end" 
                //show profile
            //on the "error"
                //Show the error   

//4. Function that handles the reading of files and merge in values
    // Read from file and get a string
        //Merge values in to string
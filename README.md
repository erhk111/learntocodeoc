#Learn to Code

Wifi
----
* ROC3Wifi
* ROCnb4590

##Schedule
###Saturday, September 26th 2015
| Time | Description |
|----------------|--------------------------------|
| 11:00 - 1200PM | Introductions / Computer Setup / Clone Our Repo |
| 12:00 - 12:30PM | Break |
| 12:30 - 1:30PM | Introduction to node.js and building a web server! |

Tips:
* On a Mac press Command + Space Bar to open the finder. Type in `Terminal`.
* Navigate the file systems at the command line with, pwd, cd, and ls.
* Create files at the command line with mkdir, and touch.
* Copy, move files, and delete with cp, mv, and rm.
* Print files with cat and less.
* Create files and directories with style.
- Always lower-case
- Always separate words with hypens, instead of spaces

##Computer Setup
###Exercise 1.0
1. Install Sublime Text 2. http://www.sublimetext.com/2
2. On Windows, Install Git Bash (https://msysgit.github.io/)

###Exercise 2.0
1. Clone our github repo.
Type the following in Terminal or Git Bash
```
git clone https://github.com/ronperris/learntocodeoc.git
```

###Exercise 3.0 (Install node.js)
1. Navigate to https://nodejs.org/en/download/ in your web browser.
2. Install the correct version for your platform.

###Exercise 4.0 (node.js REPL)
1. Run the node.js command in your terminal. (Git Bash or Terminal)
2. Type in the following command.
````
console.log('Hello World');
````

###Exercise 5.0 (node.js webserver)
1. Open the file learntocodeoc/server/app.js
2. Type in the following.
````
var http = require('http');

const PORT=8080; 

var server = http.createServer(function(request, response) {
  console.log(request.url);
  response.end('Hello world.')
});

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
````

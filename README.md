#Learn to Code

#http://github.com/ronperris/learntocodeoc

Wifi
----
#### ROC3Wifi
#### ROCnb4590

##Schedule
###Saturday, October 10th 2015
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
3. Install node.js through [HomeBrew.](http://brew.sh/)

###Exercise 2.0
1. Clone our github repo.
Type the following in Terminal or Git Bash
```
git clone https://github.com/ronperris/learntocodeoc.git
```

###Exercise 3.0 (node.js REPL)
1. Run the node.js command in your terminal. (Git Bash or Terminal)
2. Type in the following command.
````
console.log('Hello World');
````

###Exercise 4.0 (HTTP)
1. Install httpie or curl.
2. Use these commands to make a request to http://example.org/

###Exercise 5.0 (Express.js)
1. Create a new file called router.js
2. Add the following code to router.js
````
var express = require('express');
var app = express();

app.use(function(request, response, next) {
  console.log(request.url);
  next();
})

app.listen(1337);
````

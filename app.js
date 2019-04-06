const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(req.uyl);
    //Html----------------------------------------------------------
    if (req.url == '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });
    } else if (req.url == '/index') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });
    } else if (req.url == '/index.html') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });
    } else if (req.url == "/profile.html") {
        fs.readFile(path.join(__dirname, 'profile.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });
    } else if (req.url == "/profile") {
        fs.readFile(path.join(__dirname, 'profile.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });
    } else if (req.url == "/gallery") {
        fs.readFile(path.join(__dirname, 'gallery.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });
    } else if (req.url == "/gallery.html") {
        fs.readFile(path.join(__dirname, 'gallery.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });
    } else if (req.url == "/contact") {
        fs.readFile(path.join(__dirname, 'contact.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });
    } else if (req.url == "/contact.html") {
        fs.readFile(path.join(__dirname, 'contact.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });
    }
    //CSS----------------------------------------------------------------
    else if (req.url === '/assets/css/font-awesome.min.css') {
        fs.readFile(path.join(__dirname, 'assets', 'css', 'font-awesome.min.css'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(content);
        });
    } else if (req.url === '/assets/css/main.css') {
        fs.readFile(path.join(__dirname, 'assets', 'css', 'main.css'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(content);
        });
    } else if (req.url === '/assets/css/noscript.css') {
        fs.readFile(path.join(__dirname, 'assets', 'css', 'noscript.css'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(content);
        });
    }
    //JavaScript--------------------------------------------------------
    else if (req.url === '/assets/js/breakpoints.min.js') {
        fs.readFile(path.join(__dirname, 'assets', 'js', 'breakpoints.min.js'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/js' });
            res.end(content);
        });
    } else if (req.url === '/assets/js/browser.min.js') {
        fs.readFile(path.join(__dirname, 'assets', 'js', 'browser.min.js'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/js' });
            res.end(content);
        });
    } else if (req.url === '/assets/js/contact.js') {
        fs.readFile(path.join(__dirname, 'assets', 'js', 'contact.js'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/js' });
            res.end(content);
        });
    } else if (req.url === '/assets/js/demo.js') {
        fs.readFile(path.join(__dirname, 'assets', 'js', 'demo.js'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/js' });
            res.end(content);
        });
    } else if (req.url === '/assets/js/jquery.min.js') {
        fs.readFile(path.join(__dirname, 'assets', 'js', 'jquery.min.js'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/js' });
            res.end(content);
        });
    } else if (req.url === '/assets/js/jquery.scrollex.min.js') {
        fs.readFile(path.join(__dirname, 'assets', 'js', 'jquery.scrollex.min.js'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/js' });
            res.end(content);
        });
    } else if (req.url === '/assets/js/jquery.scrolly.min.js') {
        fs.readFile(path.join(__dirname, 'assets', 'js', 'jquery.scrolly.min.js'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/js' });
            res.end(content);
        });
    } else if (req.url === '/assets/js/main.js') {
        fs.readFile(path.join(__dirname, 'assets', 'js', 'main.js'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/js' });
            res.end(content);
        });
    } else if (req.url === '/assets/js/util.js') {
        fs.readFile(path.join(__dirname, 'assets', 'js', 'util.js'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/js' });
            res.end(content);
        });
    } 
    //IMAGE------------------------------------------------------------
    else if (req.url === '/images/0001.JPG') {
        fs.readFile(path.join(__dirname, 'images','0001.JPG'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/JPG' });
            res.end(content);
        });
    } else if (req.url === '/images/0002.JPG') {
        fs.readFile(path.join(__dirname, 'images','0002.JPG'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/JPG' });
            res.end(content);
        });
    } else if (req.url === '/images/0003.JPG') {
        fs.readFile(path.join(__dirname, 'images','0003.JPG'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/JPG' });
            res.end(content);
        });
    } else if (req.url === '/images/0004.JPG') {
        fs.readFile(path.join(__dirname, 'images','0004.JPG'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/JPG' });
            res.end(content);
        });
    } else if (req.url === '/images/0005.JPG') {
        fs.readFile(path.join(__dirname, 'images','0005.JPG'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/JPG' });
            res.end(content);
        });
    } else if (req.url === '/images/0006.JPG') {
        fs.readFile(path.join(__dirname, 'images','0006.JPG'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/JPG' });
            res.end(content);
        });
    } else if (req.url === '/images/0007.JPG') {
        fs.readFile(path.join(__dirname, 'images','0007.JPG'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/JPG' });
            res.end(content);
        });
    } else if (req.url === '/images/0008.JPG') {
        fs.readFile(path.join(__dirname, 'images','0008.JPG'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/JPG' });
            res.end(content);
        });
    } else if (req.url === '/images/0009.JPG') {
        fs.readFile(path.join(__dirname, 'images','0009.JPG'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/JPG' });
            res.end(content);
        });
    } else if (req.url === '/images/0010.JPG') {
        fs.readFile(path.join(__dirname, 'images','0010.JPG'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/JPG' });
            res.end(content);
        });
    } else if (req.url === '/images/0011.JPG') {
        fs.readFile(path.join(__dirname, 'images','0011.JPG'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/JPG' });
            res.end(content);
        });
    } else if (req.url === '/images/0012.JPG') {
        fs.readFile(path.join(__dirname, 'images','0012.JPG'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/JPG' });
            res.end(content);
        });
    } else if (req.url === '/images/0013.JPG') {
        fs.readFile(path.join(__dirname, 'images','0013.JPG'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/JPG' });
            res.end(content);
        });
    } else if (req.url === '/images/0014.JPG') {
        fs.readFile(path.join(__dirname, 'images','0014.JPG'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/JPG' });
            res.end(content);
        });
    } else if (req.url === '/images/0015.JPG') {
        fs.readFile(path.join(__dirname, 'images','0015.JPG'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/JPG' });
            res.end(content);
        });
    } else if (req.url === '/images/0016.JPG') {
        fs.readFile(path.join(__dirname, 'images','0016.JPG'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/JPG' });
            res.end(content);
        });
    } else if (req.url === '/images/0017.JPG') {
        fs.readFile(path.join(__dirname, 'images','0017.JPG'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/JPG' });
            res.end(content);
        });
    } else if (req.url === '/images/0018.JPG') {
        fs.readFile(path.join(__dirname, 'images','0018.JPG'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/JPG' });
            res.end(content);
        });
    } else if (req.url === '/images/0019.JPG') {
        fs.readFile(path.join(__dirname, 'images','0019.JPG'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/JPG' });
            res.end(content);
        });
    } else if (req.url === '/images/0020.JPG') {
        fs.readFile(path.join(__dirname, 'images','0020.JPG'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/JPG' });
            res.end(content);
        });
    } else if (req.url === '/images/0020.JPG') {
        fs.readFile(path.join(__dirname, 'images','0020.JPG'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/JPG' });
            res.end(content);
        });
    } else if (req.url === '/assets/sass/main.scss') {
        fs.readFile(path.join(__dirname, 'assets','sass','main.scss'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/scss' });
            res.end(content);
        });
    } else if (req.url === '/assets/sass/noscript.scss') {
        fs.readFile(path.join(__dirname, 'assets','sass','noscript.scss'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/scss' });
            res.end(content);
        });
    } 
    //Fonts
    else if (req.url === '/assets/fonts/fontawesome-webfont.eot') {
        fs.readFile(path.join(__dirname, 'assets','fonts','fontawesome-webfont.eot'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/eot' });
            res.end(content);
        });
    } else if (req.url === '/assets/fonts/fontawesome-webfont.ttf') {
        fs.readFile(path.join(__dirname, 'assets','fonts','fontawesome-webfont.ttf'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/ttf' });
            res.end(content);
        });
    } else if (req.url === '/assets/fonts/fontawesome-webfont.woff') {
        fs.readFile(path.join(__dirname, 'assets','fonts','fontawesome-webfont.woff'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/woff' });
            res.end(content);
        });
    } else if (req.url === '/assets/fonts/fontawesome-webfont.woff2') {
        fs.readFile(path.join(__dirname, 'assets','fonts','fontawesome-webfont.woff2'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/woff2' });
            res.end(content);
        });
    } else if (req.url === '/assets/fonts/FontAwesome.otf') {
        fs.readFile(path.join(__dirname, 'assets','fonts','FontAwesome.otf'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/otf' });
            res.end(content);
        });
    } 
    
    
    else {
        fs.readFile(path.join(__dirname, '404.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });
    }
});

const Port = process.env.Port || 7777;
server.listen(Port, () => {
    console.log('Server is running on port: ' + Port);
});
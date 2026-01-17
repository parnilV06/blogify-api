const http =  require('http');
const port = 1234;
http.createServer((req, res) => {
    res.write('Hello World');
    res.end();
}).listen(port);

console.log("Sever is running ");
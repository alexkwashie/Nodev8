const fs = require('fs');

//A function to hse the request and url redirection.

const requestHandler = (req, res) =>{
    const url = req.url;
    const method = req.method;

    if(url=== '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action = "/message" method = "POST"><input type="text" name = "message"><button type = "submit">Send</button></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString(); //Buffer is a bus like objects that collects all the data form the code above
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });

        });

    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Main App Page</title></head>');
    res.write('<body><h1>Welcome to our App Page.</h1></body>');
    res.write('</html>');
    res.end();

};

module.exports = {
    handler:requestHandler,
    someText: 'New Linkage'
}

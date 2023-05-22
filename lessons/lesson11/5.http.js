// let http = require("http");
// let fs = require('fs');

// const server = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-type': 'text/html' })
//     response.end("Hello from the server");
//     console.log('A new request received');
// })


// // const server = http.createServer((request, response) => {
// //     fs.readFile('./File/dog.jpg', (err, data) => {
// //         if (err) {
// //             response.writeHead(400, { 'Content-type': 'text/html' })
// //             console.log(err);
// //             response.end("No such image");
// //         } else {
// //             response.writeHead(200, { 'Content-type': 'image/jpg' });
// //             response.end(data);
// //         }
// //     })
// //     // response.end("Hello from the server");
// //     console.log('A new request received');
// // })

// // const server = http.createServer((request, response) => {
// //     let path = request.url;
// //     if (path === '/' || path.toLowerCase() === '/home')
// //         response.end("You are in home page");
// //     else if (path.toLowerCase() === '/about')
// //         response.end("You are in about page");
// //     else if (path.toLowerCase() === '/contact')
// //         response.end("You are in contact page");
// //     else {
// //         response.writeHead(404);
// //         response.end("Error 404: Page not found");
// //     }
// // })

// server.listen(8000, '127.0.0.1', () => {
//     console.log('Server has started...');
// });

// const fs = require('fs');
// const path = require('path');
// // Stream will read the file in chunks
// // if file size is bigger than the chunk then it will read a chunk and emit a 'data' event.
// // Use encoding to convert data to String of hex
// // Use highWaterMark to set the size of the chunk. Default is 64 kb
// const readable = fs.createReadStream(path.join(__dirname, 'card.jpg'),
// { highWaterMark: 16 * 1024 });
// const writable = fs.createWriteStream(path.join(__dirname, 'destinationFile.jpg')); 
// readable.on('data', function(chunk) {
// console.log(chunk.length);
// writable.write(chunk);
// });

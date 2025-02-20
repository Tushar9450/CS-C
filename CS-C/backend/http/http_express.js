const http=require('http');

const fspromises =require("fs/promises");
//const fs =require("fs").promises;


const  server=http.createServer(async(req,res)=>{
    console.log(req.url);
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.write('<h1>Hello World</h1>');
    const data=await fspromises.readFile("./code_copy.html","utf8");
    res.end(data);
});
port=3000;
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
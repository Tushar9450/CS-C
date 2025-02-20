const http=require('http');
const fspromises =require("fs/promises");
const  server=http.createServer(async(req,res)=>{
    res.setHeader('Content-Type','text/html');
    if(req.url=="/"){
        res.setHeader('Content-Type','text/html');
        const aa=await fspromises.readFile("./code_copy.html","utf8");
        res.end(aa);
    }
    else if(req.url=="/json"){
        res.setHeader('Content-Type','application/json')
        const json=await fspromises.readFile("./aa.json","utf8");
        res.end(json);

        
    }
    else{
        res.end("404");
    }
})
server.listen(3000, () => {
    console.log("Server running on", 3000);
  })
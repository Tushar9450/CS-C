const fspromises =require("fs/promises");
//const fs =require("fs").promises;

const read=async()=>{
        try{
            
        const data=await fspromises.readFile("./data.txt","utf8");
        console.log(data);
        }
        catch(err){
            console.log(err.message);
        }
    }

const write=async()=>{
    try{
        const newdata="this is my new work";
        await fspromises.writeFile("./data6.txt",newdata,"utf8");
    }
    catch(error){
    
        console.log(error.message);
    
    }
}
read();
write();
console.log("hello");

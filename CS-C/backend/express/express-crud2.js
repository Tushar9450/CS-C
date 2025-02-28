import express from 'express';
const app =express();

const port=3000;
app.use(express.json());
app.get('/', (req,res)=>{
    
    res.send("hello cs c");
});

app.get('/users/:id', (req,res)=>{
    const {id} = req.params;
    const user = users.find(user => user.id == id);
    res.send(user);
});
app.patch('/users/:id', (req,res)=>{
    const {id} = req.params;
    const { name } = req.body;
    const index = users.findIndex(user => user.id == id);
    users[index].name=name;
    res.send(users);
}); 

app.delete('/users/:id', (req,res)=>{
    const {id} = req.params;
    const { name } = req.body;
    const index = users.findIndex(user => user.id == id);
    users.splice(index,1);
    res.send("user is deleted successfully");
}); 
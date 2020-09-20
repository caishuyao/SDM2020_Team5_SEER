const express =require('express');
const mongoose =require('mongoose');
const url = 'mongodb+srv://sdm:Sdm_2020_S2_T5@sdmdb.4ohn0.mongodb.net/sdm?authSource=admin&replicaSet=atlas-v22uqm-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true';

const app = express();

mongoose.connect(url, {useNewUrlParser:true});
const con  =mongoose.connection;

con.on('open',()=>
{
    console.log('connected...!!!')
});



app.listen(3121,()=>{
console.log('Server started at 3121')
});

app.get('/', (req, res)=> {
    res.send('Server connected get request');
});


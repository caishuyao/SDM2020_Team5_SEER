const express = require ('express');
const path = require('path');
const publicPath = path.join(__dirname, '/build');
const bodyParser = require('body-parser');
const cors =require ('cors');
const mongoose = require ('mongoose');

//This is where we add the mongodb url from the server i used the local host at this time of variable

var mongoDatabase ='mongodb+srv://sdm:Sdm_2020_S2_T5@sdmdb.4ohn0.mongodb.net/sdm?authSource=admin&replicaSet=atlas-v22uqm-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true';
// @Charles you can replace this string with the mongodb atlas connection string as i had only the local database at the time.

const app= express();
//started the express server here

mongoose.Promise= global.Promise;
// the token is generated globally at this time so that the request is run from here
//->(1)
mongoose.connect(mongoDatabase, {useNewUrlParser:true}).then(
    ()=>{console.log('Connected to Server')});
//mongo db uses a new url parser so the depreciated warning does not occur

//Body parser for database data transfer
const searchRoutes =require('./routes/search.route');
//->(2)
app.use(bodyParser.json());
app.use(cors());
//
const port = process.env.PORT  ||5000;
//allocating port number we can change if there is a conflict in heroku probably select 8080 or 3000 or 3001
//->(3)
app.use('/seersearch',searchRoutes);

app.use(express.static(publicPath));

app.get('*', (req,res) =>{
    res.sendFile(path.join(publicPath, 'index.html'));
});

//search routes calling from (2)
const server = app.listen(port, ()=> {
    console.log('Server is On Port : ' + port);
});
//(3) is called here as port


// MongoDB Database url
var mongoDatabase = 'mongodb+srv://sdm:Sdm_2020_S2_T5@sdmdb.4ohn0.mongodb.net/sdm?authSource=admin&replicaSet=atlas-v22uqm-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true';

// Connect Mongodb Database
mongoose.connect(mongoDatabase, { useNewUrlParser: true }).then(
    () => { console.log('Connected to Database') }
);




const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const app = express()
const port = process.env.PORT || 8080;

// middleWare

app.use(cors())
app.use(express.json())

// Routes 

const jobsRoutes = require('./routes/jobs.route');

// Db collection

app.use('/api/v1/jobs', jobsRoutes)

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.agg0z.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// async function run() {
//     try {
//         client.connect()
//         const jobsCollection = client.db("JobPortal").collection("jobs");
//         console.log('Db is connected');

//         app.use('api/v1/jobs', jobsRoutes)
//     }
//     finally {
//         // await client.close()
//     }
// }

mongoose.connect(process.env.DATABASE_LOCAL).then(()=>{
    console.log('DataBase Connection is successful');
})

// run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('The server is connected')
})

app.listen(port, () => {
    console.log(`The Server is listening from ${port}`);
})
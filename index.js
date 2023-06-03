const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());



//async await

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://atuhinbd:nfPNlU4UVhmw2nqJ@cluster0.vfeao8o.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    const userCollections = client.db('NodeMongo').collection('users');
    const user = {
      name: 'amr tmr',
      email: 'amrtmr@cluster.com',
    }
    const results = await userCollections.insertOne(user);
    console.log(results);
    
  } finally {
   
  }
}
run().catch(err => console.log(err));


app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

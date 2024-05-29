const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// mongodb connection uri
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.DB_PASSWORD}@clustercrud.ctitxen.mongodb.net/?retryWrites=true&w=majority&appName=clusterCrud`;

// mongodb client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.use(cors());
app.use(express.json());

// mongodb collections
const usersCollection = client.db("skillbridge").collection("users");
const bannerCollection = client.db("skillbridge").collection("banner");
const jobsCollection = client.db("skillbridge").collection("jobs");

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // server Home route
    app.get("/", (req, res) => {
      res.send("Welcome to Skill Bridge Server API");
    });

    // banner images api
    app.get("/banner", async (req, res) => {
      const banners = await bannerCollection.find().toArray();
      res.send(banners);
    });

    // users route

    app.get("/users", async (req, res) => {
      const users = await usersCollection.find().toArray();
      res.send(users);
    });

    app.post("/users", async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });
    /* 
    --------------------------------------------------------------- */

    // onsite jobs api
    app.get("/on_site_jobs", async (req, res) => {
      const query = { category: "On Site Job" };
      const jobs = await jobsCollection.find(query).toArray();
      res.send(jobs);
    });

    // Remote jobs api
    app.get("/remote_jobs", async (req, res) => {
      const query = { category: "Remote Job" };
      const jobs = await jobsCollection.find(query).toArray();
      res.send(jobs);
    });
    // Hybrid jobs api
    app.get("/hybrid_jobs", async (req, res) => {
      const query = { category: "Hybrid" };
      const jobs = await jobsCollection.find(query).toArray();
      res.send(jobs);
    });
    // Part time jobs api
    app.get("/part_time_jobs", async (req, res) => {
      const query = { category: "Part Time" };
      const jobs = await jobsCollection.find(query).toArray();
      res.send(jobs);
    });

    // job category api
    app.get("/jobs", async (req, res) => {
      const categories = await jobsCollection.find().toArray();
      res.send(categories);
    });

    app.listen(port, (req, res) => {
      console.log(`Server is running on port: ${port}`);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch((error) => {
  console.log(error);
});

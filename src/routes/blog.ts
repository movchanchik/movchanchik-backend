import express from "express";
import db from "../database/connection";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => { 
  let collection = await db.collection("blog");
  let result = await collection.find({}).toArray();
  res.send(result).status(200);
})

router.get("/:id",async (req, res) => { 
  let collection = await db.collection("blog");
  let query = { _id: new ObjectId(req.params.id) }
  let result = await collection.findOne(query);
  if (!result) res.send("Not Found").status(404)
  else res.send(result).status(200);
})

router.post("/", async (req, res) => { 
  try { 
    let newPost = {
      title: req.body.title,
      body: req.body.body,
    }

    let collection = await db.collection("blog");
    let result = await collection.insertOne(newPost);
    res.send(result).status(204);
  }
  catch (err) {
    console.error(err);
    res.status(500).send("Error adding record");
   }
})

router.patch("/:id", (req, res) => {
  try { 
    const query = { _id: new ObjectId(req.params.id) }
    const updates = {
      $set: {
        title: req.body.title,
        body: req.body.body,
      },
    }
    
    let collection = db.collection("blog");
    let result = collection.updateOne(query, updates);
    res.send(result).status(200);
    
  }
  catch (err) { 
    console.error(err);
    res.status(500).send("Error updating record")
  }
})

router.delete("/:id", (req, res) => { 
  try {
    const query = { _id: new ObjectId(req.params.id) }
    let collection = db.collection("blog");
    let result = collection.deleteOne(query);
    res.send(result).status(200);
  }
  catch (err) { 
    console.error(err);
    res.status(500).send("Error deleting record");
  }
})

export default router;
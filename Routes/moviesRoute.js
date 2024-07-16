import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const movieRoutes = express.Router();

movieRoutes.get("/movies", async(req,res)=>{
    const collection = await db.collection("movies");
    const result = await collection.find({}).limit(20).toArray();

    res.status(200).send(result);
    res.send("life Hard");
});
 
movieRoutes.get("/users", async (req, res) =>{
    const collection = await db.collection("users");
    const result = await collection.find({}).limit(20).toArray();
    res.status(200).send(result);
});

movieRoutes.get("/theaters", async (req, res) =>{
    const collection = await db.collection("theaters");
    const result = await collection.find({}).limit(20).toArray();
    res.status(200).send(result);
});

movieRoutes.get("/movies/:id", async (req, res) =>{
   const id = new ObjectId(req.params.id);
   try{
    const ress = await db.collection('movies').findOne({_id:id});
    if (!ress) {
        res.json({ message: "invalid id"});
    }
    res.send(ress);
} catch (err) {
    throw err;
}
});

export default movieRoutes;
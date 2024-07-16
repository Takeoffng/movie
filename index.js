import express from "express";
import data from "./data/data.json" assert { type: "json" };
import movieRoutes from "./Routes/moviesRoute.js";

const app = express();
const PORT = 3000;
app.use (express.json());

app.use("/movie",movieRoutes)
 
app.get("/", (req, res) =>{
    res.send("Hello World");
});

app.post("/fruits",(req, res) => {
    console.log(req.body);
    const body = req.body;
    data.push(body);
    console.log(data)
    res.send("data saved succefully")
});

app.get("/fruits/:fruitName?",(req, res) => {

})



app.listen(PORT,()=>{
    console.log("server is running on PORT 3000")
})

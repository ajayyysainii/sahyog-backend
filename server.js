const express = require('express');
const connectDB  = require("./db/db"); // Fixed import syntax
const app = express();
const cors=require("cors")
app.use(cors())
const port = 3000;


// app.use((req,res,next)=>{
//   res.setHeader("Access-Control-Allow-Origin","http://localhost:5173");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// })

app.use(express.json());
connectDB();
app.get('/', (req, res) => {
  res.send('Hello World!');
});


 
app.use("/api",require("./Routes/CreateUser"))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
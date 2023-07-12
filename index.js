const express= require('express');
const app =express();
const port= 8000;
const cors = require('cors'); 
const mongoDB=require('./db');
mongoDB();

app.use(cors());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://quizfrontapp.onrender.com');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));
app.use('/api',require('./Routes/Quiz'));
app.use('/api',require('./Routes/StoreRes'));



app.get('/', (req, res) => {
    res.send('Hello World!');
  })
  

app.listen(port, ()=>{
    console.log(`Your server is started and running on prot no ${port}`);
})

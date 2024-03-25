const express = require('express');


const app = express();
const port = 3900;
const FoodModel = require('./models/foodinfo');
require('./db/conn');
app.get('/', (req, res) => {
  res.send('<h1>WELCOME TO API CREATION </h1>');
});
app.post('/save-food', async (req, res) => {
  try 
    {

    }
catch (error) {
    console.log(error);
}
  });
app.listen(port, () => {
  console.log(`Server is listening at port number ${port}`);
});
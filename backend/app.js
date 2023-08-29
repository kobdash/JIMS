const express = require('express');
const cors = require('cors');
const db = require('./backend/db'); 
const Item = require('./backend/models/Item'); 

const app = express();

app.use(cors());
app.use(express.json());

Item.getAll((err, results) => {
  if (err) throw err;
  console.log(results);
});


const itemRoutes = require('./backend/routes/itemRoutes'); 
app.use('/items', itemRoutes); 

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
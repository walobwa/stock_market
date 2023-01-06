const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;


//Create a static folder and point app to it
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Server listening on port ' + PORT))
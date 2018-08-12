const express = require('express');


const PORT = process.env.PORT || 4020;
const server = express();

server.use(express.static('./public'));

server.get('/', (req, res)=>{
  res.send('wiggity woo');
})

server.listen(PORT, () => {
  console.log(`Connected to ${PORT}`)
})
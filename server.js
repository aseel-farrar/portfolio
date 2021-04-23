'use strict';
const express = require('express');//bring the express
const server = express();//connect the express & server
const PORT = 3030;
server.listen(PORT, () => {
  console.log(`listen to port ${PORT}`);
});
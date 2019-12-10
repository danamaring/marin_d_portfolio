var express = require('express');
var router = express.Router();
var path = require('path');


const sql = require('../utils/sql');

router.get('/portdata/:target', (req, res) => {
  sql.getConnection((err, connection) => {
  if (err) { return console.log(error.message); }
  
  let query = `SELECT * FROM tbl_projects WHERE id="${req.params.target}"`;

  sql.query(query, (err, rows) => {
    connection.release(); // send this connection back to the pool

    if (err) {
      // will exit the function and log the error
      return console.log(err.message);
    }

    console.log(rows); // this should be your database query result

    // render our page
    res.json(rows[0]) // whatever page and data you're rendering
  });
});
})

module.exports = router;





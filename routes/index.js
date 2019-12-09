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


//   sql.query(query, (err, result) => {
//     if (err) { console.log(err); }

//     console.log(result);

//     res.json(result[0]);
//   })
// })


// FUNSTUFF----------------

// const connect = require('../utils/sqlConnect');

// router.get('/', (req, res) => {

//     // get the connection via the connection pool, and then run the query -> just one added step
//     connect.getConnection((err, connection) => {
// 		if (err) { return console.log(error.message); }

// 		let query = `... your query goes here. obviously this won't work, so don't copy and paste this line ...`;

// 		connect.query(query, (err, rows) => {
// 			connection.release(); // send this connection back to the pool

// 			if (err) {
// 				// will exit the function and log the error
// 				return console.log(err.message);
// 			}

// 			console.log(rows); // this should be your database query result

// 			// render our page
// 			res.render('page', {data: rows}); // whatever page and data you're rendering
// 		});
// 	});
// })

// module.exports = router;




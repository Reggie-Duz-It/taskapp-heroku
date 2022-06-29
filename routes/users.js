var express = require('express');
var router = express.Router();
var db=require('../database');

/* GET users listing. */
router.get('/user-list', function(req, res, next) {
  var sql='SELECT * FROM tasks ORDER BY task_due ASC';
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('user-list', { title: 'User List',
  userData: data});
  })
});

router.post('/create', function(req, res, next) {
  
  const userDetails=req.body;
 
  var sql = 'INSERT INTO tasks SET ?';
  db.query(sql, userDetails, function (err, data) { 
      if (err) throw err;
         console.log("User dat is inserted successfully "); 
         res.redirect(req.get('referer'));
  });
});

// delete user data from user database
router.post('/delete', function(req, res, next) {


   const result = (task) => {
     var { task } = req.body;
     return task;
   }
   console.log(result());
    if (req.body.task){
     var { task } = req.body;
     const result = (num) => {
       return num;
     }
      console.log(true);
      var sql = 'DELETE FROM tasks WHERE task_id= ?';
      db.query(sql, result(task), function (err, data) { 
            if (err) throw err;
            console.log("User dat is inserted successfully "); 
            res.redirect(req.get('referer'));
     })
    }
    else{
     console.log(false);
    }

});

// edit user data from user database
router.get('/edit/:id', function(req, res, next) {
  var UserId= req.params.id;
  var sql=`SELECT * FROM tasks WHERE task_id=${UserId}`;
  db.query(sql, function (err, data) {
    if (err) throw err;
   
    res.render('users-form', { title: 'User List', editData: data[0]});
  });
});

router.post('/edit/:id', function(req, res, next) {
  var id= req.params.id;
    var updateData=req.body;
    var sql = `UPDATE tasks SET ? WHERE task_id= ?`;
    db.query(sql, [updateData, id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) updated");
    res.redirect('/users/user-list');
  });
});



module.exports = router;

const express = require('express');
const cookieSession = require('cookie-session');
const router = require('./user.router');

// Session setup
// Makes req.session a thing
router.use(cookieSession({
  name: 'session',
  keys: ['session'],
 
  // Cookie Options
  maxAge: 60 * 60 * 1000 // 1 hour
}));


//post to delete session cookies
router.post('/end-session', (req,res)=>{
  req.session = null 
  res.sendStatus(200)
})

//structure for cookie get
// app.get('/get-clicks', (req, res) => {
//     req.session.totalClicks = req.session && req.session.totalClicks || 0;
//     const {totalClicks} = req.session;
//     res.send({totalClicks});
//   });

//structure for post be sure to package as large object
// app.post('/add-username', (req,res) =>{
//     console.log(req.session)
//     console.log(req.body)
//     req.session.username = req.body|| 'New User'
//     res.sendStatus(200)
//   })
module.exports = router;

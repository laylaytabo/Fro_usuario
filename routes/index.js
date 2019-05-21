const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    res.render('index', {
      title: 'Inicio'
    })
    
});
router.get('/new-entry',(req, res) => {
    res.render('new-entry', {
      title: 'nueva entrada'
    })
    
});
router.get('/admin',(req, res) => {
  res.render('admin', {
    title: 'admin'
  })
  
});
router.get('/inicio',(req, res) => {
  res.render('inicio', {
    title: 'inicio'
  })
  
});
router.get('/cuadernos',(req, res) => {
  res.render('cuadernos', {
    title: 'cuadernos'
  })
  
});
router.post('/login', (req, res)=> {
  var regU = {
  
    cooreo: req.body.correo,
    contraseña: req.body.contraseña
  };
  var esto={
    method: 'POST',
    body: JSON.stringify(regU),
    headers:{
      'Content-type' : "application/json"
    }
  };
  fetch('http://127.0.0.1:4000/api/user',esto)
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(datos => {
      console.log('hoja',datos);
      res.send( datos);
    })

});
module.exports = router;
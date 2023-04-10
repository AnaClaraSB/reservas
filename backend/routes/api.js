var express = require('express');
var router = express.Router();
var db = require('../db')

/* API getONE funcionarios. */
router.get('/enctfuncionarios/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
     res.send(await db.findOne('funcionarios', id));
  } catch (err) {
    next(err);
  }
})

/* API getONE clientes. */
router.get('/enctclientes/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
     res.send(await db.findOne('clientes', id));
  } catch (err) {
    next(err);
  }
})

/* API get clientes. */ 
router.get('/clientes', async (req, res, next) => {
    try {
      res.send(await db.findAll('clientes'));
    } catch (err) {
      next(err);
    }
})

  /* API get funcionarios. */ 
router.get('/funcionarios', async (req, res, next) => {
    try {
      res.send(await db.findAll('funcionarios'));
    } catch (err) {
      next(err);
    }
})

// POST funcionarios. */
router.post('/insfunc', async (req, res, next) => {
    try {
        res.send(await db.insertDb('funcionarios', req.body));    
    } catch (err) { 
      next(err);
    }
})
  
// POST clientes. */
router.post('/insclie', async (req, res, next) => {
    try {    
        res.send(await db.insertDb('clientes', req.body));   
    } catch (err) { 
      next(err);
    }
})
  
// DEL funcionarios. */
router.delete('/funcionariosdelete/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
       res.send(await db.deleteDb('funcionarios', id));
    } catch (err) {
      next(err);
    }
})
  
// DEL clientes. */
router.delete('/clientesdelete/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        res.send(await db.deleteDb('clientes', id));
    } catch (err) {
      next(err);
    }
})

//UPDATE funcionarios. */
router.post('/upfuncionarios/:id', async (req, res, next) => {
  const id = req.params.id;
  const cpf = req.body.cpf;
  const nome = req.body.nome;
  const cep = req.body.cep;
  const email = req.body.email;
  const fone = req.body.fone;
  const funcao = req.body.funcao;
  try {
      res.send(await db.updateDb('funcionarios', id, {cpf, nome, cep, email, fone, funcao}));
  } catch (err) {
    next(err);
  }
})

//UPDATE clientes. */
router.post('/upclientes/:id', async (req, res, next) => {
  const id = req.params.id;
  const cpf = req.body.cpf;
  const nome = req.body.nome;
  const cep = req.body.cep;
  try {
      res.send(await db.updateDbD('clientes', id, {cpf, nome, cep}));
  } catch (err) {
    next(err);
  }
})

//UPDATE salas. */
router.post('/upsalas/:id', async (req, res, next) => {
  const id = req.params.id;
  const numero = req.body.numero;
  const capacidade = req.body.capacidade;
  const descricao = req.body.descricao;
  const valor = req.body.valor;
  const img = req.body.img;
  try {
      res.send(await db.updateDbD('salas', id, {numero, capacidade, descricao, valor, img}));
  } catch (err) {
    next(err);
  }
})

/* API getONE salas. */
router.get('/enctsalas/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
     res.send(await db.findOne('salas', id));
  } catch (err) {
    next(err);
  }
})

 /* API get salas. */ 
 router.get('/salas', async (req, res, next) => {
  try {
    res.send(await db.findAll('salas'));
  } catch (err) {
    next(err);
  }
})

// POST salas. */
router.post('/inssalas', async (req, res, next) => {
  try {
      res.send(await db.insertDb('salas', req.body));    
  } catch (err) { 
    next(err);
  }
})

// DEL salas. */
router.delete('/salasdelete/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
     res.send(await db.deleteDb('salas', id));
  } catch (err) {
    next(err);
  }
})

module.exports = router;
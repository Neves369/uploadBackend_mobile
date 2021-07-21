const express = require('express');
const authMiddleware = require('../middlewares/auth');
const Aluno = require('../models/alunos');
const router = express.Router();

router.use(authMiddleware);

router.get('/', async(req, res) =>{
    try {
        const alunos = await Aluno.find()
        return res.send({ alunos });

    } catch (error) {
        return res.status(400).send({erro: 'Não foi possivel recuperar alunos'}) 
    }
});

router.get('/:alunoId', async(req, res)=>{
    try {
        const aluno = await Aluno.find({"_id" : `${req.params.alunoId}`});
        return res.send({ aluno });

    } catch (error) {
        return res.status(400).send({erro: 'Não foi possivel recuperar aluno'}) 
    }
})

router.post('/', async(req, res)=>{
    try {
        const aluno = await Aluno.create(req.body)
        return res.send({ aluno });

    } catch (error) {
        return res.status(400).send({erro: 'Não foi possivel criar novo aluno'})
    }
})

router.put('/:alunoId', async(req, res)=>{
    try {
        const id = req.params.alunoId
        const aluno = req.body
        
        const response = await Aluno.findByIdAndUpdate({"_id" : `${id}`}, )

        return res.send({ aluno });

    } catch (error) {
        return res.status(400).send({erro: 'Não foi possivel recuperar aluno'}) 
    }
})

router.delete('/:alunoId', async(req, res)=>{
   try {
       await Aluno.findByIdAndRemove(req.params.alunoId);
       return res.send("aluno deletado")

   } catch (error) {
       return res.status(400).send({erro: 'Não foi possivel deletar aluno'})
    }
   
})

module.exports = app => app.use('/alunos', router);
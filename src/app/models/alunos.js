const mongoose = require('../../database');

const AlunosSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    nota1: {
        type: String,
        require: true,
    },
    nota2: {
        type: String,
        require: true,
    }
  

});



const Alunos = mongoose.model('Alunos', AlunosSchema);

module.exports = Alunos;
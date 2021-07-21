const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());


require('./src/app/controllers/authController')(app);
require('./src/app/controllers/alunoController')(app);

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log("Aplicação rodando na porta ", port);
});
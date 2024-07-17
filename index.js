const express = require('express');
port = 3030;
const cors = require('cors');

const app = express();

app.use(cors());

app.get("/",(req,res) =>{
    res.type('text/html');
    res.send('<h1>Ola Yuran</h1>')
});



app.listen(port,() =>{
    console.log(`Servidor iniciado na porta ${port}`)
})


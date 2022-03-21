const express = require(`express`)
const axios = require(`axios`)
const bodyParser = require(`body-parser`)
const cors = require(`cors`)
const app = express()


app.use(express.static(`.`))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

//INICIAR SERVIDOR

app.get(`/`, function ( req, res ) {
    res.send(`<h1>API REST</h1>`)
})




axios.get('http://api.weatherapi.com/v1/current.json?key=f039fca97d04493bb0c03512221803&q=Canoas&aqi=yes')
  .then(function (response) {
    // manipula o sucesso da requisição
    console.log(response);
  })
  .catch(function (error) {
    // manipula erros da requisição
    console.error(error);
  })
  .then(function () {
    // sempre será executado
  });


  

app.listen(3030, () => {console.log(`Servidor rodando na porta 3030`)} )


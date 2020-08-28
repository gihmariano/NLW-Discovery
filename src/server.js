//required traz a dependecia pra cá
//instalado o nodemon para reiniciar o servidor toda vez que houver alteração
require('express')()
.get("/",(req, res) => {
    return res.send("Funcionou!!")
})
.get("/study",(req, res) => {
    return res.send("Página study")
})
.listen(5500)

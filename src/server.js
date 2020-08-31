//required traz a dependecia pra cá
//instalado o nodemon para reiniciar o servidor toda vez que houver alteração
const proffys = [   //propriedades, que eu preciso backend, aqui temos um objeto com 2 proffys
     { 
         name: "Diego Fernandes",
         avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
         whatsapp: "11876534233",
         bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiencias.Mais de 200.000 pessoas já passaram por uma das explosões",
         subject: "Química",
         cost: "20",
         weekday: [0], //aqui o zero é Domingo
         time_from:[720], //tempo será transformado em segundos
         time_to: [1220] //tranformado em segundos
     },
     { 
        name: "Giane Mariano",
        avatar: "https://avatars1.githubusercontent.com/u/9097132?s=460&u=d0793ebbde0fa8170e7b4603b94a3156ef28e901&v=4",
        whatsapp: "1187659993",
        bio: "Apaixonada por física e tecnologias nucleares.<br><br>Experiência em explodir coisas no laboratório e por mudar a vida das pessoas através do ensino.Mais de 200.000 pessoas já passaram por uma das explosões",
        subject: "Física",
        cost:"50",
        weekday: [1], 
        time_from:[720], 
        time_to: [1220] 
    }
   ]

   //organizar melhor os dados aqui
   function pageLanding(req, res) {
    return res.sendFile(__dirname + "/views/index.html")
    }

    function pageStudy(req, res) {
    return res.sendFile(__dirname + "/views/study.html")
    }

    function pageGiveClasses(req, res) {
    return res.sendFile(__dirname + "/views/give-classes.html") 
    }

    const express = require('express')
    const server = express()

    server.use(express.static("public"))
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)

    .listen(5500)



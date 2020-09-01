//required traz a dependecia pra cá
//instalado o nodemon para reiniciar o servidor toda vez que houver alteração
//dados
const proffys = [   //propriedades, que eu preciso backend, aqui temos um objeto com 2 proffys
     { 
         name: "Diego Fernandes",
         avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
         whatsapp: "1185464356",
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
        whatsapp: "1198765467",
        bio: "Apaixonada por física e tecnologias nucleares.<br><br>Experiência em explodir coisas no laboratório e por mudar a vida das pessoas através do ensino.Mais de 200.000 pessoas já passaram por uma das explosões",
        subject: "Física",
        cost:"50",
        weekday: [1], 
        time_from:[720], 
        time_to: [1220] 
    },
    { 
        name: "Giane Mariano",
        avatar: "https://avatars1.githubusercontent.com/u/9097132?s=460&u=d0793ebbde0fa8170e7b4603b94a3156ef28e901&v=4",
        whatsapp: "1165783212",
        bio: "Apaixonada por física e tecnologias nucleares.<br><br>Experiência em explodir coisas no laboratório e por mudar a vida das pessoas através do ensino.Mais de 200.000 pessoas já passaram por uma das explosões",
        subject: "Física",
        cost:"50",
        weekday: [1], 
        time_from:[720], 
        time_to: [1220] 
    }
   ]

   const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Química",
    "Português",
   ]

   const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
   ]

   //organizar melhor os dados aqui
   function pageLanding(req, res) {
    return res.render("index.html")
    }

    function pageStudy(req, res) {
     const filters = req.query
     return res.render("study.html",{ proffys, filters, subjects })
    }

    function pageGiveClasses(req, res) {
    return res.render("give-classes.html") 
    }
     //servidor
    const express = require('express')
    const server = express()

    //configurar nunjucks(template engine)
    const nunjucks =  require('nunjucks')
    nunjucks.configure('src/views', {
        express: server,
        noCache: true,
    })
     //inicio e configuracao do servidor
    server
    //configurar arquivos estaticos(css, scripts, imagens)
    .use(express.static("public"))
    //rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    //start do servidor
    .listen(5500)



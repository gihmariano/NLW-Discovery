//required traz a dependecia pra cá
//instalado o nodemon para reiniciar o servidor toda vez que houver alteração
//dados
const Database = require ('./database/db')

const {subjects, weekdays, getSubjects} = require ('./utils/format')
//const { proffys } = require ('./database/fake_data')

function pageLanding(req, res) {
 return res.render("index.html")
 }

 function pageStudy(req, res) {
  const filters = req.query //req.query - estou recebendo dados

  const query = `
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;   
  `
  
  return res.render("study.html",{ proffys, filters, subjects, weekdays })
 }

 function pageGiveClasses(req, res) {
   const data = req.query 

   const isNotEmpty = Object.keys(data).length > 0
   //adicionar dados a lista de proffys
   //se tiver dados adicionar se não, n~çao adicionar
   if (isNotEmpty) {
       
     data.subject = getSubjects(data.subject)
     proffys.push(data)   //push de dados
     return res.redirect("/study")
   }
   // se não
 return res.render("give-classes.html", {subjects, weekdays}) 
 }

 module.exports = {
     pageLanding,
     pageStudy,
     pageGiveClasses
 }
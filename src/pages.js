//required traz a dependecia pra cá
//instalado o nodemon para reiniciar o servidor toda vez que houver alteração
//dados
const Database = require ('./database/db')

const {subjects, weekdays, getSubjects} = require ('./utils/format')
//const { proffys } = require ('./database/fake_data')

function pageLanding(req, res) {
 return res.render("index.html")
 }

 async function pageStudy(req, res) {
  const filters = req.query //req.query - estou recebendo dados

  if(filters.subject || !filters.weekday || !filters.time){ //como esta no html
    return res.render("study.html",{ filters, subjects, weekdays })

  } 
   //converter horas - chamar função
  const timeToMinutes = convertHoursToMinutes(filters.time)

  const query = `
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE EXISTS(
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = classes.id 
        AND class_schedule.weekday = ${ filters.weekday}
        AND class_schedule.time_from <= ${timeToMinutes}
        AND class_schedule.time_to > ${timeToMinutes}
    )
    AND classes.subject = '${filters.subject}'
  `
  //caso ocorra erro na consulta do banco, vamos capturar erro
    try {
        const db = await Database
        const proffys = await db.all(query)
        
        return res.render('study.html', {proffys, subjects, filters, weekdays})
        
    } catch (error) {
        console.log(error)
    }

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
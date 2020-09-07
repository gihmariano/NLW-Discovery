
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
    function getSubjects(subjectNumber){
       const arrayPosition = +subjectNumber - 1
       return subjects[arrayPosition]
   }
  //converter horas em  minutos
  function convertHoursToMinute(time){
      const [hour,minutes] = time.split(":")
      return Number((hour * 60) + minutes)    
  }



   module.exports = {
       subjects,
       weekdays,
       getSubjects
   }
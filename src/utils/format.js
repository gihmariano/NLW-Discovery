
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

   module.exports = {
       subjects,
       weekdays,
       getSubjects
   }
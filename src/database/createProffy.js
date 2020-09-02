//logica de inserir dados no banco
//exportar o banco
module.exports = async function(db, {proffyValue, classValue, classScheduleValue}) {
   //inserir dados na tablena de proffys
   //se não usar async na função, não consigo usar await

   //instruções sql
  const insertedProffy= await db.run(`     
      INSERT INTO proffys (
          name,
          avatar,
          whatsapp,
          bio
      ) VALUES (
          ${proffyValue.name},
          ${proffyValue.avatar},
          ${proffyValue.whatsapp},
          ${proffyValue.bio}
      );  
  `)

  const proffy_id = insertedProffy.lastID

  //inserri dados na tabela classes
  const insertedClass = await db.run(`
         INSERT INTO classes(
             subject,
             cost,
             proffy_id
         ) VALUES (
            ${classValue.subject},
            ${classValue.cost},
            ${proffy_id}
         );       
  `)
   
  const class_id = insertedProffy.lastID

  //inserir dados na tabela class schedule
  





}
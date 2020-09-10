//funcionalidade do botao +novohorario
// ->procurar o botão
document.querySelector("#add-time")
.addEventListener("click",cloneField) //quando clicar no botão(click, ação)
//-> quando clicar no botão 
//-> vai executar a ação de duplicar os campos
function cloneField() {  //duplicar campor e colocar na pagina
    const newcopyContainer= document.querySelector('.schedule-item').cloneNode(true)
    //limpar campos antes de colocar na página
    const copies = newcopyContainer.querySelectorAll('input')//pegar todos campos input

    //copies[0].value = "" //limpando o primeiro campo, atribuir vazio pra limpar o valor
    //para cada campo limpar
    copies.forEach(function(field){
        //pegar field do momento e limpa ele
        field.value = ""

    });


    //-> e colocar na página e onde?*/
    document.querySelector('#schedule-items').appendChild(newcopyContainer)

  }




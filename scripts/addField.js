//funcionalidade do botao +novohorario
// ->procurar o botão
document.querySelector('#add-time')
.addEventListener('click',cloneField) //quando clicar no botão(click, ação)
//-> quando clicar no botão 
//-> vai executar a ação de duplicar os campos
function cloneField() {  //duplicar campor e colocar na pagina
    const copies= document.querySelector('.schedule-item').cloneNode(true)
    //-> e colocar na página e onde?*/
    document.querySelector('#schedule-items').appendChild(copies)

  }




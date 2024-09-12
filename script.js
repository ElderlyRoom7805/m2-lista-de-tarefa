const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];
const li = document.getElementsByClassName("task__item");
const ul = document.querySelector(".tasks__list");
const form = document.querySelector(".form__container");
ul.removeChild(li[0]);
ul.removeChild(li[0]);
ul.removeChild(li[0]);

function renderElements(task){
  var codes = [];
  for(i=0; i<task.length; i++){
    let a = createTaskItem(task[i].title, task[i].type);
    codes.push(a);
  };
  for(o=0; o<codes.length; o++){
    ul.appendChild(codes[o])
  };
  return ul;
}

renderElements(tasks)
function createTaskItem(ti, ty){

  const liJs = document.createElement("li");
  const spanJs = document.createElement("span");
  const divJs = document.createElement("div");
  const pJs = document.createElement("p");
  const buttonJs = document.createElement("button");
  buttonJs.addEventListener("click", function (event){
    for(i=0; i<tasks.length; i++){
      if(tasks[i].title === ti){
        liJs.remove();
        return 
      }
    };
    for(i=0; i<arrValores.length; i++){
      if(arrValores[i].title === ti){
        liJs.remove();
        return
      }
    };
  })
  
  liJs.classList.add("task__item");
  divJs.classList.add("task-info__container");
  buttonJs.classList.add("task__button--remove-task");
  if(ty.toLowerCase() === "urgente"){
    spanJs.classList.add("task-type")
    spanJs.classList.add("span-urgent")
  } else if(ty.toLowerCase() === "importante"){
    spanJs.classList.add("task-type")
    spanJs.classList.add("span-important")
  } else if(ty.toLowerCase() === "normal"){
    spanJs.classList.add("task-type")
    spanJs.classList.add("span-normal")
  };
  
  pJs.innerText = ti;
  
  liJs.appendChild(divJs);
  liJs.appendChild(buttonJs);
  divJs.appendChild(spanJs);
  divJs.appendChild(pJs);
  
  return liJs;
}

const arrValores = [];
form.addEventListener("submit", function(event) {
  event.preventDefault()
  
  const input = document.querySelector(".form__input--text");
  const select = document.querySelector(".form__input--priority");
  const valores = {title: input.value ,type: select.value }
  arrValores.push(valores)
  tasks.push(valores)

  renderElements(arrValores)
  arrValores.pop()
}
)
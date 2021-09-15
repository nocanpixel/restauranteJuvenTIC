
let container= document.getElementById("containerId")

function modals(titulo,imagen,texts){
  let title=document.getElementById("staticBackdropLabel")
  let bodys=document.querySelector('.modal-description')
  let imgs=document.getElementById("img")

  title.innerHTML=titulo
  imgs.src=imagen
  bodys.innerHTML=texts
  
} 

function index(){

  for (let index = 0; index < menus.length; index++) {

    container.innerHTML+=`
    <div class="col">
    <a class="card-link-me" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick="modals('${menus[index].titulo}','${menus[index].img}','${menus[index].textos}')">
    <div class="card">
    <img class="card-img-top" src="${menus[index].img}" alt="Card image cap">

    <div class="card-body">
      <h5 class="card-title">${menus[index].titulo}</h5>
      <p class="card-text">${menus[index].body}</p>
    </div>
    </a>
  </div>
  </div>
    
    `;
  
 
}


}

index()

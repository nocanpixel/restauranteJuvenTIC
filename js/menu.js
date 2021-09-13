
let container= document.getElementById("containerId")

function modals(titulo,imagen,texts){
  let title=document.getElementById("staticBackdropLabel")
  let bodys=document.getElementById("body")
  let imgs=document.getElementById("img")

  title.innerHTML=titulo
  imgs.src=imagen
  console.log(texts)
  
} 

function index(){

  for (let index = 0; index < menus.length; index++) {

    container.innerHTML+=`
    <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="${menus[index].img}" alt="Card image cap">

              <div class="card-body">
                <h5 class="card-title">${menus[index].titulo}</h5>
                <p class="card-text">${menus[index].body}</p>
                
                <!-- Button trigger modal -->
                <button type="button"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick="modals('${menus[index].titulo}','${menus[index].img}')">
                  Observar
                </button>
                
              </div>         
      </div>
    
    `;
  
 
}


}

index()

const contentCard = document.querySelector('.contentCard');
var start = 0;

const toDom =()=>{
    $.getJSON("dataCards.json", (data)=>{
      let maxSize = data['dataDishes'].length;
      let start = 0;
      let elementsPerPage = 3;
      let limit = elementsPerPage;
      goFun(start,limit)
      function goFun(start,limit){
        for(let i=start;i<limit;i++){
          console.log(data['dataDishes'][i].imgDish)
          contentCard.innerHTML+=`
            <div class="col-8">
            <div class="card mb-3" >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${data['dataDishes'][i].imgDish}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 style="
                      color:var(--cl-tertiary);
                      font-weight: bold;
                      font-size:1.8em;
                      "
                      class="card-title">${data['dataDishes'][i].nameDish}</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <h2>${data['dataDishes'][i].priceDish}$</h2>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        <div class="col-4">
            <span id="allButtons" class="${data['dataDishes'][i].decrementButton}">-</span>
            <input type="text" id="valueInput" class="${data['dataDishes'][i].value}" value="0"><span id="allButtons" class="${data['dataDishes'][i].incrementButton}">+</span><br><br>
            <button class="${data['dataDishes'][i].addCart} btn btn-sm" id="addCar">Añadir al carrito</button>
        </div>
            `
            
        }
      }
      $('#nextValue').click(function(){
  
        var next = limit;
        if(maxSize>=next) {
        limit = limit+elementsPerPage;
        contentCard.innerHTML='';
        goFun(next,limit);
        }
        });
        $('#preeValue').click(function(){
        var pre = limit-(2*elementsPerPage);
        if(pre>=0) {
        limit = limit-elementsPerPage;
        contentCard.innerHTML='';
        goFun(pre,limit); 
        }
        });
    })
}


toDom();
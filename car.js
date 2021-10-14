const contentCard = document.querySelector('.col-7');
dataStorage = JSON.parse(localStorage.getItem('myOrder'));
elementsSaved = dataStorage;

if(localStorage.length != 0){

    dataStorage.forEach(element => {
        contentCard.innerHTML+=`
            
            <div id="${element.id}" class="card mb-3" >
                <div class="row g-0">
                <div class="col-md-4">
                    <img src="${element.imgDish}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <i style="float:right;padding-top:9px;cursor:pointer;" class="${element.id} far fa-trash-alt"></i>
                    <h5 style="
                    color:var(--cl-tertiary);
                    font-weight: bold;
                    font-size:1.8em;
                    "
                    class="card-title">${element.nameDish}</h5>
                    
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <h2>${element.priceDish}$</h2>
                    <span id="allButtons" class="${element.decrementButton}">-</span>
            <input type="text" id="valueInput" class="${element.value}" value="${element.amount}"><span id="allButtons" class="${element.incrementButton}">+</span><br><br>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        `
    
    });
    dataStorage.forEach(element =>{
        $(`.${element.id}`).on('click', ()=> {
            const result = elementsSaved.filter(dish=> dish.id!=`${element.id}`);
            const update = localStorage.setItem("myOrder", JSON.stringify(result));
            dataStorage = update;
            location.reload();
        })
    });
    sumando = 0;
    dataStorage.forEach(element =>{
        const value = parseInt(element.priceDish);
        const amount = parseInt(element.amount);
        const pricePerDish = value*amount;
        sumando+=pricePerDish;
    });
    document.querySelector('.total').innerHTML = `${sumando}$`;
    
}else{
    contentCard.innerHTML = 'No hay elementos en el carrito '
}

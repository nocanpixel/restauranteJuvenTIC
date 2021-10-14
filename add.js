$.getJSON("dataCards.json", (data)=>{
    $.each(data['dataDishes'], (key, val)=>{
        let getStorage = JSON.parse(localStorage.getItem("myOrder"));
        const value = document.querySelector(`.${val.value}`);
        localStorage.length == 0 ? elementsSaved = [] : elementsSaved = getStorage;
        $(`.${val.addCart}`).on('click', ()=>{
                value.value == '0'
                ? null
                : elementsSaved.push({
                    id:val.id,
                    nameDish:val.nameDish,
                    priceDish:val.priceDish,
                    amount:value.value,
                    imgDish:val.imgDish,
                    incrementButton:val.incrementButton,
                    decrementButton:val.decrementButton,
                    value:val.value,
                    addCar:val.addCart
                });
                if(value.value != '0'){
                    localStorage.setItem("myOrder", JSON.stringify(elementsSaved));
                    document.querySelector('.elementAdded').innerHTML = val.nameDish;
                    $('.toast').toast('show');
                    value.value = 0;
                }

        })  
    });
});


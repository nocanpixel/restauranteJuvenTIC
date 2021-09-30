$.getJSON("dataCards.json", (data)=>{
    $.each(data['dataDishes'], (key, val)=>{
        const value = document.querySelector(`.${val.value}`);
        let getStorage = JSON.parse(localStorage.getItem("myOrder"));
        localStorage.length == 0 ? elementsSaved = [] : elementsSaved = getStorage;
        $(`.${val.addCart}`).on('click', ()=>{
                value.value == '0'
                ? null
                : elementsSaved.push({
                    nameDish:val.nameDish,
                    priceDish:val.priceDish,
                    amount:value.value
                });
                if(value.value != '0'){
                    localStorage.setItem("myOrder", JSON.stringify(elementsSaved));
                    value.value = 0;
                }

        })  
    });
});


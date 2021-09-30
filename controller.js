$.getJSON("dataCards.json", function(data){
    $.each(data['dataDishes'], (key, val)=>{
        $(`.${val.incrementButton}`).on('click', ()=>{
            console.log(val.amount)
            document.querySelector(`.${val.value}`).value == '0'
            ? document.querySelector(`.${val.value}`).value = ++document.querySelector(`.${val.value}`).value
            : document.querySelector(`.${val.value}`).value = ++document.querySelector(`.${val.value}`).value;
        })

        $(`.${val.decrementButton}`).on('click', ()=>{
            document.querySelector(`.${val.value}`).value == '0'
            ? null
            : document.querySelector(`.${val.value}`).value = --document.querySelector(`.${val.value}`).value;
        })
    })


})



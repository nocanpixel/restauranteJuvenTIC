if(localStorage.length !=0){
    dataStorage.forEach(element=>{
        $(`.${element.incrementButton}`).on('click', ()=>{
            document.querySelector(`.${element.value}`).value == '0'
            ? document.querySelector(`.${element.value}`).value = ++document.querySelector(`.${element.value}`).value
            : document.querySelector(`.${element.value}`).value = ++document.querySelector(`.${element.value}`).value;
        })

        $(`.${element.decrementButton}`).on('click', ()=>{
            document.querySelector(`.${element.value}`).value == '0'
            ? null
            : document.querySelector(`.${element.value}`).value = --document.querySelector(`.${element.value}`).value;
        })
    })
}
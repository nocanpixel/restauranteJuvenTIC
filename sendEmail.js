const sendMail = () =>{
    const total = document.querySelector(`.total`);
    const totalFormatted = total.textContent.substring(0, total.textContent.length-1);
    const userName = document.querySelector(`#username`);
    const email = document.querySelector(`#email`);
    const dishes = [];
    dataStorage.forEach(element=>{
        dishes.push({
            nameDish:element.nameDish,
            priceDish:element.priceDish
        })
    })

    const dataFormat = JSON.stringify(dishes).replace(/("|:)|(nameDish|priceDish)/gi, '');
    


    let tempParams = {
        from_name: userName.value,
        name_guest: userName.value,
        email_guest: email.value,
        total_price: totalFormatted,
        dishes_guest: dataFormat
    }

    emailjs.send('service_96u7k67', 'template_zruitvf', tempParams)
    .then(function(res){
        console.log("success", res.status);
        localStorage.removeItem('myOrder');
        location.reload();
    })
    emailjs.send('service_96u7k67', 'template_2hg7edw', tempParams)
    .then(function(res){
        console.log("success 2", res.status);
        localStorage.removeItem('myOrder');
    })
}


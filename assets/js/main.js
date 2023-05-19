var card=document.querySelector(".row")
fetch('https://restcountries.com/v3.1/all')
.then(res=>res.json())
.then(data=> {
    for(let i=0; i<data.length; i++){
            card.innerHTML+=` <div class="col-2">
            <div class="card" >
            <img src="${data[i].image}"class="card-img-top" >
            </div>`
        }
});
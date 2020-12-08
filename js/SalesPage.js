import client from "./Client.js";
import Router from "./Routing.js";
import {getProducts} from "./MainPageFunctions.js";
getProducts().then(()=>{
    client.getData('sales').then((res)=>{
    console.log(res.length+" fetch")
    console.log(document.getElementsByClassName('mySlides fade').length+" image")
    for (let i = 0; i < res.length; i++) {
        let div = document.createElement('div')

        div.innerHTML = document.getElementsByClassName('mySlides fade')[i].innerHTML
            + '<h2 style="text-align: center">' + res[i].name + '</h2>' + '<br>' + res[i].description
        Router.add(div, '/action/'+ (i+1))
    }

})
})

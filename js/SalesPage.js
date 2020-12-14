import client from './Client.js'
import Router from './Routing.js'
import {getProducts} from './MainPageFunctions.js'
export function getSales(){
    getProducts().then(()=>{
        client.getData('sales').then((res)=>{
            for (let i = 0; i < res.length; i++) {
                const div = document.createElement('div')

                div.innerHTML = document.getElementsByClassName('mySlides fade')[i].innerHTML
                    + '<h2 style="text-align: center">' + res[i].name + '</h2>' + '<br>' + res[i].description
                Router.add(div.innerHTML, '/action/'+ (i+1))
            }

        })
    })

}


import client from "./Client.js";
import Router from "./Routing.js";
import {showSlides} from "./Slider.js";
let tempDiv={
    temp_div:[]
}
function getProduct() {
  return   {
        price:"",
        url:"",
        id:""
    }
}

let product_array={
    products:[]
}
export  {obj,getProducts,h}
export default tempDiv
let obj
let h
document.getElementById('temp').className = 'lds-dual-ring'
function buyProduct() {
    let count = parseInt(document.getElementById('basic').innerText.split(' ')[0]);
    let price = parseFloat(document.getElementById('basic').innerText.split(' ')[1]);
    const prices = document.getElementsByClassName('font-weight-bold')
    const buyButtons = document.getElementsByClassName('btn-outline-danger')
    for (let i = 0; i < buyButtons.length; i++) {
        buyButtons[i].addEventListener('click', function () {
           console.log(i)
            let product= getProduct()
            count += 1
            let x=parseFloat(prices[i].innerHTML.substring(0, prices[i].innerHTML.indexOf('г')))
            price +=x
            // console.log(557.9399999999999.toFixed(2))
            document.getElementById('basic').innerHTML = count + " " + price.toFixed(2)
            product.price = obj[i].price

            product.url = obj[i].url
            product.id=i
            // for (let j = 0; j < obj.length; j++) {
            //     if(obj[j].id===product.id){
            //         console.log(product.id)
            //     }
            // }

            let temp = document.createElement('img')
            temp.src = obj[i].images[0]
            tempDiv.temp_div.push(document.createElement('div'))
            // console.log(temp_div[temp_div.length-1])
           tempDiv.temp_div[tempDiv.temp_div.length-1].innerHTML= '<div class="rcorners2_product" style="margin-top: 10px" >\n' + temp.outerHTML +
            '<h2>' + obj[i].productName + '</h2>'
            + obj[i].Ingredients +
            '    <div style="display: flex;justify-content: center;margin-top: 5px" >\n' +
            '        <p class="font-weight-bold" style="margin-right: 10px">' + obj[i].price + "грн" + '</p>\n' +
            '    </div>\n' +
            '</div>'

          product_array.products.push(product)
           console.log(product_array.products)
            localStorage.setItem('cart', JSON.stringify(product_array))

        })

    }
}

function createTemps(i) {
    let temp = document.createElement('img')
    temp.src = obj[i].images[0]
    let div = document.createElement('div')
    let button = document.createElement('a')
    button.className = 'btn btn-dark'
    button.textContent = "Информация"
    button.style = "margin-left:4px"
    button.href = '#/catalog/'+obj[i].url
    return {temp, div, button};
}

function forMainProducts(out) {
    obj = out
    let temp = document.createElement('img')
    temp.src = out[5].images[0]
    let divs = []
    for (let i = 0; i < 3; i++) {
        divs.push(document.createElement('div'))
    }
    divs[0].innerHTML = temp.outerHTML + '<h4>' + out[5].productName + '</h4>' +
        '<h5>' + 'Ингредиенты' + '</h5>' + out[5].Ingredients + divs[0].innerHTML
    temp.src = out[0].images[0]
    divs[1].innerHTML = temp.outerHTML + '<h4>' + out[0].productName + '</h4>' +
        '<h5>' + 'Ингредиенты' + '</h5>' + out[0].Ingredients + divs[1].innerHTML
    temp.src = out[2].images[0]
    divs[2].innerHTML = temp.outerHTML + '<h4>' + out[2].productName + '</h4>' +
        '<h5>' + 'Ингредиенты' + '</h5>' + out[2].Ingredients + divs[2].innerHTML
    let div = document.createElement('div')
    return {divs, div};
}

function getProducts() {
   return  client.getData('products')
        .then((out) => {

            let {divs, div} = forMainProducts(out);
            div.innerHTML = `<div class="slideshow-container">
        <div class="mySlides fade" >
            <a href="#/action/1">
            <img
                src="https://media.dominos.ua/__sized__/promotions/promotions_image/2020/10/29/unicorn-vtornik--80_news-crop-c0-5__0-5-2300x1352-70.jpg"
                style="width:100%" alt="" ></a>
        </div>
        <div class="mySlides fade">
            <a href="#/action/2">
            <img
                src="https://media.dominos.ua/__sized__/promotions/promotions_image/2020/08/12/woweekend_news-crop-c0-5__0-5-960x565-70.jpg"
                style="width:100%" alt="" ></a>
        </div>
        <div class="mySlides fade" >
            <a href="#/action/3">
            <img
                src="https://media.dominos.ua/__sized__/promotions/promotions_image/2020/10/29/-30_news-crop-c0-5__0-5-2300x1352-70.jpg"
                style="width:100%" alt></a>
        </div>
        <div class="mySlides fade">
            <a href="#/action/4">
            <img
                src="https://media.dominos.ua/__sized__/promotions/promotions_image/2020/10/29/-30-wings_news-crop-c0-5__0-5-2300x1352-70.jpg"
                style="width:100%" alt>
                </a>
        </div>

    </div>
    <br>
        <div style="text-align:center">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
        <br>
        <header><h1 style="text-align: center">Хит недели</h1></header>
        `

            // button.id=obj[i].id
            // console.log(div.innerHTML)
            div.innerHTML += '<div class="rcorners2" style="margin-top: 10px;">'
                + divs[0].innerHTML +
                '<div style="display: flex;justify-content: center;margin-top: 10px">' +
                '<p class="font-weight-bold" style="margin-right: 10px">' + "187.99грн" + '</p>' +
                '</div>' +
                '</div>' +
                '<div class="rcorners2" style="margin-top: 10px;">' + divs[1].innerHTML +
                '<div style="display: flex;justify-content: center;margin-top: 10px">' +
                '<p class="font-weight-bold" style="margin-right: 10px">' + "92.99грн" + '</p>' +
                '</div>' +
                '</div>' +
                ' <div class="rcorners2" style="margin-top: 10px;">' + divs[2].innerHTML +
                '<div style="display: flex;justify-content: center;margin-top: 10px">' +
                '<p class="font-weight-bold" style="margin-right: 10px">' + "124.99грн" + '</p>' +
                ' </div>' +
                '</div>' +
                '</div>'
            // console.log(div.innerHTML)
            Router.add(div, '/')
            // Router.getState(div)
            // console.log(div.innerHTML)
            document.getElementById('temp').className = ''
            document.getElementById('temp').innerHTML = div.innerHTML
            showSlides()

        })
        .then(() => {
            let products = document.createElement('div')
            let rows = []
            for (let i = 0; i < 4; i++) {
                rows[i] = document.createElement('div')
                rows[i].className = 'row'
            }
            for (let i = 0; i < obj.length; i++) {
                let {temp, div, button} = createTemps(i);
                div.innerHTML = '<div class="rcorners2_product" style="margin-top: 10px" >\n' + temp.outerHTML +
                    '<h2>' + obj[i].productName + '</h2>'
                    + obj[i].Ingredients +
                    '    <div style="display: flex;justify-content: center;margin-top: 10px" >\n' +
                    '        <p class="font-weight-bold" style="margin-right: 10px">' + obj[i].price + "грн" + '</p>\n' +
                    '        <button type="button" class="btn btn-outline-danger" >Купить</button>\n' +
                    button.outerHTML +
                    '    </div>\n' +
                    '</div>'
                Router.add(createDivForPizza(obj[i]),'/catalog/'+obj[i].url)
                // div.id = obj[i].url

                if (i - 1 >= 0 && obj[i].categoryId > obj[i - 1].categoryId) {
                    let t = document.createElement('div')
                    t.className = 'w-100'
                    document.getElementById('temp').appendChild(t)
                }
                div.className = 'col'
                switch (obj[i].categoryId) {
                    case 1:
                        if (obj[i].url === 'pizza_margarita') products.innerHTML = '<h2 style="text-align: center">' + 'Лучшая цена' + '</h2>'
                        rows[0].appendChild(div)
                        products.appendChild(rows[0])
                        break;
                    case 2:
                        if (obj[i].url === 'pizza_gavaiska') products.innerHTML += '<h2 style="text-align: center">' + 'Классические пиццы' + '</h2>'
                        rows[1].appendChild(div)
                        products.appendChild(rows[1])
                        break;
                    case 3:
                        if (obj[i].url === 'pizza_bavarska') products.innerHTML += '<h2 style="text-align: center">' + 'Фирменные пиццы' + '</h2>'
                        rows[2].appendChild(div)
                        products.appendChild(rows[2])
                        break;
                    case 4:
                        if (obj[i].url === 'pizza_mitza') products.innerHTML += '<h2 style="text-align: center">' + 'Пиццы легенды' + '</h2>'
                        rows[3].appendChild(div)
                        products.appendChild(rows[3])
                        break;
                    default:
                        break
                }

                // products.appendChild(div)
            }
            Router.add(products, '/catalog')
        })
        .then(() => {
            buyProduct();
        })

        .catch(err => console.error(err));
}

    //     window.addEventListener('hashchange',function () {
    //     Router.getState()
    // })
// let data=getData()
    // .then(()=>{
    //     document.getElementById('perform').addEventListener('click', function () {
    //         // console.log(product.count)
    //         if (product.count !== 0) {
    //             const url = 'https://my-json-server.typicode.com/Maks-oss/LAB4_PetrukhnoM.R/orders'
    //             try {
    //                 var data;
    //                 for (let j = 0; j < obj.length; j++) {
    //                     // console.log(obj[j])
    //                     if(product.url===obj[j].url)data=obj[j]
    //                 }
    //                 console.log(data)
    //                 const response = fetch(url, {
    //                     method: 'POST', // или 'PUT'
    //                     body: data, // данные могут быть 'строкой' или {объектом}!
    //                     // headers: {
    //                     //     'Content-Type': 'application/json'
    //                     // }
    //                 });
    //                 const json = response.json();
    //                 console.log('Успех:', JSON.stringify(json));
    //             } catch (error) {
    //                 console.error('Ошибка:', error);
    //                 console.log('ERROR')
    //             }
    //         } else {
    //             alert('Пожалуйста выберите товар')
    //         }
    //     })
    // })
window.addEventListener('hashchange',function () {
    Router.getState()
    buyProduct();
})




function createDivForPizza(el){
    let div=document.createElement('div')
    let image=document.createElement('img')
    image.src=el.images[1]
    div.innerHTML='<div style="text-align: center;justify-content: center">'+
        image.outerHTML+'<br>'+'<h1>'+el.productName+'</h1>'+'<br>' +el.Ingredients+'<br>'+
        el.price+" грн"+
        '</div>'
    return div
}


window.onload=function () {
    window.location.hash='#/'
    //
    // localStorage.clear()
    h=JSON.parse(localStorage.getItem('cart'))
     // console.log(h.products.length)
    if(h!==null){
        let sum=0,count=0
        for (let i = 0; i < h.products.length; i++) {
            sum+=h.products[i].price
            count+=1
        }
        console.log(sum+" "+count)
        document.getElementById('basic').innerHTML=count+" "+sum.toFixed(2)

    }
}
import {order} from "./Order.js";

document.getElementById('order').addEventListener('click',function () {
    Router.add(order,'/order/1')
    window.location.hash='/order/1'
})


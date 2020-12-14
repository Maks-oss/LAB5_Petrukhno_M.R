import {order} from './Order.js'
import client from './Client.js'
import Router from './Routing.js'
import showSlides from './Slider.js'
import {getSales} from './SalesPage.js'

let tempDiv={
    temp_div:[]
}
function getProduct() {
    return {
        price:'',
        url:'',
        id:''
    }
}

let productArray={
    products:[]
}

let obj
let h
export {obj,getProducts,h,tempDiv}
if (document.getElementById('temp') !== null) document.getElementById('temp').className = 'lds-dual-ring'



function createTemps(i) {
    let temp = document.createElement('img')
    temp.src = obj[i].images[0]
    let div = document.createElement('div')
    let button = document.createElement('a')
    button.className = 'btn btn-dark'
    button.textContent = 'Информация'
    button.style = 'margin-left:4px'
    button.href = '#/catalog/' + obj[i].url
    return {temp, div, button}
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
    return {divs, div}
}



function getProducts() {
    return client.getData('products')
        .then((out) => {

            let {divs, div} = forMainProducts(out)
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
            div.innerHTML += '<div class="rcorners2" style="margin-top: 10px;">'
                    + divs[0].innerHTML +
                    '<div style="display: flex;justify-content: center;margin-top: 10px">' +
                    '<p class="font-weight-bold" style="margin-right: 10px">' + '187.99грн' + '</p>' +
                    '</div>' +
                    '</div>' +
                    '<div class="rcorners2" style="margin-top: 10px;">' + divs[1].innerHTML +
                    '<div style="display: flex;justify-content: center;margin-top: 10px">' +
                    '<p class="font-weight-bold" style="margin-right: 10px">' + '92.99грн' + '</p>' +
                    '</div>' +
                    '</div>' +
                    ' <div class="rcorners2" style="margin-top: 10px;">' + divs[2].innerHTML +
                    '<div style="display: flex;justify-content: center;margin-top: 10px">' +
                    '<p class="font-weight-bold" style="margin-right: 10px">' + '124.99грн' + '</p>' +
                    ' </div>' +
                    '</div>' +
                    '</div>'
            // console.log(div.innerHTML)
            Router.add(div.innerHTML, '/')
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
                let {temp, div, button} = createTemps(i)
                div.innerHTML = '<div class="rcorners2_product" style="margin-top: 10px" >\n' + temp.outerHTML +
                        '<h2>' + obj[i].productName + '</h2>'
                        + obj[i].Ingredients +
                        '    <div style="display: flex;justify-content: center;margin-top: 10px" >\n' +
                        '        <p class="font-weight-bold" style="margin-right: 10px">' + obj[i].price + 'грн' + '</p>\n' +
                        '        <button type="button" class="btn btn-outline-danger" >Купить</button>\n' +
                        button.outerHTML +
                        '    </div>\n' +
                        '</div>'
                Router.add(createDivForPizza(obj[i]).innerHTML, '/catalog/' + obj[i].url)
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
                    break
                case 2:
                    if (obj[i].url === 'pizza_gavaiska') products.innerHTML += '<h2 style="text-align: center">' + 'Классические пиццы' + '</h2>'
                    rows[1].appendChild(div)
                    products.appendChild(rows[1])
                    break
                case 3:
                    if (obj[i].url === 'pizza_bavarska') products.innerHTML += '<h2 style="text-align: center">' + 'Фирменные пиццы' + '</h2>'
                    rows[2].appendChild(div)
                    products.appendChild(rows[2])
                    break
                case 4:
                    if (obj[i].url === 'pizza_mitza') products.innerHTML += '<h2 style="text-align: center">' + 'Пиццы легенды' + '</h2>'
                    rows[3].appendChild(div)
                    products.appendChild(rows[3])
                    break
                default:
                    break
                }

                // products.appendChild(div)
            }
            Router.add(products.innerHTML, '/catalog')
        })
        .then(() => {
            buyProduct()
        })
        .catch(err => console.error(err))
}


function createDivForPizza(el) {
    let div = document.createElement('div')
    let image = document.createElement('img')
    image.src = el.images[1]
    div.innerHTML = '<div style="text-align: center;justify-content: center">' +
            image.outerHTML + '<br>' + '<h1>' + el.productName + '</h1>' + '<br>' + el.Ingredients + '<br>' +
            el.price + ' грн' +
            '</div>'
    return div
}
export function listeners() {
    window.addEventListener('hashchange', function () {
        Router.getState()
        buyProduct()
    })
    window.onload = function () {
        window.location.hash = '#/'
        h = JSON.parse(localStorage.getItem('cart'))
        if (h !== null) {
            let sum = 0
            let count = 0
            for (let i = 0; i < h.products.length; i++) {
                sum += h.products[i].price
                count += 1
            }
            console.log(sum + ' ' + count)
            document.getElementById('basic').innerHTML = count + ' ' + sum.toFixed(2)

        }
    }

    if (document.getElementById('order') !== null) {
        document.getElementById('order').addEventListener('click', function () {
            Router.add(order.innerHTML, '/order/1')
            window.location.hash = '/order/1'
        })
    }
}
export function createElement(el) {
    let div = document.createElement('div')
    let temp = document.createElement('img')
    temp.src = el.images[0]
    div.innerHTML = '<div class="rcorners2_product" style="margin-top: 10px" >\n' + temp.outerHTML +
            '<h2>' + el.productName + '</h2>'
            + el.Ingredients +
            '    <div style="display: flex;justify-content: center;margin-top: 5px" >\n' +
            '        <p class="font-weight-bold" style="margin-right: 10px">' + el.price + 'грн' + '</p>\n' +
            '    </div>\n' +
            '</div>'
    return div
}

getSales()
function buyProduct() {
    let count = parseInt(document.getElementById('basic').innerText.split(' ')[0])
    let price = parseFloat(document.getElementById('basic').innerText.split(' ')[1])
    const prices = document.getElementsByClassName('font-weight-bold')
    const buyButtons = document.getElementsByClassName('btn-outline-danger')
    for (let i = 0; i < buyButtons.length; i++) {
        buyButtons[i].addEventListener('click', function () {
            const product = getProduct()
            count += 1
            let x = parseFloat(prices[i].innerHTML.substring(0, prices[i].innerHTML.indexOf('г')))
            price += x

            document.getElementById('basic').innerHTML = count + ' ' + price.toFixed(2)
            product.price = obj[i].price

            product.url = obj[i].url
            product.id = i
            let temp = document.createElement('img')
            temp.src = obj[i].images[0]
            tempDiv.temp_div.push(document.createElement('div'))
            tempDiv.temp_div[tempDiv.temp_div.length - 1].innerHTML = '<div class="rcorners2_product" style="margin-top: 10px" >\n' + temp.outerHTML +
                '<h2>' + obj[i].productName + '</h2>'
                + obj[i].Ingredients +
                '    <div style="display: flex;justify-content: center;margin-top: 5px" >\n' +
                '        <p class="font-weight-bold" style="margin-right: 10px">' + obj[i].price + 'грн' + '</p>\n' +
                '    </div>\n' +
                '</div>'

            productArray.products.push(product)
            console.log(productArray.products)
            localStorage.setItem('cart', JSON.stringify(productArray))

        })

    }
}
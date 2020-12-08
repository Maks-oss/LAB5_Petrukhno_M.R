import templateProcessor from "./templateProcessor.js";
import {showSlides} from "./Slider.js"
import {process} from "./Order.js";

import{obj,h,tempDiv} from "./MainPageFunctions.js";
class Routing {
    map = []
    routes = []
    add(view,link){
        this.routes.push(link)
        this.map.push(view)
        // console.log(this.routes[this.routes.length-1])
    }

    getState(){
        // console.log(this.map.length)
        const a=window.location.hash.split("#")[1]
        const pizzaMatcher=a.substring(a.indexOf('_')+1,a.length)
        // console.log(pizzaMatcher)
        const matches = a.match(/(\d+)/);
        const x=matches===null?'':matches[0]
        switch (a){
            case '/catalog':
                // document.getElementById('temp').className="row"
                templateProcessor.render(this.map[this.routes.indexOf('/catalog')])
                break;
            case'/':
                if(this.routes.length!==0) {
                    document.getElementById('temp').className = ""
                    templateProcessor.render(this.map[this.routes.indexOf('/')])
                    showSlides()
                }
                break;
            case '/action/'+x:
                console.log('/action/'+matches[0])
                templateProcessor.render(this.map[this.routes.indexOf('/action/'+matches[0])])
                break;
            case '/catalog/pizza_'+pizzaMatcher:
                templateProcessor.render(this.map[this.routes.indexOf('/catalog/pizza_'+pizzaMatcher)])
                break;
            case '/order':
                templateProcessor.render(this.map[this.routes.lastIndexOf('/order')])
                document.getElementsByClassName('btn btn-primary')[0].addEventListener('click',process)
                while (document.getElementById('main').firstChild) {
                    document.getElementById('main').removeChild(document.getElementById('main').lastChild);
                }
                document.getElementById('main').innerHTML=''
                if(h!==null) {
                    for (let i = 0; i < obj.length; i++) {
                        for (let j = 0; j < h.products.length; j++) {
                            if(obj[i].id===h.products[j].id) {
                                document.getElementById('main').appendChild(createElement(obj[i]))
                                break
                            }
                        }
                    }
                }
                console.log(Array.from(document.getElementById('main').childNodes).length+" "+tempDiv.temp_div.length)
                for (let i = 0; i < tempDiv.temp_div.length; i++) {
                    document.getElementById('main').appendChild(tempDiv.temp_div[i])
                }
                break;
            case '/order/1':
                templateProcessor.render(this.map[this.routes.lastIndexOf('/order/1')])

                break;
            default:
                document.getElementById('temp').className=""
                templateProcessor.render(this.map[this.routes.indexOf('/')])
                break;
        }
    }
}

function createElement(el) {
    let div=document.createElement('div')
    let temp = document.createElement('img')
    temp.src = el.images[0]
    div.innerHTML='<div class="rcorners2_product" style="margin-top: 10px" >\n' + temp.outerHTML +
        '<h2>' + el.productName + '</h2>'
        + el.Ingredients +
        '    <div style="display: flex;justify-content: center;margin-top: 5px" >\n' +
        '        <p class="font-weight-bold" style="margin-right: 10px">' + el.price + "грн" + '</p>\n' +
        '    </div>\n' +
        '</div>'
    return div
}
let Router =new Routing()
export default Router
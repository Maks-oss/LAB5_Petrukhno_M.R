import templateProcessor from './templateProcessor.js'

import {process} from './Order.js'
import {obj,h,tempDiv,createElement} from './MainPageFunctions.js'
import showSlides from './Slider.js'

class Routing {
    map = [];routes=[]
    add(view,link){
        this.routes.push(link)
        this.map.push(view)
    }

    getState() {
        const a=window.location.hash.split('#')[1]
        const pizzaMatcher=a.substring(a.indexOf('_')+1,a.length)
        const matches = a.match(/(\d+)/)
        const x=matches===null?'':matches[0]
        switch (a){
        case '/catalog':
            templateProcessor.render(this.map[this.routes.indexOf('/catalog')])
            break
        case'/':
            if(this.routes.length!==0) {
                document.getElementById('temp').classList.remove('row')
                templateProcessor.render(this.map[this.routes.indexOf('/')])
                showSlides()
            }
            break
        case '/action/'+x:
            console.log('/action/'+matches[0])
            templateProcessor.render(this.map[this.routes.indexOf('/action/'+matches[0])])
            break
        case '/catalog/pizza_'+pizzaMatcher:
            templateProcessor.render(this.map[this.routes.indexOf('/catalog/pizza_'+pizzaMatcher)])
            break
        case '/order':
            templateProcessor.render(this.map[this.routes.lastIndexOf('/order')])
            if(document.getElementsByClassName('btn btn-primary')[0]!==undefined)document.getElementsByClassName('btn btn-primary')[0].addEventListener('click',process)

            if(document.getElementById('main')!==null)document.getElementById('main').innerHTML=''
            if(h!==null&&obj!==undefined) {
                for (let i = 0; i < obj.length; i++) {
                    for (let j = 0; j < h.products.length; j++) {
                        if(obj[i].id===h.products[j].id) {
                            document.getElementById('main').appendChild(createElement(obj[i]))
                            break
                        }
                    }
                }
            }
            if(tempDiv.temp_div!==undefined) {
                for (let i = 0; i < tempDiv.temp_div.length; i++) {
                    document.getElementById('main').appendChild(tempDiv.temp_div[i])
                }
            }
            break
        case '/order/1':
            templateProcessor.render(this.map[this.routes.lastIndexOf('/order/1')])
            break
        default:
            document.getElementById('temp').className=''
            showSlides()
            templateProcessor.render(this.map[this.routes.indexOf('/')])
            return false
        }
        return true
    }
}
let Router =new Routing()
export default Router
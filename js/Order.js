
import {tempDiv} from './MainPageFunctions.js'
import {extracted} from './Form.js'
export let order
export function process() {
    extracted()
    let b = true
    for (let i = 0; i < document.getElementsByClassName('invalid-feedback').length; i++) {
        console.log(document.getElementsByClassName('invalid-feedback')[i].style.color)
        if (document.getElementsByClassName('invalid-feedback')[i].style.color !== 'transparent') {
            b = false
        }
    }
    if (!b) {
        alert('Введите поля')
        return false

    } else {
        alert('Успех')

        fetch('https://my-json-server.typicode.com/Maks-oss/LAB4_PetrukhnoM.R/orders',{
            method:'POST',
            body:JSON.stringify(tempDiv.temp_div)
        }).then((response)=>{ return response.json()})
            .then(()=>{

                document.getElementById('basic').innerHTML='0 0.00'
                order=document.createElement('div')

                order.innerHTML=document.getElementById('main').innerHTML
                while (document.getElementById('main').firstChild) {
                    document.getElementById('main').removeChild(document.getElementById('main').lastChild)
                }
                localStorage.removeItem('cart')
                tempDiv.temp_div=[]
                console.log(tempDiv.temp_div.length)
                window.location.hash='/'

            })
        return true
    }
}

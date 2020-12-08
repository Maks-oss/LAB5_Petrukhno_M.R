export function extracted() {

    let values = document.getElementsByClassName('form-control')

    if (!emailIsValid(values[0].value)) {
        console.log(emailIsValid(values[0].value)+" "+phonenumber(values[2].value))
        document.getElementsByClassName('invalid-feedback')[0].style.display = 'initial'
        document.getElementsByClassName('invalid-feedback')[0].style.color = 'red'
    }

    if (!phonenumber(values[2].value)) {
        document.getElementsByClassName('invalid-feedback')[2].style.display = 'initial'
        document.getElementsByClassName('invalid-feedback')[2].style.color = 'red'
    }

    let b=false
    for (let i = 0; i < 8; i++) {
        if (values[i].value === "" || (i > 5 && !isValidNumber(values[i].value))) {
            document.getElementsByClassName('invalid-feedback')[i].style.display = 'initial'
            document.getElementsByClassName('invalid-feedback')[i].style.color = 'red'
        } else if(values[i].value !== "" && (i > 5 && isValidNumber(values[i].value))
            &&(emailIsValid(values[0].value)&&phonenumber(values[2].value))) {
            b=true
            document.getElementsByClassName('invalid-feedback')[i].style.color = 'transparent'
        }

    }
    if(b){
        for (let i = 0; i < document.getElementsByClassName('invalid-feedback').length; i++) {
            document.getElementsByClassName('invalid-feedback')[i].style.color='transparent'
        }
    }
}
 function emailIsValid (email) {
    return /\S+@\S+\.\S+/.test(email)
}

 function phonenumber(inputtxt)
{
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneno.test(inputtxt);

}
 function isValidNumber(number){
    let numbers = /^[0-9]+$/;
    return numbers.test(number)
}
import Router from "./Routing.js";
import {getProducts} from "./MainPageFunctions.js";
// import temp_div from "./MainPageFunctions.js";,product_array,obj
// export let temp_div=[]
document.getElementById('perform').addEventListener('click',function () {
    getProducts()
        .then(()=>{
            // console.log(product.url)
            let div=document.createElement('div')
            div.innerHTML= `<div class="form_class">
            <div>
                <h3 style="margin-left: 10px;margin-top: 10px">Контакты</h3>
                <form class="needs-validation" noValidate>
                    <div class="form-group">
                        <label >E-mail</label>
                        <input type="email" class="form-control" id="exampleInputEmail1"
                               aria-describedby="Введите e-mail...." placeholder="Enter email" required>
                            <!--        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                            <div class="invalid-feedback">
                                Введите верный e-mail
                            </div>

                    </div>
                    <div class="form-group">
                        <label>Имя</label>
                        <input type="email" class="form-control" aria-describedby="Введите имя...."
                               placeholder="Введите имя...." required>
                            <div class="invalid-feedback">
                                Введите имя
                            </div>
                    </div>
                    <div class="form-group">
                        <label>Номер телефона</label>
                        <input type="tel" class="form-control" aria-describedby="Введите номер телефона...."
                               placeholder="Введите номер телефона..." required>
                            <div class="invalid-feedback">
                                Введите номер телефона
                            </div>
                    </div>
                </form>
                <h3 style="margin-left: 10px;margin-top: 10px">Адрес</h3>
                <form class="need-validation" noValidate>
                    <div class="form-group">
                        <label >Город</label>
                        <input type="text" class="form-control" required>
                            <div class="invalid-feedback">
                                Введите Город
                            </div>
                        <!--        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                    </div>
                    <div class="form-group">
                        <label >Улица</label>
                        <input type="text" class="form-control" required>
                            <div class="invalid-feedback">
                                Введите улицу
                            </div>
                        <!--        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                    </div>
                    <div class="form-group">
                        <label>Дом</label>
                        <input type="text" class="form-control" required>
                            <div class="invalid-feedback">
                                Введите дом
                            </div>
                    </div>
                    <div class="form-group">
                        <label>Квартира</label>
                        <input type="text" class="form-control" required>
                            <div class="invalid-feedback">
                                Введите квартиру
                            </div>
                    </div>
                    <div class="form-group">
                        <label>Этаж</label>
                        <input type="text" class="form-control" required>
                            <div class="invalid-feedback">
                                Введите этаж
                            </div>
                    </div>
                </form>
                <h3 style="margin-left: 10px;margin-top: 10px">Дата</h3>
                <form>
                    <div class="form-group">
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>Понедельник</option>
                            <option>Вторник</option>
                            <option>Среда</option>
                            <option>Четверг</option>
                            <option>Пятница</option>
                            <option>Суббота</option>
                            <option>Воскресенье</option>
                        </select>
                    </div>
                </form>
                <h3 style="margin-left: 10px;margin-top: 10px">Оплата</h3>
                <form>
                    <div class="form-group">
                        <label>Купон</label>
                        <select class="form-control">
                            <option></option>
                            <option>30% на каждую пиццу</option>
                            <option>50% на вторую пиццу</option>
                            <option>30% на сайды</option>
                            <option>WOW weekend</option>
                        </select>
                    </div>
                </form>
                <form>
                    <div class="form-group">
                        <label>Тип оплаты</label>
                        <select class="form-control">
                            <option>Наличные</option>
                            <option>Картой курьеру</option>
                            <option>Онлайн</option>
                        </select>
                    </div>
                </form>

            </div>
            <div id="main" class="row" style="margin-left:100px;">
            </div>
           
        </div>`
          let price=  document.getElementById('basic').innerHTML
              .substring(document.getElementById('basic').innerHTML.indexOf(" ")+1,
                  document.getElementById('basic').innerHTML.length)
                div.innerHTML+=
       ' <div class="all_in_all">'+
            '<h4>'+ "Всего " +price+" грн"+'</h4>'+
            '<button class="btn btn-primary" type="submit">'+"Подтвердить"+'</button>'+
        '</div>'
            Router.add(div,'/order')
            window.location.hash='/order'
        }).catch(err => console.error(err))
})
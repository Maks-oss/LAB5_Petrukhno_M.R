/* eslint-env jest */
import Router from "../js/Routing";

describe('Routing between pages', function () {
    test('should route to catalog', function () {
        document.body.innerHTML=`<div id="temp"></div>`
        window.location.hash='/catalog'
        const route='/catalog'
        const view=`<div >Some view</div>`
        Router.add(view,route)
        Router.getState()
        expect(document.body.innerHTML).toEqual(`<div id="temp"><div>Some view</div></div>`)
    });
    // test('should route to mainPage', function () {
    //     document.body.innerHTML=`<div id="temp"></div>`
    //     window.location.hash='/'
    //     const route='/'
    //     const view=`<div >Main view</div>`
    //     Router.add(view,route)
    //     Router.getState()
    //     expect(document.body.innerHTML).toEqual(`<div id="temp"><div>Main view</div></div>`)
    // });
    // test('should route to productPage', function () {
    //     document.body.innerHTML=`<div id="temp"></div>`
    //     window.location.hash='/catalog/pizza_fsggfdst'
    //     const route='/catalog/pizza_fsggfdst'
    //     const view=`<div >Pizza view</div>`
    //     Router.add(view,route)
    //     Router.getState()
    //     expect(document.body.innerHTML).toEqual(`<div id="temp"><div>Pizza view</div></div>`)
    // });
    // test('should route to OrderPage', function () {
    //     document.body.innerHTML=`<div id="temp"></div>`
    //     window.location.hash='/order'
    //     const route='/order'
    //     const view=`<div >Order view</div>`
    //     Router.add(view,route)
    //     Router.getState()
    //     expect(document.body.innerHTML).toEqual(`<div id="temp"><div>Order view</div></div>`)
    // });
    // test('should route to ActionPage', function () {
    //     document.body.innerHTML=`<div id="temp"></div>`
    //     window.location.hash='/action/1'
    //     const route='/action/1'
    //     const view=`<div >Action view</div>`
    //     Router.add(view,route)
    //     Router.getState()
    //     expect(document.body.innerHTML).toEqual(`<div id="temp"><div>Action view</div></div>`)
    // });
});
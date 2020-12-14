import templateProcessor from "../js/templateProcessor.js";

describe('template-processor', function () {
    it('should render views', function () {
        document.body.innerHTML=`<div id="temp"></div>`
        const view=`<div>Some view</div>`

        templateProcessor.render(view)
        expect(document.body.innerHTML).toEqual(`<div id="temp"><div>Some view</div></div>`)
    });

});
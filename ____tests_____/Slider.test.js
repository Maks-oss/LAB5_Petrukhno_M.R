import showSlides from "../js/Slider.js";

describe('Slider', function () {
    it('should show slides', function () {
        let div=document.createElement('div')
        div.className='mySlides fade'
        document.body.innerHTML=`<div id="temp"></div>`
        document.body.appendChild(div)
        let dot=document.createElement('span')
        dot.className='dot'
        document.getElementById('temp').appendChild(dot)
        showSlides()
        expect(div.style.display).toEqual('block')
        expect(dot.className).toEqual('dot active')
    });
});
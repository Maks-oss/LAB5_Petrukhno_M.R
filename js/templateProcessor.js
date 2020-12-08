class TemplateProcessor {
    render(view){
        document.getElementById('temp').innerHTML=view.innerHTML
    }
}
let templateProcessor=new TemplateProcessor()
export default templateProcessor
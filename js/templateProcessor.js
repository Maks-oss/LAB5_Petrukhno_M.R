class TemplateProcessor {
    render(view){
        document.getElementById('temp').innerHTML=view.innerHTML
    }
}
const templateProcessor=new TemplateProcessor()
export default templateProcessor
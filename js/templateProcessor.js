class TemplateProcessor {
    render(view){
        document.getElementById('temp').innerHTML=view
    }
}
const templateProcessor=new TemplateProcessor()
export default templateProcessor
class Client {
    getData(name) {
        return fetch('https://my-json-server.typicode.com/Maks-oss/LAB4_PetrukhnoM.R/'+name).then(res => res.json())
        
    }
}
const client = new Client()
export default client

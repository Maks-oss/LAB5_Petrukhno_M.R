const fetchMock = require('fetch-mock');
import 'regenerator-runtime/runtime'
import client from "../js/Client.js";

describe('asyncFetch', () => {

    it('can fetch', async () => {

        fetchMock.get('https://my-json-server.typicode.com/Maks-oss/LAB4_PetrukhnoM.R/products', {hello: "world"});
        client.getData('products').then((res)=>{
            expect(res.hello).toEqual("world");
        });
    });
});
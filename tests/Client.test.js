import * as res from "../js/Client.js";
import "babel-polyfill"
require('jest-fetch-mock').enableMocks()
describe('Response from server', function () {
    test('should return response from server', function () {
        // expect.assertions(1);

        // let res=client.getData('https://my-json-server.typicode.com/Maks-oss/LAB4_PetrukhnoM.R/products')
        // return client.getData('https://my-json-server.typicode.com/Maks-oss/LAB4_PetrukhnoM.R/products').catch(e => expect(e).toMatch('error'));
        // return res.default.getData('products').then(data => {
        //     expect(data).toBe('peanut butter');
        // });
        return expect(res.default.getData('products')).rejects.toMatch('error');
        // return expect(res.default.getData('products')).resolves.toBe('peanut butter');
    });
});
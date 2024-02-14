const chakram = require('chakram'), expect = chakram.expect;

describe("User Module", function() {

    it("GET - GetUser", function () {
        const resBody = {
            "id": 2007,
            "firstName": "test",
            "lastName": "example",
            "email": "testexample911@gmail.com",
            "status": true
        }

        const response = chakram.get("http://localhost:5278/api/Users/2007");
        expect(response).to.have.status(200);
        expect(response).to.comprise.of.json(resBody);
        expect(response).to.have.header('content-type', 'application/json; charset=utf-8'); 
        return chakram.wait();
    });  

    it("DELETE - DeleteUser", function () {
        const resBody = {
            "id": 2007
        };

        const response = chakram.delete("http://localhost:5278/api/Users");
        expect(response).to.have.status(200);
        expect(response).to.comprise.of.json(resBody); 
        expect(response).to.have.header('content-type', 'application/json; charset=utf-8'); 
        return chakram.wait();
    });

    it("POST - CreateUser", function () {
        const resBody = {
            "id": 2013,
            "firstName": "test",
            "lastName": "example",
            "email": "testexample944@gmail.com",
            "status": true
        };

        const body = {
            "firstName": "test",
            "lastName": "example",
            "email": "testexample944@gmail.com",
            "password": "1111"
        };

        const response = chakram.post("http://localhost:5278/api/Users", body);
        expect(response).to.have.status(201);
        expect(response).to.comprise.of.json(resBody); 
        expect(response).to.have.header('content-type', 'application/json; charset=utf-8'); 
        return chakram.wait();
    });

    it("PUT - UpdateUser", function () {
        const resBody = {
            "id": 1013,
            "firstName": "test12",
            "lastName": "example",
            "email": "tobeto55@hotmail.com",
            "status": true
        };

        const body = {
            "id": 1013,
            "firstName": "test12",
            "lastName": "example",
            "email": "tobeto55@hotmail.com",
            "password": "6666"
        }

        const response = chakram.put("http://localhost:5278/api/Users", body);
        expect(response).to.have.status(200);
        expect(response).to.comprise.of.json(resBody); 
        expect(response).to.have.header('content-type', 'application/json; charset=utf-8'); 
        return chakram.wait();
    });
})
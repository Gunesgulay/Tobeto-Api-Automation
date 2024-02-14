const chakram = require('chakram'), expect = chakram.expect;

describe("Exam Module", function() {

    it("GET - GetExam", function () {
        const resBody = {
            "id": 8,
            "name": "softwaretest",
            "priority": 1,
            "visibility": true,
            "description": "firstlevel",
            "numberOfQuestions": 20,
            "startingTime": "2024-02-22T12:12:00.63",
            "endingTime": "2024-02-22T12:13:00.63",
            "isActive": true,
            "duration": 20
        }

        const response = chakram.get("http://localhost:5278/api/Exams/8");
        expect(response).to.have.status(200);
        expect(response).to.comprise.of.json(resBody);
        expect(response).to.have.header('content-type', 'application/json; charset=utf-8'); 
        return chakram.wait();
    });  

    it("DELETE - DeleteExam", function () {
        const resBody = {
            "id": 8
        };

        const response = chakram.delete("http://localhost:5278/api/Exams/8");
        expect(response).to.have.status(200);
        expect(response).to.comprise.of.json(resBody); 
        expect(response).to.have.header('content-type', 'application/json; charset=utf-8'); 
        return chakram.wait();
    });

    it("POST - CreateExam", function () {
        const resBody = {
            "id": 1010,
            "name": "softwaretest",
            "priority": 1,
            "visibility": true,
            "description": "firstlevel",
            "numberOfQuestions": 20,
            "startingTime": "2024-02-22T12:12:00.63Z",
            "endingTime": "2024-02-22T12:13:00.63Z",
            "isActive": true,
            "duration": 20
        };

        const body = {
            "name": "softwaretest",
            "priority": 1,
            "visibility": true,
            "description": "firstlevel",
            "numberOfQuestions": 20,
            "startingTime": "2024-02-22T12:12:00.630Z",
            "endingTime": "2024-02-22T12:13:00.630Z",
            "isActive": true,
            "duration": 20
        };

        const response = chakram.post("http://localhost:5278/api/Exams", body);
        expect(response).to.have.status(201);
        expect(response).to.comprise.of.json(resBody); 
        expect(response).to.have.header('content-type', 'application/json; charset=utf-8'); 
        return chakram.wait();
    });

    it("PUT - UpdateExam", function () {
        const resBody = {
            "id": 1010,
            "name": "softwaretest",
            "priority": 1,
            "visibility": true,
            "description": "secondlevel",
            "numberOfQuestions": 40,
            "startingTime": "2024-02-23T12:12:00.43Z",
            "endingTime": "2024-02-23T12:13:00.43Z",
            "isActive": true,
            "duration": 40
        };

        const body = {
            "id": 1010,
            "name": "softwaretest",
            "priority": 1,
            "visibility": true,
            "description": "secondlevel",
            "numberOfQuestions": 40,
            "startingTime": "2024-02-23T12:12:00.430Z",
            "endingTime": "2024-02-23T12:13:00.430Z",
            "isActive": true,
            "duration": 40
        }

        const response = chakram.put("http://localhost:5278/api/Exams", body);
        expect(response).to.have.status(200);
        expect(response).to.comprise.of.json(resBody); 
        expect(response).to.have.header('content-type', 'application/json; charset=utf-8'); 
        return chakram.wait();
    });
})
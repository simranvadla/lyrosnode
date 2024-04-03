import express from "express"


import cors from "cors"
app.use(cors())


var app = express();



app.use(express.static('public'));
app.use('/images', express.static('images'));
app.listen(8080, function () {console.log("Server started on port 8080")});
app.get("/", function (req, res) {
    const products = [
        {"id":1,"name":"Product 1","price":100,"image":"http://localhost:8080/images/1.png"},
        {"id":2,"name":"Product 2","price":110,"image":"http://localhost:8080/images/2.png"},
        {"id":3,"name":"Product 3","price":190,"image":"http://localhost:8080/images/3.png"},
        {"id":4,"name":"Product 4","price":150,"image":"http://localhost:8080/images/4.png"},
        {"id":5,"name":"Product 5","price":180,"image":"http://localhost:8080/images/5.png"},
        {"id":6,"name":"Product 6","price":170,"image":"http://localhost:8080/images/6.png"},
        {"id":7,"name":"Product 7","price":123,"image":"http://localhost:8080/images/7.png"},
        {"id":8,"name":"Product 8","price":145,"image":"http://localhost:8080/images/8.png"}
    ]
  res.json(products);
});
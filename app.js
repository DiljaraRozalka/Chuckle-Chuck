const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/animal", function(req, res) {

  res.sendFile(__dirname + "/animal.html")
      })
    })
});

app.post("/animal", function(req, res) {
  
  urlAnimal = "https://api.chucknorris.io/jokes/random?category=animal"

    https.get(urlAnimal, function(response) {
      console.log(response);

      response.on("data", function(data){
        const animalJokes = JSON.parse(data)
      const jokeAnimal = animalJokes.value
    res.write(jokeAnimal)
    res.send()
})

app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});

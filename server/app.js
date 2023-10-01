const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");

require("./models/User.js");
const UserModel = mongoose.model("users");

app.use(express.json());
app.use(cors());

// BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));

// DATABASE
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/eletroshop")
  .then(() => {
    console.log("Connected to Mongo.");
  })
  .catch((err) => {
    console.log("Error connected to Mongo.");
  });

app.post("/register", (req, res) => {
  const name = req.body.name;
  const lastName = req.body.lastname;
  const email = req.body.email;
  const phone = req.body.phone;
  const address = req.body.address;
  const password = req.body.password;
  const day = req.body.day;
  const month = req.body.month;
  const year = req.body.year;

  UserModel.findOne({email: email})
  .then((user) => {
    if (user) {
      res.send({error: true, message: "Este e-mail já está em uso."});
    } else {

      const birth = day + "/" + month + "/" + year;

      const newUser = new UserModel({
        name: name,
        lastname: lastName,
        email: email,
        phone: phone,
        address: address,
        password: password,
        birth: birth,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) {
            res.send({error: true, message: "Erro ao salvar o usuário."});
          }

          newUser.password = hash;

          newUser.save().then(() => {
            res.send({error: false, message: "Usuário cadastrado com sucesso."});
          }).catch((err) => {
            console.log(err);
          })

        })
      })

    }
  }).catch((err) => {
    res.send({error: true, message: "Houve um erro ao encontrar o usuário."})
  })
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server is running.");
});

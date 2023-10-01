// Library
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");

// Models
require("./models/User.js");
const User = mongoose.model("users");
require("./models/Verifications.js");
const Verification = mongoose.model("verifications");

// Configs
app.use(express.json());
app.use(cors());

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Database
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/eletroshop")
  .then(() => {
    console.log("Connected to Mongo.");
  })
  .catch((err) => {
    console.log("Error connected to Mongo.");
  });

// Routes
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

  const randomNumber1 = Math.floor(Math.random() * (9 - 1) + 1);
  const randomNumber2 = Math.floor(Math.random() * (9 - 1) + 1);
  const randomNumber3 = Math.floor(Math.random() * (9 - 1) + 1);
  const randomNumber4 = Math.floor(Math.random() * (9 - 1) + 1);
  const randomNumber5 = Math.floor(Math.random() * (9 - 1) + 1);
  const randomNumber6 = Math.floor(Math.random() * (9 - 1) + 1);

  const code =
    randomNumber1.toString() +
    randomNumber2.toString() +
    randomNumber3.toString() +
    randomNumber4.toString() +
    randomNumber5.toString() +
    randomNumber6.toString();

  Verification.findOne({ email: email })
    .then((user) => {
      if (user) {
        res.send({
          error: true,
          message: "Este e-mail já está para ser verificado.",
        });
      } else {
        const newVerification = new Verification({
          email: email,
          code: parseInt(code),
        });

        newVerification
          .save()
          .then(() => {
            res.send({
              error: false,
              message: "Cheque seu e-mail para verificar sua conta.",
            });
          })
          .catch((err) => {
            res.send({
              error: true,
              message: "Houve um erro ao salvar a verificação.",
            });
          });
      }
    })
    .catch((err) => {
      res.send({
        error: true,
        message: "Deu um erro ao verificar a verificação.",
      });
    });

  // User.findOne({email: email})
  // .then((user) => {
  //   if (user) {
  //     res.send({error: true, message: "Este e-mail já está em uso."});
  //   } else {

  //     const birth = day + "/" + month + "/" + year;

  //     const newUser = new User({
  //       name: name,
  //       lastname: lastName,
  //       email: email,
  //       phone: phone,
  //       address: address,
  //       password: password,
  //       birth: birth,
  //     });

  //     bcrypt.genSalt(10, (err, salt) => {
  //       bcrypt.hash(newUser.password, salt, (err, hash) => {
  //         if (err) {
  //           res.send({error: true, message: "Erro ao salvar o usuário."});
  //         }

  //         newUser.password = hash;

  //         newUser.save().then(() => {
  //           res.send({error: false, message: "Usuário cadastrado com sucesso."});
  //         }).catch((err) => {
  //           console.log(err);
  //         })

  //       })
  //     })

  //   }
  // }).catch((err) => {
  //   res.send({error: true, message: "Houve um erro ao encontrar o usuário."})
  // })
});

// Open server
const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server is running.");
});

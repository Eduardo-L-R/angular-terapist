const express = require('express');
const usersModel = require('../models/users');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const getUsers = (req, res) => {
  usersModel.find().sort({ username: 1 })
    .then(userDoc => {
      let arrayUser = []
      userDoc.map((user) => {
        arrayUser.push({
          "id": user._id,
          "username": user.username,
          "password": user.password,
          "token": user.token,
          "expirationTime": user.expirationTime,
          "userDateCreated": user.userDateCreated
        })
      });
      res.json(arrayUser);
    })
    .catch(error => {
      console.log(error);
    });
};

// // Login
// const getSpecificCake = (req, res) => {
//   let cakeId = req.params.id;
//   cakesModel.find({ _id: cakeId }, (err, arr) => {
//     if (arr.length !== 0) {
//       res.json(arr[0]);
//     } else {
//       res.send('The id entered not exist');
//     }
//   })
//     .catch(error => {
//       console.log(error);
//     });
// };

// Register
const postUser = (req, res) => {
  const newUser = new usersModel({ "username": req.body.username, "password": req.body.password });
  usersModel.find({ username: req.body.username }, (err, arr) => {
    // console.log(jwt.sign({ "username": req.body.username, "password": req.body.password }, 'fisioterapia', { algorithm: 'HS256'}));
    if (arr.length === 0) {
      // console.log(newUser);
      newUser.userDateCreated = Date.now();
      newUser.token = jwt.sign({ "username": newUser.username, "password": newUser.password }, 'fisioterapia', { algorithm: 'HS256'});
      newUser.save()
        .then(() => {
          console.log("Is aggregated the user correctly");
          // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
          res.json({
            message: "Is aggregated the user correctly",
            user: newUser
          });
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      res.send('Your username is registered, please enter a new username.')
    }
  })
    .catch(error => {
      console.log(error);
    });
  ;
}

// const patchCake = (req, res) => {
//   let cakeInfo = req.body
//   let cakeId = req.params.id;
//   cakesModel.findOneAndUpdate({ _id: cakeId }, { ...req.body }, (err, arr) => {
//     if (arr) {
//       res.json({
//         message: "Is actualiced the cake correctly",
//         newcake: cakeInfo,
//         beforeCake: arr
//       })
//     } else {
//       res.send('<p>id not found</p>')
//     }
//   })
//     .catch(error => console.log('error'));
// }

// const deleteCake = (req, res) => {
//   let cakeId = req.params.id;
//   cakesModel.findOneAndRemove({ _id: cakeId }, (err, obj) => {
//     if (obj) {
//       res.json({
//         message: "The cake was eliminated correctly",
//         cake: obj
//       });
//     } else {
//       res.send('The id of the cake was send not exist');
//     }
//   })
//     .catch(error => console.log(error));
// }

// async signin(signinDto){
//   const { username, password } = signinDto;
//   const user = await this._authRepository.findOne({
//     where: { username },
//   });
//   if (!user) {
//     throw new NotFoundException('user does not exist');
//   }
//   const isMatch = await compare(password, user.password);
//   if (!isMatch) {
//     throw new UnauthorizedException('invalid credentials');
//   }
//   const payload = {
//     id: user.id,
//     email: user.email,
//     username: user.username,
//   };
//   const token = await this._jwtService.sign(payload);
//   return { token };
// }

const signin = (req, res) => {
  const signInUser = new usersModel();
  console.log(req.body);
  if(req.body && !req.headers.authorization){
    signInUser.username = req.body.username;
    signInUser.password = req.body.password;
    usersModel.find({username: req.body.username}).sort({ username: 1 })
    .then(userDoc => {
      if(userDoc[0].password === req.body.password){
        let tokenPass = jwt.sign({ "username": req.body.username, "password": req.body.password }, 'fisioterapia', { algorithm: 'HS256'});
        res.json({token:tokenPass});
        console.log({access:"ok", type: "bodyUser"})
      }else{
        res.json({access:"denied"});
        console.log({access:"denied", type: "bodyUser"})
      }
    })
    .catch(error => {
      // console.log(error);
      res.json("error");
      console.log({access:"error", type: "bodyUser"})
    }
  
    );
  }else if(req.headers.authorization){
      if(req.headers.authorization.split(" ")[1] < 20){
        res.json({access:"denied", cause: "lenght too short"});
      }
      signInUser.token = req.headers.authorization.split(" ")[1]; 
      console.log(signInUser.token)
      let verify = jwt.verify(signInUser.token, 'fisioterapia');
      usersModel.find({username: verify.username}).sort({ username: 1 })
      .then(userDoc => {
        if(userDoc[0].password === verify.password){
          res.json({access:"ok"});
          console.log({access:"ok", type: "token"})
        }else{
          res.json({access:"denied"});
          console.log({access:"denied", type: "token"})
        }
      })
      .catch(error => {
        // console.log(error);
        // console.log()
        res.json("error");
        console.log({access:"error", type: "token"})
      }
      );
  }else {
    res.json({access:"denied for all"})
  }

}

module.exports = {
  getUsers,
  postUser,
  signin
  // patchCake, 
  // deleteCake, 
  // getSpecificCake 
};

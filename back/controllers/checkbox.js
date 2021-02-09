const express = require('express');
const checkboxModel = require('../models/checkbox');
const checkboxValuesModel = require('../models/checkbox-values');

const getCheckbox = (req, res) => {
  checkboxModel.find().sort({ name: 1 })
    .then(checkboxDoc => {
      let arrayCheckbox = []
      checkboxDoc.map((form) => { arrayCheckbox.push({ "id": form._id, "nombre": form.nombre }) });
      res.json(arrayCheckbox);
    })
    .catch(error => {
      console.log(error);
    });
};

const getSpecificCheckbox = (req, res) => {
  let CheckboxName = req.params.name;
  checkboxModel.find({ nombre: CheckboxName }, (err, arr) => {
    if (arr.length !== 0) {
      res.json(arr[0]);
    } else {
      res.send('The name entered not exist');
    }
  })
    .catch(error => {
      console.log(error);
    });
};

const postCheckbox = (req, res) => {
  const newCheckbox = new checkboxModel({ ...req.body });
  checkboxModel.find({ nombre: req.body.nombre }, (err, arr) => {
    // console.log(arr);
    if (arr.length === 0) {
      newCheckbox.save()
        .then(() => {
          console.log("Is aggregated the checkbox correctly")
          res.json({
            message: "Is aggregated the checkbox correctly",
            data: newCheckbox
          });
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      res.send('Your form name is registered, please enter a new form name.')
    }
  })
    .catch(error => {
      console.log(error);
    });
  ;
}

const patchCheckbox = (req, res) => {
  console.log("actualizando y ejecutando patchCheckbox")
  let CheckboxInfo = req.body
  let CheckboxId = req.params.name;
  checkboxModel.findOneAndUpdate({ nombre: CheckboxId }, { ...req.body }, (err, arr) => {
    if (arr) {
      res.json({
        message: "Is actualiced the cake correctly",
        newcake: CheckboxInfo,
        beforeCake: arr
      })
    } else {
      res.send('<p>id not found</p>')
    }
  })
    .catch(error => console.log('error'));
}

module.exports = { postCheckbox, getCheckbox, getSpecificCheckbox, patchCheckbox };

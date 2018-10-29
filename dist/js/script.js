"use strict";

var numbers = [];

document.getElementById("numbers").addEventListener("input", function () {
  // Getting number splitted by white space (no matter how big it is)
  numbers = this.value.split(/(\s+)/).filter(function (el) {
    return el.trim().length > 0;
  }).map(function (el) {
    return Number(el);
  }).sort();

  // Calling statistics functions
  console.log("=============");
  mediana();
  arytmetyczna();
  dominanta();
  console.log("=============");
});

function mediana() {
  var wynik = null;
  var dlugosc = numbers.length;
  if (numbers.length % 2 == 0) {
    var index = dlugosc / 2 - 1;
    wynik = (numbers[index] + numbers[index + 1]) / 2;
  } else {
    var index = (dlugosc + 1) / 2 - 1;
    wynik = numbers[index];
  }
  console.log("Mediana to: " + wynik);
}

function arytmetyczna() {
  var suma = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = numbers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var num = _step.value;

      suma += num;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var wynik = Math.round(suma / numbers.length + "e+2") / 100;
  console.log("Srednia arytmetyczna to: " + wynik);
}

function dominanta() {
  var nums = {};
  var max = null;
  var wynik = [];

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = numbers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var num = _step2.value;

      nums[num] = nums[num] + 1 || 1;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  for (var _num in nums) {
    if (max < nums[_num]) {
      max = _num;
    }
  }

  for (var _num2 in nums) {
    if (nums[max] == nums[_num2]) {
      wynik.push(_num2);
    }
  }

  console.log("Dominanta to: " + wynik);
}
//# sourceMappingURL=maps/script.js.map

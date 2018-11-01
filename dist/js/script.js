"use strict";

var numbers = [];

document.getElementById("numbers").addEventListener("input", function () {
  // Getting number splitted by white space (no matter how big it is)
  numbers = this.value.split(/(\s+)/).filter(function (el) {
    return el.trim().length > 0;
  }).map(function (el) {
    return Number(el);
  }).sort(function (a, b) {
    return a - b;
  });

  // Calling statistics functions
  document.getElementById("arytmetyczna").innerText = arytmetyczna();
  document.getElementById("mediana").innerText = mediana();
  document.getElementById("dominanta").innerText = dominanta();
  document.getElementById("wariancja").innerText = wariancja();
  document.getElementById("odchylenie").innerText = odchylenie();
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
  return wynik;
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

  var wynik = Math.round(suma / numbers.length + "e+3") / 1000;
  return wynik;
}

function dominanta() {
  var nums = {};
  var max = 0;
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
    if (typeof nums[max] == "undefined") {
      max = _num;
    } else if (nums[max] < nums[_num]) {
      max = _num;
    }
  }

  for (var _num2 in nums) {
    if (nums[max] == nums[_num2]) {
      wynik.push(_num2);
    }
  }

  if (isEveryTheSame(nums)) {
    return "Brak (Wszystkie wyrazy występują jednakowo często)";
  } else {
    return wynik;
  }
}

function wariancja() {
  var sum = 0;
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = numbers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var num = _step3.value;

      sum += num * num;
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  var wynik = sum / numbers.length - arytmetyczna() * arytmetyczna();
  wynik = Math.round(wynik * 1000) / 1000;
  return wynik;
}

function odchylenie() {
  return Math.round(Math.sqrt(wariancja()) * 1000) / 1000;
}

function isEveryTheSame(obj) {
  var arr = [];

  for (var i in obj) {
    arr.push(obj[i]);
  }

  for (var _i = 0; _i < arr.length - 1; _i++) {
    if (arr[_i] != arr[_i + 1]) return false;
  }

  return true;
}
//# sourceMappingURL=maps/script.js.map

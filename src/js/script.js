var numbers = [];

document.getElementById("numbers").addEventListener("input", function() {
  // Getting number splitted by white space (no matter how big it is)
  numbers = this.value
    .split(/(\s+)/)
    .filter(el => el.trim().length > 0)
    .map(el => Number(el))
    .sort((a, b) => a - b);

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
  for (let num of numbers) {
    suma += num;
  }
  var wynik = Math.round(suma / numbers.length + "e+3") / 1000;
  return wynik;
}

function dominanta() {
  var nums = {};
  var max = 0;
  var wynik = [];

  for (let num of numbers) {
    nums[num] = nums[num] + 1 || 1;
  }
  for (let num in nums) {
    if (typeof nums[max] == "undefined") {
      max = num;
    } else if (nums[max] < nums[num]) {
      max = num;
    }
  }

  for (let num in nums) {
    if (nums[max] == nums[num]) {
      wynik.push(num);
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
  for (let num of numbers) {
    sum += num * num;
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

  for (let i in obj) {
    arr.push(obj[i]);
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != arr[i + 1]) return false;
  }

  return true;
}

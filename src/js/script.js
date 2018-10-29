var numbers = [];

document.getElementById("numbers").addEventListener("input", function() {
  // Getting number splitted by white space (no matter how big it is)
  numbers = this.value
    .split(/(\s+)/)
    .filter(el => el.trim().length > 0)
    .map(el => Number(el))
    .sort((a, b) => a - b);

  // Calling statistics functions
  mediana();
  arytmetyczna();
  dominanta();
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
  document.getElementById("mediana").innerText = wynik;
}

function arytmetyczna() {
  var suma = 0;
  for (let num of numbers) {
    suma += num;
  }
  var wynik = Math.round(suma / numbers.length + "e+2") / 100;
  document.getElementById("arytmetyczna").innerText = wynik;
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
  console.log(nums);
  console.log(max);

  if (isEveryTheSame(nums)) {
    document.getElementById("dominanta").innerText =
      "Brak (Wszystkie wyrazy występują jednakowo często)";
  } else {
    document.getElementById("dominanta").innerText = wynik;
  }
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

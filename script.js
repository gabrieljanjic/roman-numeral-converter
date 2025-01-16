'use strict';

const input = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const main2 = document.querySelector('.main2');

convertBtn.addEventListener('click', function () {
  const number = input.value;
  if (!number) {
    output.textContent = 'Please enter a valid number.';
    main2.classList.add('red');
  } else if (number >= 4000) {
    output.textContent = 'Please enter a number less than or equal to 3999.';
    main2.classList.add('red');
  } else if (number < 1) {
    output.textContent = 'Please enter a number greater than or equal to 1.';
    main2.classList.add('red');
  } else {
    main2.classList.remove('red');

    const arrArabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const arrRoman = [
      'M',
      'CM',
      'D',
      'CD',
      'C',
      'XC',
      'L',
      'XL',
      'X',
      'IX',
      'V',
      'IV',
      'I',
    ];
    let roman = '';
    let num = number;
    let i = 0;
    while (num > 0) {
      const div = Math.floor(num / arrArabic[i]);
      num -= div * arrArabic[i];
      roman += arrRoman[i].repeat(div);
      i++;
    }
    output.textContent = `${roman}`;
  }
});

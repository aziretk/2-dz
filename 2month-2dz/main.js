let num = prompt('Введите число');

if (num < 1 || num > 10) {
  alert("Пожалуйста, введите число от 1 до 10.");
} else {
  for (let i = 0; i < num; i++) {
    document.write(`<div class='block'></div>`);
  }
}

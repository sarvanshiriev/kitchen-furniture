// Получаем все кнопки и элементы
const itemElements = document.querySelectorAll('.explanation__item-element');
const explanationItems = document.querySelectorAll('.explanation__item');

// Функция для скрытия всех элементов
function hideItems() {
    explanationItems.forEach((item, index) => {
        item.style.backgroundColor = ''; // Сбрасываем цвет фона
        const container = document.querySelectorAll('.explanation__item-container')[index];
        container.style.display = ''; // Сбрасываем стиль display
    });
}

// Добавляем обработчик события при клике на любое место документа
document.addEventListener('click', (event) => {
    const isClickedInside = document.querySelector('.explanation__list').contains(event.target);
    if (!isClickedInside) {
        hideItems(); // Если клик был вне элементов, скрываем их стили
    }
});

// Для каждой кнопки добавляем обработчик события при клике
itemElements.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.stopPropagation(); // Предотвращаем "всплытие" события клика для элементов explanation__item

        hideItems(); // Скрываем все элементы перед открытием нового
        // Добавляем стиль display: block для соответствующего элемента explanation__item-container
        const container = document.querySelectorAll('.explanation__item-container')[index];
        container.style.display = 'block';

        // Добавляем стиль background-color: #FFCC48 для соответствующего элемента explanation__item
        explanationItems[index].style.backgroundColor = '#FFCC48';
    });
});


const buttonOpen = document.querySelector('.explanation__button-open');
const form = document.querySelector('.homepage__form-wrapper');

let formVisible = false; // Переменная для отслеживания состояния видимости формы

buttonOpen.addEventListener('click', function() {
    if (!formVisible) {
        event.preventDefault();
        form.style.display = 'block';
        buttonOpen.style.transform = "rotate(180deg)";
        formVisible = true;
    } else {
        event.preventDefault();
        form.style.display = 'none'; // Меняем обратно на "display: none;"
        buttonOpen.style.transform = "rotate(0deg)"; // Возвращаем начальное положение кнопки
        formVisible = false;
    }
});

  
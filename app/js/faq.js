// Находим все элементы вопросов и ответов
const faqItems = document.querySelectorAll('.faq__item');

// Перебираем все элементы и добавляем обработчики событий
faqItems.forEach(item => {
    const question = item.querySelector('.faq__item-question');
    const answer = item.querySelector('.faq__item-answer');

    // Добавляем обработчик события на клик по вопросу
    question.addEventListener('click', () => {
        // Проверяем, открыт ли ответ на данный вопрос
        const isAnswerVisible = getComputedStyle(answer).display !== 'none';

        // Если ответ закрыт, открываем его, иначе закрываем
        if (!isAnswerVisible) {
            answer.style.display = 'block';
            item.classList.add('open'); // Добавляем класс 'open'
        } else {
            answer.style.display = 'none';
            item.classList.remove('open'); // Удаляем класс 'open'
        }
    });

    // Добавляем обработчик события на клик по ответу для его закрытия
    answer.addEventListener('click', () => {
        answer.style.display = 'none';
        item.classList.remove('open'); // Удаляем класс 'open' при закрытии ответа
    });
});


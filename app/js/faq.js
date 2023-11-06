const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq__item-question');
    const answer = item.querySelector('.faq__item-answer');

    question.addEventListener('click', () => {
        const isAnswerVisible = getComputedStyle(answer).display !== 'none';

        if (!isAnswerVisible) {
            answer.style.display = 'block';
            item.classList.add('open');
        } else {
            answer.style.display = 'none';
            item.classList.remove('open');
        }
    });

    answer.addEventListener('click', () => {
        answer.style.display = 'none';
        item.classList.remove('open');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (botao) => {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeAbas();
            aba.classList.add('shows__list--is-active');
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', (elemento) => {
            const classe = "faq__questions__item--is-open";
            elemento.target.parentNode.classList.toggle(classe);
        })
    }
})

function escondeAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    const buttons = document.querySelectorAll('[data-tab-button]');

    
    for (let i = 0; i < tabsContainer.length; i++) { 
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
    
    for (let i = 0; i < buttons.length; i++) { 
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}
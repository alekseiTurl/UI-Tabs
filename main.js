function tariffsTabs() {
    const tabsNavItems = document.querySelectorAll('.js-tabs-btn');//кнопки навигации
    const tabsContentItems = document.querySelectorAll('.tabs__content');// контент табов

    tabsNavItems.forEach(function (tabsItem) {
        tabsItem.addEventListener('click', function showTab(e) {
            const path = e.currentTarget.dataset.path;// data-path
            tabsNavItems.forEach((el) => {
                el.classList.remove('active-tab-btn');// удаляем активный класс у всех кнопок
            });
            tabsContentItems.forEach(function (tabsItem) {
                tabsItem.classList.remove('active-tab-content');// удаляем активный класс у всех табов
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('active-tab-content');// находим нужный таб, добавляем активный класс
            document.querySelector(`.js-tabs-btn[data-path="${path}"]`).classList.add('active-tab-btn');// находим нужную кнопку, добавляем активный класс
        });
    });
};
tariffsTabs();

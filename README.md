# UI-Tabs
*Посмотреть демо [на Codepen](https://codepen.io/AlexTur/pen/vYbZWea)*

Готовый скрипт для табов. На кнопки навигации с классом ( **js-tabs-btn** ) вешается *addEventListener('click')* . По клику в переменную *path* записывается значение из *data-path*.
<br/>
Далее у всех кнопок удалется активный класс ( **active-tab-btn** ) , так же удаляется активный класс ( **active-tab-content** ) у всех табов. Затем по занчению *data-атрибута* с ключом *path* находим нужный таб, добавляем активный класс (**active-tab-content**). Таким же образом добавляем активный класс ( **active-tab-btn** ) кнопке навигации

## HTML  - разметка:
<br>

```html
    <div class="tabs">  <!-- Основной контейнер -->
        <div class="tabs__navigation "> <!-- Контейнер для навигации -->
          <ul class="tabs__navigation-list">
            <li class="tabs__navigation-item">
                <button class="tabs__navigation-item-btn js-tabs-btn" data-path="first">111111111</button>  <!-- Кнопки навигации -->
            </li>
            <li class="tabs__navigation-item">
                <button class="tabs__navigation-item-btn js-tabs-btn" data-path="second">222222222</button> <!-- Кнопки навигации -->
            </li>
            <li class="tabs__navigation-item">
                <button class="tabs__navigation-item-btn js-tabs-btn" data-path="three">3333333333</button> <!-- Кнопки навигации -->
            </li>
            <li class="tabs__navigation-item">
                <button class="tabs__navigation-item-btn js-tabs-btn" data-path="forty">444444444</button> <!-- Кнопки навигации -->
            </li>
          </ul>
      </div>
      <div class="tabs__container"> <!-- Контейнер для табов -->
        <div class="tabs__content active-tab-content" data-target="first"></div> <!-- Контент табов -->
        <div class="tabs__content" data-target="second"></div> <!-- Контент табов -->
        <div class="tabs__content" data-target="three"></div> <!-- Контент табов -->
        <div class="tabs__content" data-target="forty"></div> <!-- Контент табов -->
      </div>
    </div>
```
## CSS классы для стилизации:
<br/>

| .tabs               | .tabs__navigation       | .tabs__navigation-item-btn | .tabs__container     | .tabs__content | .active-tab-content | .active-tab-btn           |
| :-----------------: | :---------------------: | :------------------------: | :------------------: | :------------: | :-----------------: | :-----------------------: |
| Основной контейнер  | Контейнер для навигации | Кнопки навигации           | Контейнер для табов  | Контент табов  | Активный таб        | Активная кнопка навигации |

<br/>

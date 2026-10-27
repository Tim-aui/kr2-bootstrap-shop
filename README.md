# GPU Shop - интернет-магазин видеокарт на Bootstrap

Контрольная работа №2 по дисциплине «Фронтенд и бэкенд разработка».
Тема: «CSS-фреймворки: разработка интерфейса на Bootstrap».

## Как подключён Bootstrap

Через CDN. В `<head>` подключается CSS, в конце `<body>` подключается JS:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

Свои стили в файле `css/style.css`, он подключается после Bootstrap.

## Страницы

- `index.html` - главная страница: главный блок, преимущества, популярные товары, вопросы, окно заявки
- `catalog.html` - каталог видеокарт
- `product.html` - страница товара с вкладками
- `order.html` - оформление заказа с формой

## Что использовано из Bootstrap

- сетка: `container`, `row`, `col-sm-6`, `col-md-4`, `col-lg-3`
- navbar (меню с кнопкой для телефона)
- карточки (card)
- кнопки
- badge
- breadcrumb
- accordion
- модальное окно (modal)
- вкладки (nav-tabs)
- таблицы
- list-group
- формы и проверка формы

## Автор

Баринин Тимофей Михайлович, ЭФБО-04-25

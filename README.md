# Introduction-to-DOM.-Part-2
JS базовый ПР-8

Задание 1

Цель задания

Самостоятельная практика работы с событиями и изменения существующего кода.

Что нужно сделать

Доработайте приложение TODO, добавив к нему следующее:

Сделайте так, чтобы у кнопки в форме устанавливался атрибут disabled, когда поле ввода пустое. Не забудьте, что disabled должен устанавливаться и при загрузке приложения, так как изначально поле тоже пустое.

Добавьте к функции createTodoApp третий опциональный аргумент с массивом дел, которые должны быть в списке сразу после загрузки приложения. Каждое дело должно быть объектом вида { name: 'Название дела', done: false/true }. Измените код функции таким образом, чтобы список дел сразу добавлялся в DOM.

Рекомендации к выполнению

Для преобразования объекта дела в DOM-элемент имеет смысл поправить функцию создания дела, чтобы она принимала и корректно обрабатывала объект { name, done }, а не просто название.

Проверка результата

При загрузке приложения кнопка отправки формы недоступна для нажатия (имеет атрибут disabled).

При вводе значения в поле кнопка становится доступной.

При очистке значения в поле кнопка снова становится недоступной.

При отправке (submit) формы после очистки поля кнопка становится недоступной.

Список дел, переданный третьим аргументом, сразу добавляется в DOM с соответствующими названиями и статусом завершённости (done).

Приложение корректно работает, если не передать список дел третьим аргументом в createApp.

Критерии оценки

Переменные и функции, разработанные в рамках задачи, имеют корректные названия. Структура данных для массива дел соответствует указанной в задании.



Задание 2

Цель задания

Научиться сохранять данные между перезагрузками страницы с помощью localStorage.

Что нужно сделать

С помощью localStorage сохраняйте и восстанавливайте список дел между перезагрузками страницы.

Проверка результата

Добавьте несколько дел и отметьте некоторые из них как сделанные. Перезагрузите страницу и убедитесь, что всё выглядит так же, как и до перезагрузки.

Удалите все дела. Перезагрузите страницу и убедитесь, что дел в списке не осталось.

Критерии оценки

Корректное использование JSON.parse/stringify, localStorage.getItem/setItem. Понятная структура кода с правильным именованием сущностей. Но если всё хотя бы работает как надо, то можно считать, что задание выполнено удовлетворительно.

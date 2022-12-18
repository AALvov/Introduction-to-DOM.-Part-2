(function () {

    let todoArray = [
        { name : 'Погулять',
        done : false },
        { name : 'Купить еды',
        done : true }
    ];

   
    //Создаем и возвращаем заголовок приложения
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }
    //Создаем и возвращаем форму для создания дела
    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело';

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return {
            form,
            input,
            button,
        };
    }
    //Создаем и возвращаем список элементов
    function createTodoList( arr, key) {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        list.id='list-group';
        for (let obj of arr) {
            let todoItem = createTodoItem(obj.name);
            todoItem.item.id = arr.indexOf(obj);
            if(obj.done) {
                todoItem.item.classList.toggle('list-group-item-success');
            }
            todoItem.doneButton.addEventListener('click', function () {
                todoItem.item.classList.toggle('list-group-item-success');
                obj.done=!obj.done;
                localStorage.setItem(key, JSON.stringify(arr));
            });
            todoItem.deleteButton.addEventListener('click', function () {
                if (confirm('Вы уверены?')) {
                    todoItem.item.remove();
                    todoArray.splice(todoArray.indexOf(obj),1);
                    localStorage.setItem(key, JSON.stringify(arr));
                }
            });
            // создаем и добавляем в список новое дело с названием из поля для ввода
            list.append(todoItem.item);
        }
        return list;
    }

    function createTodoItem(name) {
        let item = document.createElement('li');
        // кнопки помещаем в элемент, который красиво покажет их в одной группе
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        //устанавливаем стили для элемента списка, а также для размещения кнопок
        // в его правой части с помощью flex
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = name;

        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';

        //вкладываем кнопки в отдельный элемент, чтобы они объединились в один блок
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        //приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывать события нажатия
        return {
            item,
            doneButton,
            deleteButton,
        };

    }

    
    function createTodoApp(container, title = 'Список дел', key) {

        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        if(localStorage.getItem(key)) {
            todoArray= JSON.parse(localStorage.getItem(key));
        }
        let todoList = createTodoList(todoArray,key);

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        if (!todoItemForm.input.value) {
            todoItemForm.button.disabled=true;
        }
      todoItemForm.form.addEventListener('input', function() {
          todoItemForm.button.disabled=false;
      })
        //браузер создает событие submit на форме по нажатию на Enter или на кнопку создания дела
        todoItemForm.form.addEventListener('submit', function (e) {
            //эта строчка необходима, чтобы предотвратить стандартное действие браузера
            //в данном случае мы не хотим, чтобы страница перезагружалась при отправке формы
            e.preventDefault();
            //игнорируем создание элемента, если пользователь ничего не ввел в поле
            if (!todoItemForm.input.value) {
                return;
            }
            //создаем и добавляем в список новое дело с названием из поля для ввода
            let todoItemObject = {name: todoItemForm.input.value,
                done:false };
            todoArray.push(todoItemObject);
            console.log(todoArray);    
            //добавляем обработчики на кнопки
            // todoItem.doneButton.addEventListener('click', function () {
            //     todoItem.item.classList.toggle('list-group-item-success');
            // });
            // todoItem.deleteButton.addEventListener('click', function () {
            //     if (confirm('Вы уверены?')) {
            //         todoItem.item.remove();
            //     }
            // });

            // создаем и добавляем в список новое дело с названием из поля для ввода
          let oldList= document.getElementById('list-group')
            
          oldList.remove();
            let todoList=createTodoList(todoArray, key);
            container.append(todoList);
            //обнуляем значение в поле, чтобы не пришлось стирать его вручную
            todoItemForm.input.value = '';
            todoItemForm.button.disabled=true;
            localStorage.setItem(key, JSON.stringify(todoArray));
           
        });
    }



    window.createTodoApp = createTodoApp;
})();


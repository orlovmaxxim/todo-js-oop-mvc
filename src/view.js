// объект представления отвечает за внешний вид
// добавляет элементы в список, удаляет, получает данные из формы и т д
// все манипуляции с DOM в этом классе
// ничего не знает про Model
class View {
  constructor() {
    this.todoForm = document.getElementById('todo-form');
    this.input = document.getElementById('add-input');
    this.todoList = document.getElementById('todo-list');
  }

  // метод, принимающий объект задач
  addItem(todo) {
    
  }
}

export default View;
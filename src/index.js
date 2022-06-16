
import { Todo , TodoList } from './class';
import { crearTodoHtml } from './js/componentes';

// import { TodoList } from './class/todo-list.class';
// import { Todo } from './class/todo.class';
import './style.css';  


export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml(todo));






 console.log('todos' , todoList.todos);
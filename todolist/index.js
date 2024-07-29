// MVC - Model, View, Controller
// Model - manage data
// View - manage UI, what users will see
// Controller - handle events, interact with Model and View

// IIFE - immediately invoked function expression
//

console.log($);

const APIs = (() => {
  const baseURL = "http://localhost:3000/todos";
  const getTodos = () => {
    return fetch(baseURL).then((res) => res.json());
  };

  const createTodo = (newTodo) => {
    return fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    }).then((res) => res.json());
  };

  const deleteTodo = (id) => {
    return fetch(`${baseURL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  return {
    getTodos,
    createTodo,
    deleteTodo,
  };
})();

const Model = (() => {
  class State {
    #todos;
    #onChange;
    constructor() {
      this.#todos = [];
    }

    get todos() {
      return this.#todos;
    }

    set todos(newTodos) {
      this.#todos = newTodos;
      this.#onChange();
    }

    subscribe(cb) {
      this.#onChange = cb;
    }
  }

  return {
    State,
    ...APIs,
  };
})();

const View = (() => {
  const todolistEl = document.querySelector(".todo__list");
  const inputEl = document.querySelector(".todo__input");
  const addBtnEl = document.querySelector(".todo__add-btn");

  const getInputValue = () => {
    return inputEl.value;
  };

  const clearInput = () => {
    inputEl.value = "";
  };

  const renderTodos = (todos) => {
    let todosTemp = "";

    todos.forEach((todo) => {
      const todoItemTemp = `<li id=${todo.id}>
      <span>${todo.content}</span>
      <button class="todo__delete-btn">delete</button>
    </li>`;
      todosTemp += todoItemTemp;
    });

    todolistEl.innerHTML = todosTemp;
  };

  return {
    renderTodos,
    getInputValue,
    clearInput,
    addBtnEl,
    todolistEl,
  };
})();

const Controller = ((view, model) => {
  const state = new model.State();

  const setUpAddHandler = () => {
    view.addBtnEl.addEventListener("click", (event) => {
      event.preventDefault();
      const inputValue = view.getInputValue();
      console.log(inputValue);
      const newTodo = {
        content: inputValue,
      };
      model.createTodo(newTodo).then((data) => {
        state.todos = [...state.todos, data];
        view.clearInput();
      });
    });
  };

  // event delegation
  // event bubbling
  view.todolistEl.addEventListener("click", (event) => {
    const element = event.target;
    console.log(element.className);
    if (element.className === "todo__delete-btn") {
      const id = element.parentElement.getAttribute("id");
      // model.deleteTodo(id).then(() => {
      //   state.todos = state.todos.filter((todo) => todo.id !== id);
      // });
      model
        .deleteTodo(id)
        .then(() => {
          return model.getTodos();
        })
        .then((data) => {
          state.todos = data;
        });
    }
  });

  const init = () => {
    state.subscribe(() => {
      view.renderTodos(state.todos);
    });
    model.getTodos().then((data) => {
      state.todos = data;
      // view.renderTodos(state.todos);
    });
    setUpAddHandler();
  };
  return {
    init,
  };
})(View, Model);

Controller.init();

// Evaluation
// requirement: use MVC pattern to implement an app with html, css, js, 3 hours
// submit a repo link before 5:30pm EST
// make sure to commit before the deadline, you can make more improvements after the deadline, but we might or might not consider it
// use json-server, live-server
// I will provide some starter code

// fetch("http://localhost:3000/posts")
//   .then((res) => res.json())
//   .then((res) => {
//     console.log(res);
//   });

// fetch("http://localhost:3000/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     id: "3",
//     title: "new post",
//     views: 100,
//   }),
// })
//   .then((res) => res.json())
//   .then((res) => {
//     console.log(res);
//   });

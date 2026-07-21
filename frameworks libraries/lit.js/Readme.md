# LIT JS
| Nm | #Question   |
| :---:   | :---: |
| 1   | [1. What is lit.js? What are advantages? Does it have smth like virtual dom? Some basic elements (just watch )](#lit-library)                               |



1. ### lit-library
Lit is library used for building web components.
Wit lit you have more boilerplate. Lifecycle methods. Cleaner sytnax
comparison lit and virtual dom ( react )
<img width="791" height="657" alt="image" src="https://github.com/user-attachments/assets/cc7041b9-a0ef-4333-8650-5c40aaa2d071" />

Some basic elements,functionality of vit:
<img width="1009" height="348" alt="image" src="https://github.com/user-attachments/assets/2e0b0806-01c3-4b25-89d8-c53858026968" />



```javascript
// BASIC EXAMPLE

import {LitElement, html, css} from 'lit';
import {customElement, state, property, query} from 'lit/decorators.js';

type ToDoItem = {
  text: string,
  completed: boolean
};

@customElement('todo-list') // register component
export class ToDoList extends LitElement {
  static styles = css`
    .completed {
      text-decoration-line: line-through;
      color: #777;
    }
  `;

  @state() // state like in react 
  private _listItems = [
  { text: 'Make to-do list', completed: true },
    { text: 'Complete Lit tutorial', completed: false }
  ];
  @property() // reactive property, component isnt rerendered when we change it
  hideCompleted = false;

  render() {
    const items = this.hideCompleted
      ? this._listItems.filter((item) => !item.completed)
      : this._listItems;

    // creating html template
    const todos = html`
      <ul>
        ${items.map((item) =>
            html`
              <li
                  class=${item.completed ? 'completed' : ''}
                  @click=${() => this.toggleCompleted(item)}>
                ${item.text}
              </li>`
        )}
      </ul>
    `;
    const caughtUpMessage = html`
      <p>
      You're all caught up!
      </p>
    `;
    const todosOrMessage = items.length > 0
      ? todos
      : caughtUpMessage;

    // below directives @change to control onchange and other event handlers
    return html`
      <h2>To Do</h2>
      ${todosOrMessage}
      <input id="newitem" aria-label="New item">
      <button @click=${this.addToDo}>Add</button>
      <br>
      <label>
        <input type="checkbox"
          @change=${this.setHideCompleted}
          ?checked=${this.hideCompleted}>
        Hide completed
      </label>
    `;
  }

  toggleCompleted(item: ToDoItem) { // method to change data
    item.completed = !item.completed;
    this.requestUpdate();
  }

  setHideCompleted(e: Event) {
    this.hideCompleted = (e.target as HTMLInputElement).checked;
  }

  @query('#newitem') // its smth like query selector
  input!: HTMLInputElement;

  addToDo() {
    this._listItems = [...this._listItems,
        {text: this.input.value, completed: false}];
    this.input.value = '';
  }
}

```

import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>Lista de tarefas</h1>
        </header>

        <main>
          <app-todo></app-todo>
        </main>
      </div>
    );
  }
}

import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  template: `
    <h1 class="text-3xl font-bold">{{ title() }}</h1>
  `,
})
export class Title {
  title = input.required();
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  imports: [],
  template: `<p>numbers-page works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NumbersPage {}

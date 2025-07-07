import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, take } from 'rxjs';
import { decrement, increment, reset } from '../counter-state/item-counter.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-counter.component.html',
  styleUrl: './item-counter.component.scss'
})
export class ItemCounterComponent {
  counter$: Observable<number>;
  counterList: string[] = [];
  currentCounter: number = 0;

  constructor(private store: Store<{ counter: number }>) {
    this.counter$ = this.store.select('counter');
  }

  updateCounter(action: string) {
    if (action === 'increment') {
      this.store.dispatch(increment());
    } else if (action === 'decrement' && this.currentCounter > 0) {
      this.store.dispatch(decrement());
    } else if (action === 'reset') {
      this.store.dispatch(reset());
    }

    this.counter$.pipe(take(1)).subscribe(counter => {
      const messages: Record<typeof action, string> = {
        increment: `[+1] Counter is now: ${counter}`,
        decrement: `[-1] Counter is now: ${counter}`,
        reset: `[reset] Counter is now: ${counter}`
      };

      if (action !== 'decrement' || this.currentCounter > 0) {
        this.counterList.unshift(messages[action]);
      }

      this.currentCounter = counter;
    });
  }
}

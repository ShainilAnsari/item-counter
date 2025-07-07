import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ItemCounterComponent } from './item-counter/item-counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ItemCounterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Item-Counter';
}

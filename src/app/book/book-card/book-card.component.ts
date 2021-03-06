import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'models';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styles: [ '.mat-card { margin: 16px; }' ]
})
export class BookCardComponent {
  @Input() book: Book;
}

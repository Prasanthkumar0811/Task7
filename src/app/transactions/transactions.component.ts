import { Component, Input } from '@angular/core';
import { Transfer } from '../app.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
 @Input({required:true}) transactions:Transfer[]=[];
}

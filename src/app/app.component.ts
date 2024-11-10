import { Component } from '@angular/core';
import { Transfer } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  transactions:Transfer[]=[{
    userimage:'assets/assets 1.jpg',
    username:'Vijay',
    date:'27 Jan 2020',
    amount:+23000,
    type:'credit'
  },{
    userimage:'assets/assets 2.jpg',
    username:'Ajith',
    date:'7 Jun 2022',
    amount:-2000,
    type:'debit'
  },{
    userimage:'assets/assets 3.jpg',
    username:'Ashok',
    date:'2 Jan 2023',
    amount:-3000,
    type:'debit'
  },{
    userimage:'assets/assets 4.jpg',
    username:'Obito',
    date:'17 Feb 2024',
    amount:+10000,
    type:'credit'
  }
]
}

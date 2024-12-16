import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emp-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.css'
})
export class EmpListComponent {
  employees = [
    { imageUrl: '../image/spongebob.png', name: 'SpongeBob', position: 'Head Barista' },
    { imageUrl: '../image/patrick.png', name: 'Patrick Star', position: 'Assistant Barista' },
    { imageUrl: '../image/squidward.png', name: 'Squidward Tentacles', position: 'Cashier' },
    { imageUrl: '../image/krabs.png', name: 'Mr. Krabs', position: 'Manager' }
  ];
}

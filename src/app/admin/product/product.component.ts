import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products = [
    {
      image: './prod_images/americano.png',
      title: 'Iced Americano',
      description: 'A classic',
      price: 'P100'
    },
    {
      image: './prod_images/caramel.png',
      title: 'Caramel Macchiato',
      description: 'Diabetes in a cup.',
      price: 'P100'
    },
    {
      image: './prod_images/mocha.png',
      title: 'Mocha Latte',
      description: 'WOW',
      price: 'P100'
    },
    {
      image: './prod_images/seasalt.png',
      title: 'SeaSalt Latte',
      description: 'Type 2 Diabetes',
      price: 'P100'
    },
    {
      image: './prod_images/macchiato.png',
      title: 'Machiatto Latte',
      description: 'A drink',
      price: 'P100'
    },
    {
      image: './prod_images/matcha.png',
      title: 'Matcha Latte',
      description: 'Green Drink',
      price: 'P120'
    }
  ];

  specials = [
    {
      image: './prod_images/melon.png',
      title: 'Melon infused Espresso',
      description: 'Constipation.',
      price: 'P100'
    },
    {
      image: './prod_images/dew.png',
      title: 'Mountain Dew Latte',
      description: 'Acid Level 1000.',
      price: 'P100'
    },
    {
      image: './prod_images/pizza.png',
      title: 'Pizza Patty',
      description: 'A Kidney Problem.',
      price: 'P500'
    }
  ];
}

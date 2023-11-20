import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {
  
  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 1
    },
    {
      name: "Banana",
      quantity: 3
    },
    {
      name: "Sugar",
      quantity: 1
    }
  ];

  getItem() {
    return this.items
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  };

  addItem(item: { name: string; quantity: number; }) {
    this.items.push(item);
  };

  editItem(item: { name: string; quantity: number; }, index: any) {
    this.items[index]= item;
  };
}





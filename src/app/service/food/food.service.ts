import { Injectable } from '@angular/core';
import { count, retry } from 'rxjs';
import { Food } from 'src/app/shared/model/food';
import { Tag } from 'src/app/shared/model/Tag';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Soup',
        cookTime: '10-15',
        price: 1.20,
        origins: ['Italy'],
        stars: 2.5,
        favorite: false,
        imageUrl: '/assets/images/food-1.jpg',
        tags: ['FastFood', 'Soup']
      },
      {
        id: 2,
        name: 'Khachapuri',
        cookTime: '20-25',
        price: 5,
        origins: ['Georgia'],
        stars: 4.5,
        favorite: false,
        imageUrl: '/assets/images/food-2.jpg',
        tags: ['FastFood', 'Luch', 'Khachapuri']
      },
      {
        id: 3,
        name: 'Burger',
        cookTime: '10-15',
        price: 6,
        origins: ['US'],
        stars: 4.5,
        favorite: false,
        imageUrl: '/assets/images/food-3.jpg',
        tags: ['FastFood', 'Burger']
      },
      {
        id: 4,
        name: 'Salad',
        cookTime: '5-10',
        price: 6,
        origins: ['Unknow'],
        stars: 3,
        favorite: false,
        imageUrl: '/assets/images/food-4.jpg',
        tags: ['FastFood', 'Luch', 'Salad']
      },
      {
        id: 5,
        name: 'Pasta',
        cookTime: '10-15',
        price: 10,
        origins: ['Italy'],
        stars: 3.5,
        favorite: false,
        imageUrl: '/assets/images/food-5.jpg',
        tags: ['FastFood', 'Luch', 'Pasta']
      },
      {
        id: 6,
        name: 'Fry',
        cookTime: '10-15',
        price: 4,
        origins: ['Italy'],
        stars: 3,
        favorite: false,
        imageUrl: '/assets/images/food-6.jpg',
        tags: ['FastFood', 'Fry']
      }
    ]
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.getAll().filter(food =>
      food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllTags(): Tag[] {
    return [
    { name: 'All', count: 12 },
    { name: 'FastFood', count: 6 },
    { name: 'Burger', count: 1 },
    { name: 'Khachapuri', count: 1 },
    { name: 'Lunch', count: 3 },
    { name: 'Soup', count: 1 },
    { name: 'Fry', count: 1 },
    { name: 'Salad', count: 1 },
    ]
  }

}


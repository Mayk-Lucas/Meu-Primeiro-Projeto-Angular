import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private list: Array<string> = [
    "X Bacon",
    "Mistão",
    "Ovo"
  ];

  constructor() { }

  public foodList() {
    return this.list;
  }

  public foodListAdd(value: string) {
    return this.list.push(value);
  }
}
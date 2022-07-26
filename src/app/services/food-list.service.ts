import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//Interface
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  private url: string = "http://localhost:3000/"; //list-food
  constructor(private http: HttpClient) { }

  //Carregar as lista do json.
  public foodList(): Observable<Array<FoodList>> {
    return this.http.get<Array<FoodList>>(`${this.url}list-food`).pipe(
      res => res,
      error => error
    );
  }

  //Adicionando conteudo na lista.
  public foodListAdd(value: string): Observable<FoodList> {
    return this.http.post<FoodList>(`${this.url}list-food`, { nome: value }).pipe(
      res => res,
      error => error
    );
  }

  //Alerta antes de adicionar.
  public foodListAlert(value: FoodList) {
    return this.emitEvent.emit(value);
  }

  //Editar conteudo da lista.
  public foodListEdit(value: string, id: number): Observable<FoodList> {
    return this.http.put<FoodList>(`${this.url}list-food/${id}`, { nome: value }).pipe(
      res => res,
      error => error
    );
  }

  //Deletar conteudo da lista.
  public foodListDelete(id: number): Observable<FoodList> {
    return this.http.delete<FoodList>(`${this.url}list-food/${id}`).pipe(
      res => res,
      error => error
    );
  }

  // private list: Array<string> = [
  //   "X Bacon",
  //   "Mistão",
  //   "Ovo"
  // ];

  // public foodList() {
  //   return this.list;
  // }

  // public foodListAdd(value: string) {
  //   this.foodListAlert(value);
  //   return this.list.push(value);
  // }

  // public foodListAlert(value: string) {
  //   return this.emitEvent.emit(value);
  // }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{ nome: string, idade: number }> = [
    { nome: "Mayk Lucas", idade: 22 },
    { nome: "Maria Carine", idade: 23 },
    { nome: "Adamo Lucas", idade: 25 }
  ];

  public nome: string = 'mayk';
  constructor() { }

  ngOnInit(): void {

    setInterval( () => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000)
  }

  public onClick(){
    if (this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public onClickAddList() {
    this.list.push({nome: "Yan", idade: 0.4});
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1);
  }
}

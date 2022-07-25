import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter

  public list: Array<{ nome: string, idade: number }> = [
    { nome: "Mayk Lucas", idade: 22 },
    { nome: "Maria Carine", idade: 23 },
    { nome: "Yan Lucas", idade: 0.4 }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
  }
}

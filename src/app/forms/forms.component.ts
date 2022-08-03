import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  public listComidas: Array<{ comida: string, preco: string }> = [
    { comida: "X-salada", preco: "R$10,00" },
    { comida: "X-bacon", preco: "R$15.00" },
    { comida: "Coxinha", preco: "R$2.00" },
    { comida: "Pamonha", preco: "R$5.00" },
    { comida: "Tapioca", preco: "R$3.50" },
    { comida: "Pão carioca", preco: "R$0.80" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public submitForm(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }
  }
}

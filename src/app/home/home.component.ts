import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [ NgFor, MatIconModule, NgIf, CommonModule , MatCardModule, MatGridListModule ],
})
export class HomeComponent {



  constructor(private router: Router) { }

  verDetalhes(PiscinaId: string) {
    this.router.navigate(['/detalhes', PiscinaId]);
  }

  toogleFavorito(index: number): void {
    this.piscinas[index].favorito = !this.piscinas[index].favorito
  }


  nome: string = 'Joana';
  sobrenome: string = 'Senna';
  data: any = new Date();
  piscinas: Array<any> = [
    {
      id: 1,
      titulo: 'Piscina Carro Chefe',
      foto: '../../assets/imagens/piscinacarrochefe.jpg',
      formato: 'arredondada',
      metragem: '10 metros',
      preco: 7000,
      favorito: true
    },
    {
      id: 2,
      titulo: 'Piscina Redonda',
      foto: '../../assets/imagens/piscinaredonda4.jpg',
      formato: 'arredondada',
      metragem: '3 metros',
      preco: 2200,
      favorito: false
    },
    {
      id: 3,
      titulo: 'Piscina Bordas Arredondadas',
      foto: '../../assets/imagens/piscinabordarredondada2.jpg',
      formato: 'arredondada',
      metragem: '9 metros',
      preco: 5000,
      favorito: true
    },
    {
      id: 4,
      titulo: 'Piscina Quadrada',
      foto: '../../assets/imagens/piscinaquadrada.jpg',
      formato: 'quadrado',
      metragem: '15 metros',
      preco: 12000,
      favorito: false
    },
    {
      id: "5",
      titulo: 'Piscina Ondulada',
      foto: '../../assets/imagens/piscinaondulada.jpg',
      formato: 'ondulado',
      metragem: '20 metros',
      preco: 15000,
      favorito: true
    },
    {
      id: "6",
      titulo: 'Piscina com degraus',
      foto: '../../assets/imagens/piscinacomdegraus.jpg',
      formato: 'arredondada',
      metragem: '17 metros',
      preco: 12000,
      favorito: true
      
      }

  ];
}
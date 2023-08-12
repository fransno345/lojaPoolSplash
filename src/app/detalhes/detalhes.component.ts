import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

 
  LojalId: string ;
  piscina: any;
 


  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.LojalId = params.get('id') ?? '';
    });
    this.piscina= this.piscinas [this.piscinas.findIndex ((piscina)=> {
     return piscina.id === parseInt(this.LojalId)
    })]

  } 

  piscinas: Array<any> = [
    {
      id: 1,
      titulo: 'Piscina Dupla',
      foto: '../assets/imagens/piscinadupla.jpg',
      formato: 'arredondada',
      metragem: '4 metros',
      preco: 2300,
      favorito: false
    },
    {

      id: 2,
      titulo: 'Piscina Redonda',
      foto: '../assets/imagens/piscinaredonda.jpg',
      formato: 'arredondada',
      metragem: '3 metros',
      preco: 2200,
      favorito: false
      
    },

    {
      id: 3,
      titulo: 'Piscina Arredondada',
      foto: '../assets/imagens/piscinaarredondada.jpg',
      formato: 'arredondada',
      metragem: '9 metros',
      preco: 5000,
      favorito: true
    },
    {
      id: 4,
      titulo: 'Piscina Quadrada',
      foto: '../assets/imagens/piscinaquadrada.jpg',
      formato: 'quadrado',
      metragem: '15 metros',
      preco: 12000,
      favorito: false
    },
    {
      id: 5,
      titulo: 'Piscina Carro Chefe',
      foto: '../assets/imagens/piscinacarrochefe.jpg',
      formato: 'ondulado',
      metragem: '20 metros',
      preco: 15000,
      favorito: true
    },
    {
      id: 6,
      titulo: 'Piscina com degraus',
      foto: '../assets/imagens/piscinacomdegraus.jpg',
      formato: 'arredondada',
      metragem: '17 metros',
      preco: 12000,
      favorito: true
      
      }

  ];
}


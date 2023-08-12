import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  LojaPoolSplashId: string | undefined;

  titulo: string = 'Piscina Carro Chefe da casa';
  foto: string = 'https://i.ibb.co/JKzFtzj/piscinacarrochefe.jpg';

  description: string = 'Bem-vindo a lojaPoolSplash essa é nossa piscina carro chefe da casa, com designer moderno, feita com a melhor fibra do mercado, trazendo conforto e alegria para seus momentos de lazer';
  description2: string = 'Essa linda piscina ficaria muito bem, na sua casa de campo, casa de praia, pois uma casa sem piscina não tem graça não é mesmo?';
  warnings: string = 'Nota: A disponibilidade e o preço estão sujeitos a alterações. Entre em contato conosco para mais informações e venha conhecer a nossa loja e tomar um café conosco será um prazer recebê-lo!';
  LojalId: string | undefined;


  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.LojalId = params.get('id') ?? '';
    });
  }



}
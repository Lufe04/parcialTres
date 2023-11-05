import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})


export class ActividadesComponent {
  constructor(private router: Router) { }

  irArte() {
    this.router.navigate(['componente-arte']);
   }

  onSpanClickArte() {
    console.log('Span arte was clicked');
    }
  onSpanClickDeporte() {
    console.log('Span deporte was clicked');
    }
  onSpanClickMusica() {
    console.log('Span musica was clicked');
    }
}

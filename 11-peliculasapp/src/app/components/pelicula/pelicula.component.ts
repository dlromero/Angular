import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  verdetallepelicula(id) {
    this._router.navigate(['/detallepelicula', id]);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
<<<<<<< HEAD
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';
=======
>>>>>>> main

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

<<<<<<< HEAD
  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private temaService: TemaService
=======
  constructor(
    private router: Router
>>>>>>> main
  ) { }

  ngOnInit() {

    if (environment.token == '') {
      alert('Sua sessão expirou, faça o login novamente.')
      this.router.navigate(['/entrar'])
    }

<<<<<<< HEAD
    this.findAllTemas()

  }

  findAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp

    })
  }

  cadastrar() {
    this.temaService.postTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      alert('Tema Cadastrado com sucesso!')
      this.findAllTemas()
      this.tema = new Tema();
    } )
=======
>>>>>>> main
  }

}

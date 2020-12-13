import { PessoaModel } from './model/pessoa-model';
import { PessoaRepository } from './repository/pessoa-repository';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css'],
})

export class PessoaComponent implements OnInit {

  public formulario: FormGroup;

  constructor(
    private repositorio: PessoaRepository,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  public iniciarFormulario() {
    this.formulario = this.fb.group({
      id: [null],
      nome: ['', Validators.required],
      telefone: [''],
      skype: [''],
      dataNascimento: [''],
      cpf: ['', Validators.required
    ],
      email: ['', Validators.email],
      cep: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: [''],
    });   
  }

  salvar() {
    const dados = {

      id: this.formulario.value.id,
      nome: this.formulario.value.nome,
      telefone: this.formulario.value.telefone,
      skype: this.formulario.value.skype,
      dataNascimento: this.formulario.value.dataNascimento,
      cpf: this.formulario.value.cpf,
      email: this.formulario.value.email,
      cep: this.formulario.value.cep,
      cidade: this.formulario.value.cidade,
      estado: this.formulario.value.estado

    } as PessoaModel;

      this.repositorio.post(dados).subscribe(resposta => {
        console.log(resposta.id);
      });

      this.router.navigateByUrl('/tabela')
  }
}
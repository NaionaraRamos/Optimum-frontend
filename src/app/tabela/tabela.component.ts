import { Component, OnInit } from '@angular/core';
import { PessoaModel } from '../cliente/model/pessoa-model';
import { PessoaRepository } from '../cliente/repository/pessoa-repository';
import { ViewChild } from '@angular/core';
import { Table } from 'primeng/table/table';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})

export class TabelaComponent implements OnInit {

  clientes: PessoaModel[];
  @ViewChild('dt') table: Table;
  
  constructor(
    private repository: PessoaRepository,
    private title: Title) { }

  ngOnInit() {
    this.carregarPessoas(); 
  }

  carregarPessoas(){
    this.title.setTitle('Lista');
    this.clientes = [];
    this.repository.get().then(resposta => {
      this.clientes = resposta;     
    });
  }
}

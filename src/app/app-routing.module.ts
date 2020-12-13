import { PessoaComponent } from './cliente/pessoa.component';
import { TabelaComponent } from './tabela/tabela.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'cadastro', component: PessoaComponent },
  { path: 'tabela', component: TabelaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

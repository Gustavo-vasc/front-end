import { ListarProdutosComponent } from './components/Produtos/listar-produtos/listar-produtos.component';
import { NgModule } from '@angular/core';

import { CadastrarProdutoComponent } from './components/Produtos/cadastrar-produto/cadastrar-produto.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Produtos', component:ListarProdutosComponent},
  {path:'Produtos/cadastrar',component:CadastrarProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

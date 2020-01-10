import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Usuarios from '../pages/Usuarios';
import UsuarioAdd from '../pages/Usuarios_Add';
import UsuarioEdt from '../pages/Usuarios_Edt';
import Chamados from '../pages/Tickets';
import Chamado from '../pages/Ticket';
import Contatos from '../pages/Contatos';
import Contato from '../pages/Contato';
import ContatoAdd from '../pages/Contato_Add';
import TemplateFields from '../pages/TemplateFields';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/usuarios" exact component={Usuarios} isPrivate />
      <Route path="/usuarios/add" exact component={UsuarioAdd} isPrivate />
      <Route path="/usuarios/:id" component={UsuarioEdt} isPrivate />
      <Route path="/chamados" component={Chamados} isPrivate />
      <Route path="/chamado/:id" component={Chamado} isPrivate />
      <Route path="/contatos" exact component={Contatos} isPrivate />
      <Route path="/contatos/template" component={TemplateFields} isPrivate />
      <Route path="/contatos/add" component={ContatoAdd} isPrivate />
      <Route path="/contato/:id" component={Contato} isPrivate />
    </Switch>
  );
}

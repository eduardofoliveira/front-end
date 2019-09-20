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
    </Switch>
  );
}

import React from 'react';
import { Switch } from 'react-router-dom';

import MyROute from './MyRoute';
import Login from '../pages/Login';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyROute exact path="/" component={Alunos} isClosed={false} />
      <MyROute path="/aluno/:id/edit" component={Aluno} isClosed />
      <MyROute path="/aluno" component={Aluno} isClosed />
      <MyROute path="/fotos/:id" component={Fotos} isClosed />
      <MyROute path="/login" component={Login} isClosed={false} />
      <MyROute path="/register" component={Register} isClosed={false} />
      <MyROute path="*" component={Page404} />
    </Switch>
  );
}

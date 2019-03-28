import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
}
  from 'react-router-dom';

import Home from '../../pages/Home';
import NoteDetailsPage from '../../pages/NoteDetailsPage';
import  Header  from '../header/Header';
import EditNotePage from '../../pages/EditNotePage';


export default function App() {
  return (
    <Router>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/notes/:id" component={NoteDetailsPage} />
        <Route exact path="/notes/:id/edit" component={EditNotePage} />
      </Switch>
     
    </>
    </Router>
  );
}

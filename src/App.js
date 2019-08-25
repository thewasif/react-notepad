import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import AppHeader from './AppHeader';
import Footer from './Footer';
import Main from './Main';
import NewNote from './NewNote';
import NewNotea from './NewNotea';
import EditNoteComp from './EditNote';


function App() {
    return (
      <Router>
          <AppHeader />
          <Route path='/' exact component={Main}></Route>
          <Route path='/new' exact component={NewNote}></Route>
          <Route path='/old/:id' component={NewNotea}></Route>
          <Route path='/edit/:id' component={EditNoteComp}></Route>
        <div className="App"></div>
        <Footer />
      </Router>
    );
}

export default App;
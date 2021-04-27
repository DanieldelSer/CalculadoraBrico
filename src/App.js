import Mosquiteras from './components/Mosquiteras'
import Cortinas from './components/Cortinas'
import Persianas from './components/Persianas'
import Main from './components/Main';
import NavBar from './components/NavBar'

import Container from 'react-bootstrap/Container';

import { BrowserRouter, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/mosquiteras">
          <Container md={3}>
          <Mosquiteras />
          </Container>
        </Route>
        <Route exact path="/cortinas">
          <Container md={3}>
          <Cortinas />
          </Container>
        </Route>
        <Route exact path="/persianas">
          <Persianas />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;

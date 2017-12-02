import React, { Component } from 'react';
import './App.css';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Modal from 'react-bootstrap/lib/Modal';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';


class App extends Component {
  state = {
    recipes: [
      {recipeName: 'Kassim', ingredients: ['Sexy1', 'Champ', 'Smart']},
      {recipeName: 'Kassim2', ingredients: ['Sexy2', 'Champ', 'Smart']},
      {recipeName: 'Kassim3', ingredients: ['Sexy3', 'Champ', 'Smart']}
    ]
  }

  render() {
    const {recipes} = this.state;
    return (
      <div className="App container">
        <Accordion>
          {recipes.map((recipe, index) => (
            <Panel header={recipe.recipeName} eventKey={index} key={index}>
              <ol>
                {recipe.ingredients.map((item) => 
                <li key={item}>{item}</li>
                )}
              </ol>
              <ButtonToolbar>
                <Button bsStyle="danger">Delete Recipe</Button>
                <Button bsStyle="default">Edit Recipe</Button>
              </ButtonToolbar>
            </Panel>
          ))}
        </Accordion>
      </div>
    );
  }
}

export default App;

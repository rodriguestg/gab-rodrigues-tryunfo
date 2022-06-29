import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nameCart: '',
      imageCart: '',
      description: '',
      power: '',
      stamina: '',
      defense: '',
      raridade: '',
      trunfo: false,
    };
  }

  inputChange = ({ target }) => {
    const { name, type, checked, value } = target;
    // console.log(target);
    const valueResult = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: valueResult,
    });
  };

  buttonState = () => {
    const { nameCart, imageCart, description, power,
      stamina, defense, raridade } = this.state;
    if (!nameCart || !imageCart || !description || !power
      || !stamina || !defense || !raridade) {
      return true;
    }
    const attrs = [power, stamina, defense];
    const attrTotals = attrs.map((attr) => parseFloat(attr))
      .reduce((acc, attr) => acc + attr);
    const attrsMax = 210;
    if (attrTotals > attrsMax) {
      return true;
    }
    const maxAttr = 90;
    const attrValidation = (...att) => parseFloat(att[0]) > maxAttr
      || parseFloat(att[0]) < 0
      || parseFloat(att[1]) > maxAttr || parseFloat(att[1]) < 0
      || parseFloat(att[2]) > maxAttr || parseFloat(att[2]) < 0;
    if (defense || stamina || power) { return attrValidation(defense, stamina, power); }
  }

  render() {
    const { nameCart, imageCart, description, power,
      stamina, defense, raridade, trunfo } = this.state;
    return (
      <div>
        <h1>Oi Tryunfo</h1>
        <Form
          onInputChange={ this.inputChange }
          isSaveButtonDisabled={ this.buttonState() }
        />
        <Card
          cardName={ nameCart }
          cardImage={ imageCart }
          cardDescription={ description }
          cardAttr1={ power }
          cardAttr2={ stamina }
          cardAttr3={ defense }
          cardRare={ raridade }
          cardTrunfo={ trunfo }
        />
      </div>
    );
  }
}

export default App;

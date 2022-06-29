import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardsBox from './components/CardsBox';

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
      boxCart: [],
      checkTrunfo: false,
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

  saveCard = () => {
    const { nameCart, imageCart, description, power,
      stamina, defense, raridade, trunfo, boxCart } = this.state;
    this.setState({
      boxCart: [...boxCart, {
        nameCartNew: nameCart,
        imageCartNew: imageCart,
        descriptionNew: description,
        powerNew: power,
        staminaNew: stamina,
        defenseNew: defense,
        raridadeNew: raridade,
        trunfoNew: trunfo,
      }],
      nameCart: '',
      imageCart: '',
      description: '',
      power: '0',
      stamina: '0',
      defense: '0',
      raridade: '',
      trunfo: false,
    });
    if (trunfo === true) {
      this.setState({
        checkTrunfo: true,
      });
    }
  };

  render() {
    const { nameCart, imageCart, description, power, stamina,
      defense, raridade, trunfo, boxCart, checkTrunfo } = this.state;
    const { nameCartNew, imageCartNew, descriptionNew, powerNew,
      staminaNew, defenseNew, raridadeNew, trunfoNew } = boxCart;
    return (
      <div>
        <h1>Oi Tryunfo</h1>
        <Form
          onInputChange={ this.inputChange }
          isSaveButtonDisabled={ this.buttonState() }
          onSaveButtonClick={ this.saveCard }
          cardName={ nameCart }
          cardImage={ imageCart }
          cardDescription={ description }
          cardAttr1={ power }
          cardAttr2={ stamina }
          cardAttr3={ defense }
          cardRare={ raridade }
          cardTrunfo={ trunfo }
          hasTrunfo={ checkTrunfo }
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
        <CardsBox
          newCardName={ nameCartNew }
          newCardImage={ imageCartNew }
          newCardDescription={ descriptionNew }
          newCardAttr1={ powerNew }
          newCardAttr2={ staminaNew }
          newCardAttr3={ defenseNew }
          newCardRare={ raridadeNew }
          newCardTrunfo={ trunfoNew }
        />
      </div>
    );
  }
}

export default App;

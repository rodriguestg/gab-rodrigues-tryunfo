import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor() {
    super();
    // const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
    //   cardImage, cardRare, cardTrunfo } = this.props;
    this.state = {
    };
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled,
      onSaveButtonClick, onInputChange } = this.props;
    return (
      <form>
        <label htmlFor="nameCart">
          Nome da Carta
          <input
            value={ cardName }
            onChange={ onInputChange }
            id="nameCart"
            data-testid="name-input"
            type="text"
            name="nameCart"
          />
        </label>
        <label htmlFor="descriptionCart">
          Descrição da Carta
          <input
            value={ cardDescription }
            onChange={ onInputChange }
            id="descriptionCart"
            data-testid="description-input"
            type="textarea"
            name="description"
          />
        </label>
        <label htmlFor="power">
          Power
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            id="power"
            data-testid="attr1-input"
            type="number"
            name="power"
          />
        </label>
        <label htmlFor="stamina">
          Stamina
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            id="stamina"
            data-testid="attr2-input"
            type="number"
            name="stamina"
          />
        </label>
        <label htmlFor="defense">
          Defense
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            id="defense"
            data-testid="attr3-input"
            type="number"
            name="defense"
          />
        </label>
        <label htmlFor="imageCart">
          Imagem (url)
          <input
            value={ cardImage }
            onChange={ onInputChange }
            id="imageCart"
            data-testid="image-input"
            type="text"
            name="imageCart"
          />
        </label>
        <label htmlFor="raridade">
          Quão raro é sua carta?
          <select
            name="raridade"
            onChange={ onInputChange }
            id="raridade"
            data-testid="rare-input"
            value={ cardRare }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
          <input type="hidden" />
        </label>
        <label htmlFor="superTrunfo">
          É uma carta Super Trunfo?
          <input
            checked={ cardTrunfo }
            onChange={ onInputChange }
            id="superTrunfo"
            data-testid="trunfo-input"
            type="checkbox"
            name="trunfo"
          />
        </label>
        <button
          type="button"
          id="btn-salvar"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Form;

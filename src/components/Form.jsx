import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="nameCart">
          Nome da Carta
          <input
            id="nameCart"
            data-testid="name-input"
            type="text"
            name="name-cart"
          />
        </label>
        <label htmlFor="descriptionCart">
          Descrição da Carta
          <input
            id="descriptionCart"
            data-testid="description-input"
            type="textarea"
            name="description-Cart"
          />
        </label>
        <label htmlFor="power">
          Power
          <input
            id="power"
            data-testid="attr1-input"
            type="number"
            name="power-cart"
          />
        </label>
        <label htmlFor="stamina">
          Stamina
          <input
            id="stamina"
            data-testid="attr2-input"
            type="number"
            name="stamina-cart"
          />
        </label>
        <label htmlFor="defense">
          Defense
          <input
            id="defense"
            data-testid="attr3-input"
            type="number"
            name="defense-cart"
          />
        </label>
        <label htmlFor="imageCart">
          Imagem (url)
          <input
            id="imageCart"
            data-testid="image-input"
            type="text"
            name="image-cart"
          />
        </label>
        <label htmlFor="raridade">
          Quão raro é sua carta?
          <select name="raridade-cart" id="raridade" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito-raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="superTrunfo">
          É uma carta Super Trunfo?
          <input
            id="superTrunfo"
            data-testid="trunfo-input"
            type="checkbox"
            name="super-trunfo"
          />
        </label>
        <button type="submit" id="btn-salvar" data-testid="save-button">
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;

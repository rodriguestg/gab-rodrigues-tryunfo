import React from 'react';
import PropTypes from 'prop-types';

class CardsBox extends React.Component {
  render() {
    const { cardsData } = this.props;
    // const trunfoRenderFixo = (bool) => {
    //   const trunfo = <p>Super Trunfo</p>;
    //   const noTrunfo = <p />;
    //   return bool ? trunfo : noTrunfo;
    // };
    const renderCards = () => cardsData.map((card, index) => (
      <section key={ index } className="cardBoxList">
        <h2>{ card.nameCart }</h2>
        <img src={ card.imageCart } alt={ card.nameCart } />
        <p>{ card.description }</p>
        <h3>{ card.power }</h3>
        <h3>{ card.stamina }</h3>
        <h3>{ card.defense }</h3>
        <h3>{ card.raridade }</h3>
        { card.trunfo ? <p className="super">Super Trunfo</p> : <p /> }
      </section>
    ));
    return renderCards();
  }
}

CardsBox.propTypes = {
  // newCardName: PropTypes.string.isRequired,
  // newCardDescription: PropTypes.string.isRequired,
  // newCardAttr1: PropTypes.string.isRequired,
  // newCardAttr2: PropTypes.string.isRequired,
  // newCardAttr3: PropTypes.string.isRequired,
  // newCardImage: PropTypes.string.isRequired,
  // newCardRare: PropTypes.string.isRequired,
  // newCardTrunfo: PropTypes.bool.isRequired,
  cardsData: PropTypes.string.isRequired,
};

export default CardsBox;

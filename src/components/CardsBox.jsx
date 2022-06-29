import React from 'react';
import PropTypes from 'prop-types';

class CardsBox extends React.Component {
  render() {
    const { newCardName, newCardDescription, newCardAttr1, newCardAttr2,
      newCardAttr3, newCardImage, newCardRare, newCardTrunfo } = this.props;
    const trunfoRender = () => {
      const trunfo = <p data-testid="trunfo-card">Super Trunfo</p>;
      const noTrunfo = <p />;
      return newCardTrunfo ? trunfo : noTrunfo;
    };
    return (
      <section className="cardBox">
        <h2 data-testid="name-card">{ newCardName }</h2>
        <img data-testid="image-card" src={ newCardImage } alt={ newCardName } />
        <p data-testid="description-card">{ newCardDescription }</p>
        <h3 data-testid="attr1-card">{ newCardAttr1 }</h3>
        <h3 data-testid="attr2-card">{ newCardAttr2 }</h3>
        <h3 data-testid="attr3-card">{ newCardAttr3 }</h3>
        <h3 data-testid="rare-card">{ newCardRare }</h3>
        {trunfoRender()}
      </section>
    );
  }
}

CardsBox.propTypes = {
  newCardName: PropTypes.string.isRequired,
  newCardDescription: PropTypes.string.isRequired,
  newCardAttr1: PropTypes.string.isRequired,
  newCardAttr2: PropTypes.string.isRequired,
  newCardAttr3: PropTypes.string.isRequired,
  newCardImage: PropTypes.string.isRequired,
  newCardRare: PropTypes.string.isRequired,
  newCardTrunfo: PropTypes.bool.isRequired,
};

export default CardsBox;

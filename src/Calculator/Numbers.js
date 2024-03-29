import React from 'react';
import PropTypes from 'prop-types';
import Number from './Number';
import './calculator.css';

const renderNumber = (i, onClick) => <Number className="number" value={i} onClick={onClick} />;

// this is a functional react component
// functional component is typicall used when you don't need an internal state
const Numbers = (props) => {
  console.log('Numbers::props', props);
  const { onClick } = props;
  return (
    <div>
      <div className="board-row">
        {renderNumber(7, onClick)}
        {renderNumber(8, onClick)}
        {renderNumber(9, onClick)}
      </div>
      <div className="board-row">
        {renderNumber(4, onClick)}
        {renderNumber(5, onClick)}
        {renderNumber(6, onClick)}
      </div>
      <div className="board-row">
        {renderNumber(1, onClick)}
        {renderNumber(2, onClick)}
        {renderNumber(3, onClick)}
      </div>
      <div className="board-row">{renderNumber(0, onClick)}</div>
    </div>
  )};

Numbers.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Numbers;

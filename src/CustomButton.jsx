import React from 'react';
import PropTypes from 'prop-types';

function CustomButton({ text, onClick }) {
  return (
    <button onClick={onClick}>{text}</button>
  );
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func // 클릭 이벤트 핸들러 함수
}

export default CustomButton;
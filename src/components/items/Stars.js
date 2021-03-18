import React from 'react';
import PropTypes from 'prop-types';
import full from '../../icons/full.svg';
import half from '../../icons/half.svg';
import empty from '../../icons/empty.svg';

const Stars = (props) => {
  const { rating } = props;

  const stars = [];
  // a loop to push stars to the above array based on rating
  for (let i = stars.length; i < 5; i++) {
    if (i < rating && i - rating + 1 !== 0.5) {
      stars.push(<img src={full} alt='full_star' key={i} />);
    } else if (i - rating + 1 === 0.5) {
      stars.push(<img src={half} alt='half_star' key={i} />);
    } else {
      stars.push(<img src={empty} alt='empty_star' key={i} />);
    }
  }

  return <div>{stars}</div>;
};

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Stars;

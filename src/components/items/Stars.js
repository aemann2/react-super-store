import React from 'react';

const Stars = (props) => {
  const { rating } = props;

  const stars = [];

  for (let i = stars.length; i < 5; i++) {
    if (i < rating && i - rating + 1 !== 0.5) {
      stars.push(
        <img
          src='https://guidedprojects.dev/assets/files/star_full-f757f2a6eb46312ac3b0a9f4923add12.svg'
          alt='full_star'
          key={i}
        />
      );
    } else if (i - rating + 1 === 0.5) {
      stars.push(
        <img
          src='https://guidedprojects.dev/assets/files/star-half-c86abc67a14feafe9a821fd5e06e5833.svg'
          alt='half_star'
          key={i}
        />
      );
    } else {
      stars.push(
        <img
          src='https://guidedprojects.dev/assets/files/star-empty-849812a23c4515e156571518674ae723.svg'
          alt='empty_star'
          key={i}
        />
      );
    }
  }

  return <div>{stars}</div>;
};

export default Stars;

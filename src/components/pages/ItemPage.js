import React from 'react';

const Item = (props) => {
  const { itemId } = props.match.params;
  console.log(itemId);
  return <div>{}</div>;
};

export default Item;

import React from 'react';
import { useParams } from 'react-router-dom';
import Item from '../items/Item';

const ItemPage = () => {
  // the useParams hook gets the id passed over in Link
  const { id } = useParams();
  const url = `https://gp-super-store-api.herokuapp.com/item/${id}`;
  return <Item url={url} />;
};

export default ItemPage;

import React from 'react';
import { useParams } from 'react-router-dom';

const ItemPage = () => {
  // the useParams hook gets the id passed over in Link
  const params = useParams();
  return <div>{params.id}</div>;
};

export default ItemPage;

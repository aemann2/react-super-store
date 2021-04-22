import React, { useContext, useState, createContext } from 'react';

export const TestContext = createContext();

export function TestProvider(props) {
  const [item, setItem] = useState('this is a test');
  const { children } = props;
  return (
    <TestContext.Provider value={{ item }}>{children}</TestContext.Provider>
  );
}

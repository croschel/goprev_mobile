import React from 'react';
import { StatusBar } from 'react-native';
import createRoutes from '~/routes';

export default function App() {
  const signed = true;
  const Routes = createRoutes(signed);
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7B2BE8" />
      <Routes />
    </>
  );
}

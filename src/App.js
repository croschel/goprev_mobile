import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import createRoutes from '~/routes';

export default function App() {
  const signed = useSelector((state) => state.auth.signed);
  const firstLogin = useSelector((state) => state.client.firstLogin);

  const Routes = createRoutes(signed, firstLogin);
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7B2BE8" />
      <Routes />
    </>
  );
}

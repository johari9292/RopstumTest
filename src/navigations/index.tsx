import React from 'react';
import {useAppSelector} from '../redux/store/hookType';
import AppNav from './AppNav';
import AuthNav from './AuthNav';
function AppNavigator() {
  const authState = useAppSelector(state => state?.authSlice?.status);

  return <>{authState ? <AppNav /> : <AuthNav />}</>;
}

export default AppNavigator;

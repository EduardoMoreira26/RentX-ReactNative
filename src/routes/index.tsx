import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { useAuth } from '../hooks/auth';

// import { AppTabRoutes } from './app.tab.routes';
// import { AuthRoutes } from './auth.routes';
import { AppStackRoutes } from './stack.routes';

export function Routes(){
  // const { user } = useAuth();

  return (
    <NavigationContainer>
       <AppStackRoutes />
    </NavigationContainer>
  );
}
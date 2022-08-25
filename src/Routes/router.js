import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Pages/Home';

import News from '../Components/News';
import Fitness from '../Components/Fitness';
import Beach from '../Components/Beach';

import DetailsNew from '../Pages/DetailsNew';
import DetailFitness from '../Pages/DetailFitness';
import DetailBeach from '../Pages/DetailBeach';

const Stack = createStackNavigator();

function Routes(){
    return(

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name='News'
                    component={News}
                    options={{
                        headerTitle:'Lançamentos',
                        headerTintColor: '#909090'
                    }}
                />

                <Stack.Screen
                    name='Fitness'
                    component={Fitness}
                    options={{
                        headerTitle:'Moda Fitness',
                        headerTintColor: '#909090'
                    }}
                />

                <Stack.Screen
                    name='Beach'
                    component={Beach}
                    options={{
                        headerTitle:'Moda Praia',
                        headerTintColor: '#909090'
                    }}
                />
                
                <Stack.Screen
                    name='DetailsNew'
                    component={DetailsNew}
                    options={{
                        headerTitle:''
                    }}
                />
                
                <Stack.Screen
                    name='DetailFitness'
                    component={DetailFitness}
                    options={{
                        headerTitle:''
                    }}
                />
                
                <Stack.Screen
                    name='DetailBeach'
                    component={DetailBeach}
                    options={{
                        headerTitle:''
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
}
export default Routes;
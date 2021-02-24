import {createStackNavigator} from '@react-navigation/stack'
import { Home, AddTask } from '../pages';
import React from 'react'

const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator>
        <Stack.Screen name = "ToDo" component = {Home} />
        <Stack.Screen name = "AddTask" component = {AddTask} />
    </Stack.Navigator>
)
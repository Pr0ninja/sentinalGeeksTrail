import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Grid from '../Screen/Grid'
import List1 from '../Screen/List1'
import List3 from '../Screen/List3'

const TabNav = createMaterialTopTabNavigator();

export default function Home() {
    return (
        <>
            <TabNav.Navigator tabBarOptions={{
                labelStyle: { fontSize: 12 },
                style: { backgroundColor: 'rgb(28,41,85)' },
                activeTintColor:'white',
                inactiveTintColor:"skyblue"
            }}>
                <TabNav.Screen name="Grid" component={Grid} />
                <TabNav.Screen name="List1" component={List1} />
                <TabNav.Screen name="List2" component={List3} />
            </TabNav.Navigator>
        </>
    )
}

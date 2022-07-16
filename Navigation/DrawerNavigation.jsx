import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import BottomTabNavigation from './BottomTabNavigation'
import Cart from '../Screen/Cart/Cart'
import Profile from '../Screen/Profile'

import COLORS from '../Colors'

import CustomDrawer from '../Component/Home/Drawer/CustomDrawer'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: COLORS.purple,
            drawerActiveTintColor: COLORS.yellow,
            drawerLabelStyle: {
                fontSize: 17
            }
        }}>
            <Drawer.Screen name='Home' component={BottomTabNavigation} />
            <Drawer.Screen name='Cart' component={Cart} />
            <Drawer.Screen name='Profile' component={Profile} />
        </Drawer.Navigator >
    )
}

export default DrawerNavigation
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import COLORS from '../../../Colors'
import { Divider } from 'react-native-elements'

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: COLORS.purple }}>
                <View style={{ padding: 20 }}>
                    <Text style={styles.nameText}> user name</Text>
                    <Text style={styles.nameText2}> user Email</Text>
                </View>
                <View style={styles.containerdrawerItemList}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <Divider />
            <View style={{ padding: 20 }}>
                <TouchableOpacity onPress={() => { }}>
                    <Text style={{fontSize: 15}}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nameText: {
        color: COLORS.yellow,
        fontSize: 19
    },
    nameText2: {
        color: COLORS.yellow,
    },
    containerdrawerItemList: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10
    }
})

export default CustomDrawer
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import IC_Drawer_IOS from "./../assets/icons/ic_drawer_header.svg";
import React from 'react'

const HeaderDrawer = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}
            style={{
                paddingVertical: 10, paddingRight: 20,

            }}
        >
            <IC_Drawer_IOS />
        </TouchableOpacity>
    )
}

export default HeaderDrawer

const styles = StyleSheet.create({})
import React from 'react'
import { AppContext } from '../../../App'

import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native'

import WallMethods from '../../../Scripts/utilClasses/WallMethods'

export default function WidthInput({index, style}){

    const {walls, setWalls} = React.useContext(AppContext)

    return (
        <View style={style.container}>
            <Text style={style.label}>
                Largura (m)
            </Text>
            <TextInput
                style={style.input} 
                keyboardType='numeric'
                value={`${WallMethods.getWallWidth(walls, index)}`}
                onChangeText={(text)=> WallMethods.setWallWidth(setWalls, index, text)}
            />
        </View>
    )
}
import React from 'react'
import { AppContext } from '../../App'

import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native'

import WallMethods from '../../Scripts/utilClasses/WallMethods'

export default function InkLayersInput({style}){

    const {walls, setWalls} = React.useContext(AppContext)

    return (
        <View style={style.container}>
            <Text style={style.label}>
                Demãos
            </Text>
            <TextInput
                style={style.input}
                keyboardType='numeric'
                value={`${WallMethods.getWallsInkLayers(walls)}`}
                onChangeText={(text)=> WallMethods.setWallsInkLayers(setWalls, text)}
            />
        </View>
    )
}
import React from 'react'
import { AppContext } from '../../App'

import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native'

import WallMethods from '../../Scripts/utilClasses/WallMethods'

export default function CansSizesInput({style}){

    const {walls, setWalls} = React.useContext(AppContext)

    return (
        <View style={style.container}>
            <Text style={style.label}>
                Volumes de Latas (L)
            </Text>
            <TextInput
                style={style.input}
                keyboardType='default'
                value={`${WallMethods.getCansString(walls)}`}
                onChangeText={(text)=> WallMethods.setCansString(setWalls, text)}
            />
        </View>
    )
}
import React from 'react'
import { AppContext } from '../../App'

import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native'

import WallMethods from '../../Scripts/utilClasses/WallMethods'

export default function InkEfficiencyInput({style}){

    const {walls, setWalls} = React.useContext(AppContext)

    return (
        <View style={style.container}>
            <Text style={style.label}>
                Gasto de tinta (L/m2)
            </Text>
            <TextInput
                style={style.input}
                keyboardType='numeric'
                value={`${WallMethods.getWallInkEfficiency(walls)}`}
                onChangeText={(text)=> WallMethods.setWallsInkEfficiency(setWalls, text)}
            />
        </View>
    )
}
import React from 'react'
import { AppContext } from '../../../App'

import {
    View,
    Text,
    TextInput
} from 'react-native'

import WallMethods from '../../../Scripts/utilClasses/WallMethods'

export default function ObjectsAmountInput({index, style}){

    const {walls, setWalls} = React.useContext(AppContext)

    return (
        <View style={style.container}>
            <Text style={style.label}>
                Quantidade de Objetos 
            </Text>
            <TextInput
                style={style.input}
                keyboardType='numeric'
                value={`${WallMethods.getWallObjectsAmount(walls, index)}`}
                onChangeText={(text)=> WallMethods.setWallObjectsAmount(setWalls, index, text)}
            />
        </View>
    )
}
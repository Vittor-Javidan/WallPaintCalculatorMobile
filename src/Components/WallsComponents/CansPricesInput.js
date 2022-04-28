import React from 'react'
import { AppContext } from '../../App'

import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native'

import WallMethods from '../../Scripts/utilClasses/WallMethods'

export default function CansPricesInput({style}){

    const {walls, setWalls} = React.useContext(AppContext)

    return (
        <View style={style.container}>
            <Text style={style.label}>
                Preços Respectivos / Lata
            </Text>
            <TextInput
                style={style.input}
                keyboardType='default'
                value={`${WallMethods.getCansPriceString(walls)}`}
                onChangeText={(text)=> WallMethods.setCansPricesString(setWalls, text)}
            />
        </View>
    )
}

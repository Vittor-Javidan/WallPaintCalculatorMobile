import React from 'react'
import { AppContext } from '../../../../App'

import {
    View,
    Text,
    TextInput,
} from 'react-native'

import WallMethods from '../../../../Scripts/utilClasses/WallMethods'

export default function ObjectWidthInput({ style, index_i, index_j }) {

    const { walls, setWalls } = React.useContext(AppContext)

    return (
        <View style={style.container}>
            <Text style={style.label}>
                Largura (m)
            </Text>
            <TextInput
                style={style.input}
                keyboardType='numeric'
                value={`${WallMethods.getWallObjectWidth(walls, index_i, index_j)}`}
                onChangeText={(text) => WallMethods.setWallObjectWidth(setWalls, index_i, index_j, text)}
            />
        </View>
    )
}
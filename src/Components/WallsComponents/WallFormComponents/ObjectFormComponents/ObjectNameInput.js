import React from 'react'
import { AppContext } from '../../../../App'

import {
    View,
    Text,
    TextInput,
} from 'react-native'

import WallMethods from '../../../../Scripts/utilClasses/WallMethods'

export default function ObjectNameInput({ style, index_i, index_j }) {

    const { walls, setWalls } = React.useContext(AppContext)

    return (
        <View style={style.container}>
            <Text style={style.label}>
                Nome
            </Text>
            <TextInput
                style={style.input}
                keyboardType='default'
                value={`${WallMethods.getWallObjectName(walls, index_i, index_j)}`}
                onChangeText={(text) => WallMethods.setWallObjectName(setWalls, index_i, index_j, text)}
            />
        </View>
    )
}
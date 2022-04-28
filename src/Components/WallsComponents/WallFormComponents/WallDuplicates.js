import React from 'react'
import { AppContext } from '../../../App'

import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native'

import WallMethods from '../../../Scripts/utilClasses/WallMethods'

export default function WallDuplicates({index, style}){

    const {walls, setWalls} = React.useContext(AppContext)

    return (
        <View style={style.container}>
            <Text style={style.label}>
                Duplicatas
            </Text>
            <TextInput 
                style={style.input}
                keyboardType='numeric'
                value={`${WallMethods.getWallDuplicatesAmount(walls, index)}`}
                onChangeText={(text)=> WallMethods.setWallDuplicatesAmount(setWalls, index, text)}
            />
        </View>
    )
}
import React from 'react'
import { AppContext } from '../../App'

import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native'

import WallMethods from '../../Scripts/utilClasses/WallMethods'

export default function WallsHeightInput({style}){

    const {walls, setWalls} = React.useContext(AppContext)

    return (
        <View style={style.container}>
            <Text style={style.label}>
                Altura das paredes (m)
            </Text>
            <TextInput
                style={style.input}
                keyboardType='numeric'
                value={`${WallMethods.getWallsHeight(walls)}`}
                onChangeText={(text)=> WallMethods.setWallsHeight(setWalls, text)}
            />
        </View>
    )
}

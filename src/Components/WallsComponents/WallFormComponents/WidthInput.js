import React from 'react'
import { AppContext } from '../../../App'

import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'

import WallMethods from '../../../Scripts/utilClasses/WallMethods'

export default function WidthInput({ index, style }) {

    const { walls, setWalls } = React.useContext(AppContext)

    return (
        <View style={style.container}>
            <Text style={style.label}>
                Largura (m)
            </Text>
            <View style={style.subContainer}>
                <TextInput
                    style={style.input2}
                    keyboardType='numeric'
                    value={`${WallMethods.getWallWidth(walls, index)}`}
                    onChangeText={(text) => WallMethods.setWallWidth(setWalls, index, text)}
                />
                <View style={style.DeleteButton}>
                    <TouchableOpacity
                        onPress={() => {
                            WallMethods.deleteWallWidth(setWalls, index)
                        }}
                    >
                        <Text style={style.ButtonText}>Del</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
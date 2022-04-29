import React from 'react'
import { AppContext } from '../../../App'

import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'

import WallMethods from '../../../Scripts/utilClasses/WallMethods'

export default function WallDuplicates({ index, style }) {

    const { walls, setWalls } = React.useContext(AppContext)

    return (
        <View style={style.container}>
            <Text style={style.label}>
                Duplicatas
            </Text>
            <View style={style.subContainer}>
                <TextInput
                    style={style.input}
                    keyboardType='numeric'
                    value={`${WallMethods.getWallDuplicatesAmount(walls, index)}`}
                    onChangeText={(text) => WallMethods.setWallDuplicatesAmount(setWalls, index, text)}
                />
                <View style={style.DecreaseButton}>
                    <TouchableOpacity
                        onPress={() => {
                            WallMethods.decreaseWallDuplicateCount(setWalls, index)
                        }}
                    >
                        <Text style={style.ButtonText}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.IncreaseButton}>
                    <TouchableOpacity
                        onPress={() => {
                            WallMethods.increaseWallDuplicateCount(setWalls, index)
                        }}
                    >
                        <Text style={style.ButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
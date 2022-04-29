import React from 'react'
import { AppContext } from '../../App'

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import WallMethods from '../../Scripts/utilClasses/WallMethods'

export default function InkLayersInput({ style }) {

    const { walls, setWalls } = React.useContext(AppContext)

    return (
        <View style={style.container}>
            <Text style={style.label}>
                Demãos
            </Text>
            <View style={style.subContainer}>
                <TextInput
                    style={style.input}
                    keyboardType='numeric'
                    value={`${WallMethods.getWallsInkLayers(walls)}`}
                    onChangeText={(text) => WallMethods.setWallsInkLayers(setWalls, text)}
                />
                <View style={style.DecreaseButton}>
                    <TouchableOpacity
                        onPress={() => {
                            WallMethods.decreaseInkLayerCount(setWalls)
                        }}
                    >
                        <Text style={style.ButtonText}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.IncreaseButton}>
                    <TouchableOpacity
                        onPress={() => {
                            WallMethods.increaseInkLayerCount(setWalls)
                        }}
                    >
                        <Text style={style.ButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

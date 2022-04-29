import React from 'react'
import { AppContext } from '../../App'

import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'

import WallMethods from '../../Scripts/utilClasses/WallMethods'

export default function WallsAmountInput({style}){

    const {walls, setWalls} = React.useContext(AppContext)

    return (
        <View style={style.container}>
            <Text style={style.label}>
                Quantidade de paredes
            </Text>
            <View style={style.subContainer}>
                <TextInput
                    style={style.input}
                    keyboardType='numeric'
                    value={`${WallMethods.getWallsAmount(walls)}`}
                    onChangeText={(text)=> WallMethods.setWallsAmount(setWalls, text)}
                />
                <View style={style.DecreaseButton}>
                    <TouchableOpacity 
                        onPress={() => {
                            WallMethods.decreaseWallCount(setWalls)
                        }} 
                    >
                        <Text style={style.ButtonText}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.IncreaseButton}>
                    <TouchableOpacity 
                        onPress={() => {
                            WallMethods.increaseWallCount(setWalls)
                        }} 
                    >
                        <Text style={style.ButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
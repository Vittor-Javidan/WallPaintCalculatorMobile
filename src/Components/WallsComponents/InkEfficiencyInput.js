import React from 'react'
import { AppContext } from '../../App'

import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'

import WallMethods from '../../Scripts/utilClasses/WallMethods'

export default function InkEfficiencyInput({ style }) {

    const { walls, setWalls } = React.useContext(AppContext)

    return (
        <View style={style.container}>
            <Text style={style.label}>
                Gasto de tinta (L/m2)
            </Text>
            <View style={style.subContainer}>
                <TextInput
                    style={style.input2}
                    keyboardType='numeric'
                    value={`${WallMethods.getWallInkEfficiency(walls)}`}
                    onChangeText={(text) => WallMethods.setWallsInkEfficiency(setWalls, text)}
                />
                <View style={style.DeleteButton}>
                    <TouchableOpacity
                        onPress={() => {
                            WallMethods.deleteInkEfficiency(setWalls)
                        }}
                    >
                        <Text style={style.ButtonText}>Del</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
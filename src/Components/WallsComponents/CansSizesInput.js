import React from 'react'
import { AppContext } from '../../App'

import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'

import WallMethods from '../../Scripts/utilClasses/WallMethods'

export default function CansSizesInput({ style }) {

    const { walls, setWalls } = React.useContext(AppContext)

    return (
        <View style={style.container}>
            <Text style={style.label}>
                Volumes de Latas (L)
            </Text>
            <View style={style.subContainer}>
                <TextInput
                    style={style.input2}
                    keyboardType='default'
                    value={`${WallMethods.getCansString(walls)}`}
                    onChangeText={(text) => WallMethods.setCansString(setWalls, text)}
                />
                <View style={style.DeleteButton}>
                    <TouchableOpacity
                        onPress={() => {
                            WallMethods.deleteCansSizes(setWalls)
                        }}
                    >
                        <Text style={style.ButtonText}>Del</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
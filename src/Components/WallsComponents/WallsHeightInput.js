import React from 'react'
import { AppContext } from '../../App'

import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'

import WallMethods from '../../Scripts/utilClasses/WallMethods'

export default function WallsHeightInput({ style }) {

    const { walls, setWalls } = React.useContext(AppContext)

    return (
        <View style={style.container}>
            <Text style={style.label}>
                Altura padrão por parede (m)
            </Text>
            <View style={style.subContainer}>
                <TextInput
                    style={style.input2}
                    keyboardType='numeric'
                    value={`${WallMethods.getWallsHeight(walls)}`}
                    onChangeText={(text) => WallMethods.setWallsHeight(setWalls, text)}
                />
                <View style={style.DeleteButton}>
                    <TouchableOpacity
                        onPress={() => {
                            WallMethods.deleteHeight(setWalls)
                        }}
                    >
                        <Text style={style.ButtonText}>Del</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

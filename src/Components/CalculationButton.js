import React from 'react'
import { AppContext } from '../App'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import WallMethods from '../Scripts/utilClasses/WallMethods'

export default function CalculationButton() {

    const { setWalls } = React.useContext(AppContext)

    return (
        <View style={styles.Container}>
            <TouchableOpacity 
                onPress={() => {
                    WallMethods.calculateCans(setWalls)
                    WallMethods.calculateTotalPrice(setWalls)
                }} 
                style={styles.Button}
            >
                <Text style={styles.Text}>clique para calcular</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        marginTop: 2,
        width: '99%',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#00F'
    },
    Button: {
        
    },
    Text: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
    }
})
import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import InkEfficiencyInput from './WallsComponents/InkEfficiencyInput'
import InkLayersInput from './WallsComponents/InkLayersInput'
import CansSizesInput from './WallsComponents/CansSizesInput'
import CansPricesInput from './WallsComponents/CansPricesInput'
import WallsHeightInput from './WallsComponents/WallsHeightInput'
import WallsAmountInput from './WallsComponents/WallsAmountInput'

import WallsArray from './WallsComponents/WallsArray'

export default function Walls() {

    return (
        <View style={styles.Appform}>
            <View style={styles.ConfigurationForm}>
                <Text style={styles.ConfigurationTitle}>
                    Configurações: 
                </Text>
                <View style={styles.ConfigurationInputs}>
                    <CansSizesInput style={inputStyles}/>
                    <CansPricesInput style={inputStyles}/>
                    <InkEfficiencyInput style={inputStyles}/>
                    <WallsHeightInput style={inputStyles}/>
                    <InkLayersInput style={inputStyles}/>
                    <WallsAmountInput style={inputStyles}/>
                </View>
            </View>
            <WallsArray/>
        </View>
    )
}

const styles = StyleSheet.create({
    Appform: {
        marginTop: 2,
        width: '99%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000000',
        backgroundColor: '#EDE0D4',
        alignItems: 'center',
    },
    ConfigurationForm: {
        marginTop: 2,
        width: '99%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000000',
        backgroundColor: '#7F5539',
        alignItems: 'center',
        marginBottom: 2
    },
    ConfigurationTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#EDE0D4',
        marginVertical: 5
    },
    ConfigurationInputs: {
        display: 'flex',
        width: '100%',
    },
})

const inputStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 1,
        paddingHorizontal: 3,
        paddingBottom: 3,
    },
    label: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#EDE0D4',
        paddingLeft: 2,
    },
    input: {
        borderWidth: 1,
        borderRadius: 4,
        fontSize: 15,
        backgroundColor: '#EDE0D4',
        color: '#000',
        padding: 0,
        paddingHorizontal: 7,
        width: 150,
        color: '#7F5539'
    }
})
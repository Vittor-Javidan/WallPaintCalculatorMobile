import React from 'react'
import { AppContext } from '../App'
import { configOptions } from '../defaultData'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import WallMethods from '../Scripts/utilClasses/WallMethods'

export default function MeasureUnitConfig() {

    const { 
        language, 
        data, setData 
    } = React.useContext(AppContext)
    const T = language.MeasureUnitConfig

    let metersButtonStatus
    let metersButtonText
    let feetsButtonStatus
    let feetsButtonText
    if (WallMethods.getLenghtUnit(data) === configOptions.LENGHT_UNIT.METERS) {
        metersButtonStatus = metersButtonStyle.ButtonSelected
        metersButtonText = metersButtonStyle.TextSelected
        feetsButtonStatus = feetsButtonStyle.Button
        feetsButtonText = feetsButtonStyle.Text
    } else {
        metersButtonStatus = metersButtonStyle.Button
        metersButtonText = metersButtonStyle.Text
        feetsButtonStatus = feetsButtonStyle.ButtonSelected
        feetsButtonText = feetsButtonStyle.TextSelected
    }

    return (
        <View style={formStyles.Form}>
            <Text style={formStyles.Title}>{T.Measure_Unit}</Text>
            <View style={formStyles.Buttons}>
                <View style={feetsButtonStatus}>
                    <TouchableOpacity
                        onPress={() => {
                            WallMethods.setLenghtUnit(setData, configOptions.LENGHT_UNIT.FEETS)
                        }}
                    >
                        <Text style={feetsButtonText}>
                            {T.Feets}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={metersButtonStatus}>
                    <TouchableOpacity
                        onPress={() => {
                            WallMethods.setLenghtUnit(setData, configOptions.LENGHT_UNIT.METERS)
                        }}
                    >
                        <Text style={metersButtonText}>
                            {T.Meters}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const formStyles = StyleSheet.create({

    Form: {
        marginTop: 2,
        width: '98%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000000',
        backgroundColor: '#EDE0D4',
        alignItems: 'center',
        marginBottom: 10
    },
    Title: {
        fontSize: 30,
        fontWeight: '700',
        color: '#7F5539',
        marginVertical: 10
    },
    Buttons: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 40,
        marginBottom: 10
    },
})

const metersButtonStyle = StyleSheet.create({
    Button: {
        backgroundColor: '#7F5539',
        width: '46%',
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 2,
        marginBottom: 1,
    },
    ButtonSelected: {
        backgroundColor: '#0F0',
        width: '46%',
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 2,
        marginBottom: 1,
    },
    Text: {
        alignSelf: 'center',
        color: '#EDE0D4',
        fontSize: 25,
        fontWeight: '700',
    },
    TextSelected: {
        alignSelf: 'center',
        color: '#000',
        fontSize: 25,
        fontWeight: '700',
    }
})

const feetsButtonStyle = StyleSheet.create({
    Button: {
        backgroundColor: '#7F5539',
        width: '48%',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 2,
        marginBottom: 1,
    },
    ButtonSelected: {
        backgroundColor: '#0F0',
        width: '48%',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 2,
        marginBottom: 1,
    },
    Text: {
        alignSelf: 'center',
        color: '#EDE0D4',
        fontSize: 25,
        fontWeight: '700',
    },
    TextSelected: {
        alignSelf: 'center',
        color: '#000',
        fontSize: 25,
        fontWeight: '700',
    }
})

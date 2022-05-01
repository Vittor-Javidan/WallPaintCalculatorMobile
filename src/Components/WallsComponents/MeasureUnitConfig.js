import React from 'react'
import { AppContext } from '../../App'
import { configOptions } from '../../defaultData'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import WallMethods from '../../Scripts/utilClasses/WallMethods'

export default function MeasureUnitConfig() {

    const { data, setData } = React.useContext(AppContext)

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
            <Text style={formStyles.Title}>Measure Unit</Text>
            <View style={formStyles.Buttons}>
                <View style={feetsButtonStatus}>
                    <TouchableOpacity
                        onPress={() => {
                            WallMethods.setLenghtUnit(setData, configOptions.LENGHT_UNIT.FEETS)
                        }}
                    >
                        <Text style={feetsButtonText}>
                            Feets
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
                            Meters
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
        width: '99%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000000',
        backgroundColor: '#7F5539',
        alignItems: 'center',
        marginBottom: 2
    },
    Title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#EDE0D4',
        marginVertical: 5
    },
    Buttons: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

const metersButtonStyle = StyleSheet.create({
    Button: {
        backgroundColor: '#EDE0D4',
        width: '48%',
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 2,
        marginBottom: 1,
    },
    ButtonSelected: {
        backgroundColor: '#0F0',
        width: '48%',
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 2,
        marginBottom: 1,
    },
    Text: {
        alignSelf: 'center',
        color: '#7F5539',
        fontSize: 15,
        fontWeight: '700',
    },
    TextSelected: {
        alignSelf: 'center',
        color: '#000',
        fontSize: 15,
        fontWeight: '700',
    }
})

const feetsButtonStyle = StyleSheet.create({
    Button: {
        backgroundColor: '#EDE0D4',
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
        color: '#7F5539',
        fontSize: 15,
        fontWeight: '700',
    },
    TextSelected: {
        alignSelf: 'center',
        color: '#000',
        fontSize: 15,
        fontWeight: '700',
    }
})
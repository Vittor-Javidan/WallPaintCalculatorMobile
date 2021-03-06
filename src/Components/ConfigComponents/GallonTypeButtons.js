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

export default function GallonTypeButtons() {

    const { 
        language, 
        data, setData 
    } = React.useContext(AppContext)
    const T = language.GallonTypeButtons

    let litersButtonStatus
    let litersButtonText
    let gallonsButtonStatus
    let gallonsButtonText
    if (WallMethods.getGallonUnity(data) === configOptions.GALLON_UNIT.LITERS) {
        litersButtonStatus = litersButtonStyle.ButtonSelected
        litersButtonText = litersButtonStyle.TextSelected
        gallonsButtonStatus = gallonsButtonStyle.Button
        gallonsButtonText = gallonsButtonStyle.Text
    } else {
        litersButtonStatus = litersButtonStyle.Button
        litersButtonText = litersButtonStyle.Text
        gallonsButtonStatus = gallonsButtonStyle.ButtonSelected
        gallonsButtonText = gallonsButtonStyle.TextSelected
    }

    return (
        <View style={style.Form}>
            <View style={gallonsButtonStatus}>
                <TouchableOpacity
                    onPress={() => {
                        WallMethods.setGallonUnity(setData, configOptions.GALLON_UNIT.GALLONS)
                    }}
                >
                    <Text style={gallonsButtonText}>
                        {T.Gallons}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={litersButtonStatus}>
                <TouchableOpacity
                    onPress={() => {
                        WallMethods.setGallonUnity(setData, configOptions.GALLON_UNIT.LITERS)
                    }}
                >
                    <Text style={litersButtonText}>
                        {T.Liters}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    Form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 40,
        marginBottom: 10
    },
})

const litersButtonStyle = StyleSheet.create({

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

const gallonsButtonStyle = StyleSheet.create({
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
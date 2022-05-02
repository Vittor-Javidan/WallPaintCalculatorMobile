import React from 'react'
import { AppContext } from '../App'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import WallMethods from '../Scripts/utilClasses/WallMethods'

export default function LanguageButton() {

    const { L, data, setData } = React.useContext(AppContext)
    const T = L.App.LanguageButton.texts

    let engButtonStatus
    let engButtonText
    let pt_brButtonStatus
    let pt_brButtonText
    if (WallMethods.getLanguage(data) === 'eng') {
        engButtonStatus = engButtonStyle.ButtonSelected
        engButtonText = engButtonStyle.TextSelected
        pt_brButtonStatus = pt_brButtonStyle.Button
        pt_brButtonText = pt_brButtonStyle.Text
    } else {
        engButtonStatus = engButtonStyle.Button
        engButtonText = engButtonStyle.Text
        pt_brButtonStatus = pt_brButtonStyle.ButtonSelected
        pt_brButtonText = pt_brButtonStyle.TextSelected
    }

    return (
        <View style={formStyles.Form}>
            <Text style={formStyles.Title}>
                {T.Languages}
            </Text>
            <View style={formStyles.Buttons}>
                <View style={engButtonStatus}>
                    <TouchableOpacity
                        onPress={() => {
                            WallMethods.setLanguage(setData, 'eng')
                        }}
                    >
                        <Text style={engButtonText}>
                            English
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={pt_brButtonStatus}>
                    <TouchableOpacity
                        onPress={() => {
                            WallMethods.setLanguage(setData, 'pt_br')
                        }}
                    >
                        <Text style={pt_brButtonText}>
                            Português BR
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
        backgroundColor: '#EDE0D4',
        alignItems: 'center',
        marginBottom: 2
    },
    Title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#7F5539',
        marginVertical: 5
    },
    Buttons: {
        width: '99%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 1
    },
})

const engButtonStyle = StyleSheet.create({
    Button: {
        backgroundColor: '#7F5539',
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
        color: '#EDE0D4',
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

const pt_brButtonStyle = StyleSheet.create({
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
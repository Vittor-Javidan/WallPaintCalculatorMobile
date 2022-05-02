import React from 'react'
import { AppContext } from '../App'
import { configOptions } from '../defaultData'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import LanguageSystem from '../Scripts/utilClasses/LanguageSystem'

export default function LanguageButton() {

    const {
        language,   setLanguage,
        data,       setData 
    } = React.useContext(AppContext)
    const T = language.LanguageButton

    let engButtonStatus
    let engButtonText
    let pt_brButtonStatus
    let pt_brButtonText

    if (LanguageSystem.getDataLanguage(data) === configOptions.LANGUAGES.PT_BR) {

        engButtonStatus = engButtonStyle.Button
        engButtonText = engButtonStyle.Text
        pt_brButtonStatus = pt_brButtonStyle.ButtonSelected
        pt_brButtonText = pt_brButtonStyle.TextSelected

    } else {

        engButtonStatus = engButtonStyle.ButtonSelected
        engButtonText = engButtonStyle.TextSelected
        pt_brButtonStatus = pt_brButtonStyle.Button
        pt_brButtonText = pt_brButtonStyle.Text

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
                            LanguageSystem.setLanguage(setData, setLanguage,configOptions.LANGUAGES.ENG)
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
                            LanguageSystem.setLanguage(setData, setLanguage, configOptions.LANGUAGES.PT_BR)
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
        fontSize: 30,
        fontWeight: '700',
        color: '#7F5539',
        marginVertical: 5
    },
    Buttons: {
        width: '97%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
        height: 40,
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
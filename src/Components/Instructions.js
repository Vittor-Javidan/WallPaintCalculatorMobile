import React from 'react'
import { AppContext } from '../App'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import InstructionsButton from './InstructionsComponents/InstructionsButton'
import WallMethods from '../Scripts/utilClasses/WallMethods'

export default function Instructions() {

    const {
        language,
        data
    } = React.useContext(AppContext)
    const T = language.Instructions

    const showInstructions = WallMethods.getShowInstructions(data)

    console.log('output rendered')

    return (
        <>
            {
                showInstructions
                    ? (
                        <View style={styles.Output}>
                            <InstructionsButton />
                            <Text style={styles.Texts}>
                                <Text style={styles.TextsUnderline}>{T.Saving_data}:</Text> {T.Saving_data_text}
                            </Text>
                            <Text style={styles.Texts}>
                                <Text style={styles.TextsUnderline}>{T.Precautions}:</Text> {T.Precautions_text}
                            </Text>
                            <Text style={styles.Texts}>
                                <Text style={styles.TextsUnderline}>{T.Copies}:</Text> {T.Copies_text}
                            </Text>
                            <Text style={styles.Texts}>
                                <Text style={styles.TextsUnderline}>{T.Coat_Amount}:</Text> {T.Coat_Amount_text}
                            </Text>
                            <Text style={styles.Texts}>
                                <Text style={styles.TextsUnderline}>{T.Wall_Amount}:</Text> {T.Wall_Amount_text}
                            </Text>
                            <Text style={styles.Texts}>
                                <Text style={styles.TextsUnderline}>{T.Objects_Amount}:</Text> {T.Objects_Amount_text}
                            </Text>

                            <Text style={styles.Texts}>
                                <Text style={styles.TextsUnderline}>{T.Volume_Config}:</Text> {T.Volume_Config_text}
                            </Text>
                            <Text style={styles.Texts}>
                                <Text style={styles.TextsUnderline}>{T.Volume_Config_Gallons}:</Text> {T.Volume_Config_Gallons_text}
                            </Text>
                            <Text style={styles.Texts}>
                                <Text style={styles.TextsUnderline}>{T.Volume_Config_Liters}:</Text> {T.Volume_Config_Liters_text}
                            </Text>
                            <Text style={styles.Texts}>
                                <Text style={styles.TextsUnderline}>{T.Coverage_gallon_or_Liter}:</Text> {T.Coverage_gallon_or_Liter_text}
                            </Text>
                            <Text style={styles.Texts}>
                                <Text style={styles.TextsUnderline}>{T.Default_Height}:</Text> {T.Default_Height_text}
                            </Text>
                            <Text style={styles.Texts}>
                                <Text style={styles.TextsUnderline}>{T.Wall_Limit_Amount}:</Text> {T.Wall_Limit_Amount_text}
                            </Text>
                            <Text style={styles.Texts}>
                                <Text style={styles.TextsUnderline}>{T.Object_Limit_Amount}:</Text> {T.Object_Limit_Amount_text}
                            </Text>
                            <Text style={styles.Footer}>
                                {T.Footer_text1} <Text style={styles.FooterBold}>LoneWispApps@gmail.com</Text> {T.Footer_text2} <Text style={styles.FooterBold}>{T.Footer_text3}</Text> {T.Footer_text4} <Text style={styles.FooterBold}>{T.Footer_text5}</Text>. {T.Footer_text6}
                            </Text>
                            <Text style={styles.Footer}>
                                {T.Footer_text7}
                            </Text>
                            <Text style={styles.Footer}>
                                {T.Footer_text8}
                            </Text>
                        </View>
                    )
                    : (

                        <View style={styles.Output} >
                            <InstructionsButton />
                        </View>
                    )
            }
        </>
    )
}

const styles = StyleSheet.create({
    Output: {
        marginTop: 2,
        borderWidth: 1,
        borderRadius: 5,
        width: '98%',
        backgroundColor: '#EDE0D4',
        marginBottom: 10,
        paddingBottom: 10
    },
    Texts: {
        alignSelf: 'flex-start',
        textAlign: 'justify',
        color: '#7F5539',
        fontSize: 17,
        marginBottom: 15,
        marginHorizontal: 8
    },
    TextsUnderline: {
        alignSelf: 'flex-start',
        textAlign: 'justify',
        textDecorationLine: 'underline',
        color: '#7F5539',
        fontSize: 17,
        fontWeight: '700',
        marginBottom: 3,
        marginHorizontal: 8
    },
    Footer: {
        alignSelf: 'flex-start',
        textAlign: 'justify',
        color: '#000',
        fontSize: 15,
        marginHorizontal: 8,
        marginVertical: 3,
    },
    FooterBold: {
        alignSelf: 'flex-start',
        textAlign: 'justify',
        textDecorationLine: 'underline',
        color: '#7F5539',
        fontSize: 15,
        fontWeight: '800',
        marginHorizontal: 8
    },
})
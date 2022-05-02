import React from 'react'
import { AppContext } from '../../../App'

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import GallonsFormatMethods from '../../../Scripts/utilClasses/GallonsFormatMethods'

export default function GallonPriceInput() {

    const { 
        language, 
        data, setData 
    } = React.useContext(AppContext)
    const T = language.GallonPriceInput

    return (
        <View style={styles.Container}>
            <Text style={styles.Label}>
                {T.Gallon_Price}
            </Text>
            <View style={styles.SubContainer}>
                <TextInput
                    style={styles.Input}
                    keyboardType='numeric'
                    value={GallonsFormatMethods.getGallonPrice(data)}
                    onChangeText={(price) => GallonsFormatMethods.setGallonPrice(setData, price)}
                />
                <View style={styles.Button}>
                    <TouchableOpacity
                        onPress={() => {
                            GallonsFormatMethods.setGallonPrice(setData, '')
                        }}
                    >
                        <Text style={styles.Text}>
                            {T.Del}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 1,
        paddingHorizontal: 3,
        paddingBottom: 1,
    },
    SubContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    Label: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#7F5539',
        paddingLeft: 2,
    },
    Input: {
        borderWidth: 1,
        borderRadius: 4,
        fontSize: 14,
        backgroundColor: '#7F5539',
        color: '#000',
        padding: 0,
        paddingHorizontal: 7,
        width: 134,
        color: '#EDE0D4',
    },
    Button: {
        backgroundColor: '#FF0000',
        width: 40,
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 2,
    },
    Text: {
        alignSelf: 'center',
        fontSize: 17,
        fontWeight: '900',
        color: '#000',
    },
})
import React from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import WidthInput from './WallFormComponents/WidthInput'
import WallDuplicates from './WallFormComponents/WallDuplicates'
import ObjectsAmountInput from './WallFormComponents/ObjectsAmountInput'

import ObjectsArray from './WallFormComponents/ObjectsArray'

export default function WallForm({ index }) {
    
    return (
        <View style={styles.Form}>
            <Text style={styles.Title}>
                Parede {index + 1}:
            </Text>
            <View style={styles.Inputs}>
                <WidthInput index={index} style={inputStyles}/>
                <WallDuplicates index={index} style={inputStyles}/>
                <ObjectsAmountInput index={index} style={inputStyles}/>
            </View>
            <ObjectsArray index={index}/>
        </View>
    )
}

const styles = StyleSheet.create({
    Form: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#7F5539',
        alignItems: 'center',
        marginBottom: 2,
    },
    Title: {
        alignSelf: 'center',
        color: '#EDE0D4',
        fontWeight: '700',
        fontSize: 20,
        marginVertical: 5,
    },
    Inputs: {
        display: 'flex',
        width: '100%'
    }
})

const inputStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 1,
        paddingHorizontal: 3,
        paddingBottom: 1,
    },
    subContainer: {
        display: 'flex',
        flexDirection: 'row'
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
        fontSize: 14,
        backgroundColor: '#EDE0D4',
        color: '#000',
        padding: 0,
        paddingHorizontal: 7,
        width: 90,
        color: '#7F5539'
    },
    input2: {
        borderWidth: 1,
        borderRadius: 4,
        fontSize: 14,
        backgroundColor: '#EDE0D4',
        color: '#000',
        padding: 0,
        paddingHorizontal: 7,
        width: 132,
        color: '#7F5539'
    },
    DeleteButton: {
        backgroundColor: '#FF0000',
        width: 40,
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 2
    },
    DecreaseButton: {
        backgroundColor: '#FF0000',
        width: 40,
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 2
    },
    IncreaseButton: {
        backgroundColor: '#00FF00',
        width: 40,
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 2
    },
    ButtonText: {
        alignSelf: 'center',
        fontSize: 17,
        fontWeight: '900',
        color: '#000'
    }
})
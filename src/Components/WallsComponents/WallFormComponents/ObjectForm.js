import React from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import ObjectNameInput from './ObjectFormComponents/ObjectNameInput'
import ObjectWidthInput from './ObjectFormComponents/ObjectWidthInput'
import ObjectHeightInput from './ObjectFormComponents/ObjectHeightInput'

export default function ObjectForm({ index_i, index_j }) {
    
    return (
        <View style={styles.Form}>
            <Text style={styles.Title}>
                Objeto {index_j + 1}:
            </Text>
            <View style={styles.Inputs}>
                <ObjectNameInput style={inputStyles} index_i={index_i} index_j={index_j}/>
                <ObjectWidthInput style={inputStyles} index_i={index_i} index_j={index_j}/>
                <ObjectHeightInput style={inputStyles} index_i={index_i} index_j={index_j}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Form: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#EDE0D4',
        alignItems: 'center',
        marginBottom: 2,
    },
    Title: {
        alignSelf: 'center',
        color: '#7F5539',
        fontWeight: '700',
        fontSize: 20,
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
        paddingBottom: 3,
    },
    label: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#7F5539',
        paddingLeft: 2,
    },
    input: {
        borderWidth: 1,
        borderRadius: 4,
        fontSize: 15,
        backgroundColor: '#7F5539',
        color: '#EDE0D4',
        padding: 0,
        paddingHorizontal: 7,
        width: 150,
    }
})
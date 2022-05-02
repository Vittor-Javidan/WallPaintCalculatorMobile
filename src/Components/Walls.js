import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

import WallConfig from './WallsComponents/WallConfig'
import WallsArray from './WallsComponents/WallsArray'

export default function Walls() {

    return (
        <View style={styles.Appform}>
            <WallConfig />
            <WallsArray />
        </View>
    )
}

const styles = StyleSheet.create({
    Appform: {
        marginTop: 2,
        width: '98%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000000',
        backgroundColor: '#EDE0D4',
        alignItems: 'center',
        marginBottom: 10
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
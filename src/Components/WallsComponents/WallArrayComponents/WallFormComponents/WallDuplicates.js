import React from 'react'
import { AppContext } from '../../../../App'

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import WallMethods from '../../../../Scripts/utilClasses/WallMethods'

export default function WallDuplicates({ index }) {

    const { L, data, setData } = React.useContext(AppContext)
    const T = L.App.Walls.WallsArray.WallForm.WallDuplicates.texts

    function decreaseDuplicates() {
        let amount = Number(WallMethods.getWallDuplicates(data, index)) - 1
        if (amount < 1)
            amount = 1
        WallMethods.setWallDuplicates(setData, index, String(amount))
    }

    function increaseDuplicates() {
        const amount = Number(WallMethods.getWallDuplicates(data, index)) + 1
        WallMethods.setWallDuplicates(setData, index, String(amount))
    }

    return (
        <View style={styles.Container}>
            <Text style={styles.Label}>
                {T.Duplicates}
            </Text>
            <View style={styles.SubContainer}>
                <TextInput
                    style={styles.Input}
                    keyboardType='numeric'
                    value={WallMethods.getWallDuplicates(data, index)}
                    onChangeText={(amount) => WallMethods.setWallDuplicates(setData, index, amount)}
                />
                <View style={styles.DecreaseButton}>
                    <TouchableOpacity
                        onPress={decreaseDuplicates}
                    >
                        <Text style={styles.Text}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.IncreaseButton}>
                    <TouchableOpacity
                        onPress={increaseDuplicates}
                    >
                        <Text style={styles.Text}>+</Text>
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
        color: '#EDE0D4',
        paddingLeft: 2,
    },
    Input: {
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
    Text: {
        alignSelf: 'center',
        fontSize: 17,
        fontWeight: '900',
        color: '#000',
    },
})
import React from 'react'
import { AppContext } from '../../../../../../App'

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import WallMethods from '../../../../../../Scripts/utilClasses/WallMethods'

export default function ObjectDuplicatesInput({ index_i, index_j }) {

    const { 
        language, 
        data, setData 
    } = React.useContext(AppContext)
    const T = language.ObjectDuplicatesInput

    function decreaseDuplicates(){
        let amount = Number(WallMethods.getObjectDuplicates(data, index_i, index_j)) - 1
        if (amount < 1)
            amount = 1
        WallMethods.setObjectDuplicates(setData, index_i, index_j,String(amount))
    }

    function increaseDuplicates(){
        const amount = Number(WallMethods.getObjectDuplicates(data, index_i, index_j)) + 1
        WallMethods.setObjectDuplicates(setData, index_i, index_j,String(amount))
    }

    return (
        <View style={styles.Container}>
            <Text style={styles.Label}>
                {T.Copies}
            </Text>
            <View style={styles.SubContainer}>
                <TextInput
                    style={styles.Input}
                    keyboardType='numeric'
                    value={WallMethods.getObjectDuplicates(data, index_i, index_j)}
                    onChangeText={(amount) => WallMethods.setObjectDuplicates(setData, index_i, index_j,amount)}
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
        width: 82,
        color: '#EDE0D4'
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
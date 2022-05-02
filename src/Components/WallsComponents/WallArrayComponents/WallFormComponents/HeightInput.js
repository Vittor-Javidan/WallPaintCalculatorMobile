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

export default function HeightInput({ index }) {

    const { 
        language, 
        data, setData 
    } = React.useContext(AppContext)
    const T = language.WallHeightInput

    return (
        <View style={styles.Container}>
            <Text style={styles.Label}>
                {T.Height} ({WallMethods.getLenghtUnit(data)})
            </Text>
            <View style={styles.SubContainer}>
                <TextInput
                    style={styles.Input}
                    keyboardType='numeric'
                    value={WallMethods.getWallHeight(data, index)}
                    onChangeText={(height) => WallMethods.setWallHeight(setData, index, height)}
                />
                <View style={styles.Button}>
                    <TouchableOpacity
                        onPress={() => {
                            WallMethods.setWallHeight(setData, index, '0')
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
        width: 132,
        color: '#7F5539',
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
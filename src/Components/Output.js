import React from 'react'
import { AppContext } from '../App'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import WallMethods from '../Scripts/utilClasses/WallMethods'
import verifyConditions from '../Scripts/Rules/rulesDefinition'

export default function Output() {

    const { walls } = React.useContext(AppContext)
    const [status, setStatus] = React.useState('')

    console.log('output rendered')

    React.useEffect(()=> {
        verifyConditions(walls, setStatus)
    }, [walls])

    return (
        <View style={styles.Output}>
            <Text style={styles.Title}>Results:</Text>
            <Text style={styles.Texts}>{status}</Text>
            <Text style={styles.Texts}>Área total de parede: {WallMethods.getTotalWallArea(walls)} m2</Text>
            <Text style={styles.Texts}>Área somada dos objetos: {WallMethods.getTotalObjectArea(walls)} m2</Text>
            <Text style={styles.Texts}>
                Área total a ser pintada: {WallMethods.getTotalAreaToPaint(walls)} m2, {WallMethods.getWallsInkLayers(walls)} demãos
            </Text>
            <Text style={styles.Texts}>Total de latas de tinta: {WallMethods.getTotalCans(walls)}</Text>
            <Text style={styles.Texts}>Preço total gasto em tinta: {WallMethods.getTotalPrice(walls)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Output: {
        marginTop: 2,
        borderWidth: 1,
        borderRadius: 5,
        width: '99%',
        backgroundColor: '#EDE0D4',
    },
    Title:{
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '700',
        color: '#7F5539',
        marginVertical: 5
    },
    Texts:{
        alignSelf: 'center',
        color: '#7F5539',
        marginBottom: 3
    }
})
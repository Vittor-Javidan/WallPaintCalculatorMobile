import React from 'react'
import { AppContext } from '../App'
import { configOptions } from '../defaultData'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import WallMethods,
{
    ResultMethods,
    GallonsFormatMethods,
    LitersFormatMethods
} from '../Scripts/utilClasses/WallMethods'

import verifyConditions from '../Scripts/Rules/RulesDefinition'
import CalculationButton from './OutputComponents/CalculationButton'

export default function Output() {

    const { data } = React.useContext(AppContext)
    const [status, setStatus] = React.useState('Press Calculate')

    let gallonUnity = WallMethods.getGallonUnity(data)
    let lenghtUnit = WallMethods.getLenghtUnit(data)

    let coats
    gallonUnity === configOptions.GALLON_UNIT.GALLONS
        ? coats = GallonsFormatMethods.getCoatAmount(data)
        : coats = LitersFormatMethods.getCoatAmount(data)

    let resultTime = ResultMethods.getResultsTime(data)
    let totalWallArea = ResultMethods.getTotalWallArea(data)
    let totalObjectArea = ResultMethods.getTotalObjectArea(data)
    let areaToPaint = ResultMethods.getTotalAreaToPaint(data)
    let totalGallons = ResultMethods.getTotalGallons(data)
    let totalPrice = ResultMethods.getTotalPrice(data)

    React.useEffect(() => {
        verifyConditions(data, setStatus)
    }, [data])

    console.log('output rendered')

    return (
        totalPrice === 'press calculate'
            ? (
                <View style={styles.Output}>
                    <CalculationButton status={status} setStatus={setStatus} />
                    <Text style={styles.Title}>
                        Status:
                    </Text>
                    <Text style={styles.Texts}>
                        {status}
                    </Text>
                </View>
            )
            : (
                <View style={styles.Output}>
                    <CalculationButton status={status} setStatus={setStatus} />
                    <Text style={styles.Title}>
                        Status:
                    </Text>
                    <Text style={styles.Texts}>
                        {status}
                    </Text>
                    <Text style={styles.Title}>
                        (time: {resultTime}) Last Results:
                    </Text>
                    <Text style={styles.Texts}>
                        Total wall area: {totalWallArea} {lenghtUnit}2
                    </Text>
                    <Text style={styles.Texts}>
                        Total objects area: {totalObjectArea} {lenghtUnit}2
                    </Text>
                    <Text style={styles.Texts}>
                        Total area to paint: {areaToPaint} {lenghtUnit}2 x {coats} coats = {areaToPaint * coats} {lenghtUnit}2
                    </Text>
                    <Text style={styles.Texts}>
                        Total gallons: {totalGallons}
                    </Text>
                    <Text style={styles.Texts}>
                        Total price: {totalPrice}
                    </Text>
                </View>
            )
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
    Title: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '700',
        color: '#7F5539',
        marginVertical: 5
    },
    Texts: {
        alignSelf: 'center',
        color: '#7F5539',
        marginBottom: 3
    }
})
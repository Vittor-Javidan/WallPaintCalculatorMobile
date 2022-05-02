import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'

import languages from './languages'
import { defaultData } from './defaultData'

import LanguageButton from './Components/LanguageButton'
import Walls from './Components/Walls'
import Config from './Components/Config'
import Output from './Components/Output'

export const AppContext = React.createContext()

export default function App() {

    const [data, setData] = React.useState({ ...defaultData })
    const [allLanguages, setAllLanguages] = React.useState({ ...languages })

    let L
    data.language === 'eng'
        ? L = allLanguages.eng
        : L = allLanguages.pt_br        
    const T = L.App.texts
    
    const props = {
        L,
        data,
        setData
    }

    return (
        <AppContext.Provider value={props}>
            <View style={styles.AppScreen}>
                <ScrollView style={styles.ScrollView}>
                    <View style={styles.AppBody}>
                        <Text style={styles.title}>
                            {T.Wall_Paint_Calculator}
                        </Text>
                        <Walls />
                        <Config />
                        <Output />
                        <LanguageButton />
                    </View>
                </ScrollView>
            </View>
        </AppContext.Provider>
    )
}

const styles = StyleSheet.create({
    AppScreen: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#7F5539',
        alignItems: 'center'
    },
    ScrollView: {
        width: '100%',
    },
    AppBody: {
        backgroundColor: '#7F5539',
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#EDE0D4',
        color: '#7F5539',
        borderColor: '#000000',
        borderWidth: 1,
        width: '100%',
        height: 40
    }
})
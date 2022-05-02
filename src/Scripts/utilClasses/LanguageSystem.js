import { 
    configOptions,
    defaultData
} from "../../defaultData"

import languages from "../../Languages/languages"

export default class LanguageSystem {

    static getDefaultLanguage(){
        if(defaultData.language === configOptions.LANGUAGES.PT_BR)
            return languages.pt_br
        else
            return languages.eng
    }
    static getDataLanguage(data) { return data.language }
    static setLanguage(setData, setLanguage, language) {

        setData(prev => {
            const newData = { ...prev }
            newData.language = language
            return newData
        })

        setLanguage(prev => {

            if (language === configOptions.LANGUAGES.PT_BR)
                return languages.pt_br
            else
                return languages.eng
        })
    }
}
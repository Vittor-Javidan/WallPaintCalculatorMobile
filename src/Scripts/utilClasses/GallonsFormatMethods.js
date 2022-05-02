export default class GallonsFormatMethods {

    static getGallonPrice(data) { return data.config.gallonsUnitFormat.gallonPrice }
    static setGallonPrice(setData, value) {
        setData(prev => {
            const newData = { ...prev }
            newData.config.gallonsUnitFormat.gallonPrice = value
            return newData
        })
    }

    static getCoatAmount(data) { return data.config.gallonsUnitFormat.coatAmount }
    static setCoatAmount(setData, amount) {
        setData(prev => {
            const newData = { ...prev }
            newData.config.gallonsUnitFormat.coatAmount = amount
            return newData
        })
    }

    static getPaintEfficiency(data) { return data.config.gallonsUnitFormat.paintEfficiency }
    static setPaintEfficiency(setData, value) {
        setData(prev => {
            const newData = { ...prev }
            newData.config.gallonsUnitFormat.paintEfficiency = value
            return newData
        })
    }
}
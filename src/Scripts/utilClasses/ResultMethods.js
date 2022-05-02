import WallMethods from "./WallMethods"
import LitersFormatMethods from "./LitersFormatMethods"
import GallonsFormatMethods from "./GallonsFormatMethods"

export default class ResultMethods {

    static getTotalWallArea(data) { return data.results.totalWallArea }
    static setTotalWallArea(setData) {
        setData(prev => {

            const newData = { ...prev }

            let totalWallArea = 0

            let wallAmount = Number(WallMethods.getWallsAmount(newData))
            for (let wall_index = 0; wall_index < wallAmount; wall_index++) {

                let wallHeight = Number(WallMethods.getWallHeight(newData, wall_index))
                let wallWidth = Number(WallMethods.getWallWidth(newData, wall_index))
                let wallDuplicates = Number(WallMethods.getWallDuplicates(newData, wall_index))

                let wallArea = wallWidth * wallHeight
                totalWallArea += wallArea * wallDuplicates
            }

            newData.results.totalWallArea = String(totalWallArea)
            return newData
        })
    }

    static getTotalObjectArea(data) { return data.results.totalObjectArea }
    static setTotalObjectArea(setData) {
        setData(prev => {

            const newData = { ...prev }

            let totalObjectArea = 0

            let wallAmount = Number(WallMethods.getWallsAmount(newData))
            for (let wall_index = 0; wall_index < wallAmount; wall_index++) {

                let objectsAmount = Number(WallMethods.getObjectsAmount(newData, wall_index))
                for (let object_index = 0; object_index < objectsAmount; object_index++) {

                    let objectHeight = Number(WallMethods.getObjectHeight(newData, wall_index, object_index))
                    let objectWidth = Number(WallMethods.getObjectWidth(newData, wall_index, object_index))
                    let objectDuplicates = Number(WallMethods.getObjectDuplicates(newData, wall_index, object_index))
                    let wallDuplicates = Number(WallMethods.getWallDuplicates(newData, wall_index))

                    let objectArea = objectWidth * objectHeight
                    totalObjectArea += objectArea * objectDuplicates * wallDuplicates
                }
            }

            newData.results.totalObjectArea = String(totalObjectArea)
            return newData
        })
    }

    static getTotalAreaToPaint(data) { return data.results.totalAreaToPaint }
    static setTotalAreaToPaint(setData) {
        setData(prev => {

            const newData = { ...prev }

            let totalWallArea = Number(ResultMethods.getTotalWallArea(newData))
            let totalObjectArea = Number(ResultMethods.getTotalObjectArea(newData))

            newData.results.totalAreaToPaint = String(totalWallArea - totalObjectArea)
            return newData
        })
    }

    static getResultsTime(data) { return data.results.time }
    static getTotalGallons(data) { return data.results.totalGallons }
    static getTotalPrice(data) { return data.results.totalPrice }
    static setTotalGallonsAndPrice(setData) {
        setData(prev => {

            const newData = { ...prev }

            if (newData.config.gallonUnity === 'gallons') {

                //TO DO: Organize each of these blocks of code in its own function

                // set the amount of gallons
                const coatAmount = Number(GallonsFormatMethods.getCoatAmount(newData))
                const paintEfficiency = Number(GallonsFormatMethods.getPaintEfficiency(newData))
                const areaToPaint = Number(ResultMethods.getTotalAreaToPaint(newData))
                let totalGallons = ''

                let gallons = Math.ceil(
                    (areaToPaint / paintEfficiency) * coatAmount
                )

                console.log(totalGallons)
                totalGallons

                gallons > 0
                    ? totalGallons = `${gallons}`
                    : totalGallons = ``

                console.log(totalGallons)

                newData.results.totalGallons = totalGallons
                //===========================================================================

                //set result time
                const date = new Date()
                const hour = date.getHours()
                const minutes = date.getMinutes()
                const seconds = date.getSeconds()
                newData.results.time = `${hour}:${minutes}:${seconds}`
                //===================================================

                // set the price
                const gallonPrice = Number(GallonsFormatMethods.getGallonPrice(newData))
                const totalPrice = gallonPrice * gallons
                newData.results.totalPrice = String(totalPrice)
                //=============================================

                return newData

            } else if (newData.config.gallonUnity === 'L') {

                let areaToPaint = Number(ResultMethods.getTotalAreaToPaint(newData))
                let totalGallons = ''
                let totalPrice = 0

                let gallonsSizes = LitersFormatMethods.getGallonsSizes(newData).split(';')
                let gallonsRespectivePrices = LitersFormatMethods.getGallonsRespectivePrices(newData).split(';')

                let gallonsSizesNumbers = []
                let gallonPricesNumbers = []

                // Converts the gallonsSizes and gallonsRespectivePrices into a Number arrays, removing any invalid element
                for (let i = 0; i < gallonsSizes.length; i++) {
                    if (!isNaN(gallonsSizes[i]) && !isNaN(gallonsRespectivePrices[i])) {
                        gallonsSizesNumbers.push(Number(gallonsSizes[i]))
                        gallonPricesNumbers.push(Number(gallonsRespectivePrices[i]))
                    }
                }
                //==========================================================================================================

                //Sort gallonsSizesNumbers without losing index correlation with gallonPricesNumbers
                let tempVariable
                let swapCount
                let done = false

                while (!done) {
                    swapCount = 0
                    for (let i = 1; i < gallonsSizesNumbers.length; i++) {
                        if (gallonsSizesNumbers[i - 1] < gallonsSizesNumbers[i]) {

                            tempVariable = gallonsSizesNumbers[i]
                            gallonsSizesNumbers[i] = gallonsSizesNumbers[i - 1]
                            gallonsSizesNumbers[i - 1] = tempVariable

                            tempVariable = gallonPricesNumbers[i]
                            gallonPricesNumbers[i] = gallonPricesNumbers[i - 1]
                            gallonPricesNumbers[i - 1] = tempVariable

                            swapCount += 1
                        }
                    }
                    if (swapCount === 0) {
                        done = true
                    }
                }
                //=================================================================================

                // Loops through gallonsSizes and calculate how many gallons its needed to paint the wall area
                const coatAmount = Number(LitersFormatMethods.getCoatAmount(newData))
                const paintEfficiency = Number(LitersFormatMethods.getPaintEfficiency(newData))

                let areaPerGallon = gallonsSizesNumbers.map(gallon => gallon * paintEfficiency)
                areaToPaint = areaToPaint * coatAmount

                for (let gallon_index = 0; gallon_index < gallonsSizesNumbers.length; gallon_index++) {

                    let gallons = 0

                    if (areaToPaint / areaPerGallon[gallon_index] >= 1 && gallon_index !== gallonsSizesNumbers.length - 1) {

                        gallons = Math.floor(
                            (areaToPaint / areaPerGallon[gallon_index])
                        )

                        if (gallons > 0) {
                            areaToPaint -= areaPerGallon[gallon_index] * gallons
                            totalGallons += `${gallons}x ${gallonsSizesNumbers[gallon_index]}L // `
                            totalPrice += gallonPricesNumbers[gallon_index] * gallons
                        }

                    } else if (areaToPaint / areaPerGallon[gallon_index] > 0 && gallon_index === gallonsSizesNumbers.length - 1) {

                        gallons = Math.ceil(
                            (areaToPaint / areaPerGallon[gallon_index])
                        )

                        areaToPaint -= areaPerGallon[gallon_index] * gallons
                        totalGallons += `${gallons}x ${gallonsSizesNumbers[gallon_index]}L // `
                        totalPrice += gallonPricesNumbers[gallon_index] * gallons
                    }
                }

                newData.results.totalGallons = totalGallons
                newData.results.totalPrice = `${totalPrice}`
                //===============================================================================================

                //set result time
                const date = new Date()
                const hour = date.getHours()
                const minutes = date.getMinutes()
                const seconds = date.getSeconds()
                newData.results.time = `${hour}:${minutes}:${seconds}`
                //===================================================

                return newData
            }
        })
    }
}
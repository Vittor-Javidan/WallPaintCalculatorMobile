import appConfig from '../../AppConfig.js'

export default class WallMethods {

    static getWall(walls_State, wall_index) { return walls_State.wallsArray[wall_index] }
    static getWallsArray(walls_State) { return walls_State.wallsArray }
    static getWallsArrayLength(walls_State) { return walls_State.wallsArray.length }
    static getWallsInkLayers(walls_State) { return walls_State.inkLayers }
    static getWallsAmount(walls_State) { return walls_State.wallsAmount }
    static getWallDuplicatesAmount(walls_State, wall_index) { return walls_State.wallsArray[wall_index].duplicates }
    static getWallsHeight(walls_State) { return walls_State.height }
    static getWallWidth(walls_State, wall_index) { return walls_State.wallsArray[wall_index].width }
    static getWallInkEfficiency(walls_State) { return walls_State.inkEfficiency }

    static getWallObjectsAmount(walls_State, wall_index) { return walls_State.wallsArray[wall_index].wallObjectsAmount }
    static getWallObjectsArray(walls_State, wall_index) { return walls_State.wallsArray[wall_index].objectsArray }
    static getWallObjectsArrayLenght(walls_State, wall_index) { return walls_State.wallsArray[wall_index].objectsArray.length }
    static getWallObjectWidth(walls_State, wall_Index, object_Index) { return walls_State.wallsArray[wall_Index].objectsArray[object_Index].width }
    static getWallObjectHeight(walls_State, wall_Index, object_Index) { return walls_State.wallsArray[wall_Index].objectsArray[object_Index].height }
    static getWallObjectName(walls_State, wall_Index, object_Index) { return walls_State.wallsArray[wall_Index].objectsArray[object_Index].name }

    static getCansString(walls_State) { return walls_State.cansString }
    static getCansPriceString(walls_State) { return walls_State.cansPricesString }
    static getCansAmountArray(walls_State) { return walls_State.cansAmount }
    static getCansAmountArrayLenght(walls_State) { return walls_State.cansAmount.length }
    static getTotalCans(walls_State) { return walls_State.totalCans }
    static getTotalPrice(walls_State) { return walls_State.totalPrice }
    static getPricesArrayLength(walls_State) { return walls_State.pricesArray.length }

    static setWallsHeight(setWalls, heightValue) {

        if (!isNaN(heightValue))
            setWalls(prev => {

                const newWall = { ...prev }
                newWall.height = heightValue

                return newWall
            })
    }

    static setWallWidth(setWalls, wall_index, widthValue) {

        if (!isNaN(widthValue))
            setWalls(prev => {

                const newWall = { ...prev }
                newWall.wallsArray[wall_index].width = widthValue

                return newWall
            })
    }

    static setWallsInkLayers(setWalls, layersAmount) {

        if (!isNaN(layersAmount))
            setWalls(prev => {

                const newWall = { ...prev }
                newWall.inkLayers = Number(layersAmount)

                return newWall
            })
    }

    static setWallsInkEfficiency(setWalls, efficiencyValue) {

        if (!isNaN(efficiencyValue))
            setWalls(prev => {

                const newWall = { ...prev }
                newWall.inkEfficiency = efficiencyValue

                return newWall
            })
    }

    static setWallObjectWidth(setWalls, wall_Index, object_Index, widthValue) {

        if (!isNaN(widthValue))
            setWalls(prev => {

                const newWalls = { ...prev }
                newWalls.wallsArray[wall_Index].objectsArray[object_Index].width = widthValue

                return newWalls
            })
    }

    static setWallDuplicatesAmount(setWalls, wall_index, duplicatesAmount) {

        if (!isNaN(duplicatesAmount))
            setWalls(prev => {

                const newWalls = { ...prev }
                newWalls.wallsArray[wall_index].duplicates = Number(duplicatesAmount)

                return newWalls
            })
    }

    static setWallObjectHeight(setWalls, wall_Index, object_Index, heightValue) {


        if (!isNaN(heightValue))
            setWalls(prev => {

                const newWalls = { ...prev }
                newWalls.wallsArray[wall_Index].objectsArray[object_Index].height = heightValue

                return newWalls
            })
    }

    static setWallObjectName(setWalls, wall_Index, object_Index, nameString) {

        setWalls(prev => {

            const newWalls = { ...prev }
            newWalls.wallsArray[wall_Index].objectsArray[object_Index].name = String(nameString)

            return newWalls
        })
    }

    static setCansString(setWalls, cansString) {

        setWalls(prev => {

            const newWall = { ...prev }
            newWall.cansString = cansString

            return newWall
        })
    }

    static setCansPricesString(setWalls, cansPricesString) {

        setWalls(prev => {

            const newWall = { ...prev }
            newWall.cansPricesString = cansPricesString

            return newWall
        })
    }

    static arrayExpansion(array, arraySize, data) {

        let newArray = [...array]

        let diff = arraySize - newArray.length
        for (let i = 0; i < diff; i++)
            newArray.push(data)

        return newArray
    }

    static arrayContraction(array, arraySize) {

        let newArray = [...array]

        let diff = newArray.length - arraySize
        for (let i = 0; i < diff; i++)
            newArray.pop()

        return newArray
    }

    static setWallsAmount(setWalls, wallsAmount) {

        if (!isNaN(wallsAmount) && Number(wallsAmount) >= 0)
            setWalls(prev => {

                wallsAmount = Number(wallsAmount)

                const dataFormat = {
                    width: appConfig.WALL_WIDTH,
                    duplicates: appConfig.DUPLICATES_AMOUNT,
                    wallObjectsAmount: appConfig.WALLS_OBJECT_AMOUNT,
                    objectsArray: []
                }

                let wallsArray = prev.wallsArray

                wallsAmount > wallsArray.length
                    ? wallsArray = WallMethods.arrayExpansion(wallsArray, wallsAmount, dataFormat)
                    : wallsArray = WallMethods.arrayContraction(wallsArray, wallsAmount)

                return {
                    ...prev,
                    wallsAmount: wallsAmount,
                    wallsArray: wallsArray
                }
            })
    }

    static deleteCansSizes(setWalls) {

        setWalls(prev => {

            return {
                ...prev,
                cansString: ''
            }
        })
    }

    static deleteCansPrices(setWalls) {

        setWalls(prev => {

            return {
                ...prev,
                cansPricesString: ''
            }
        })
    }

    static deleteInkEfficiency(setWalls) {

        setWalls(prev => {

            return {
                ...prev,
                inkEfficiency: 0
            }
        })
    }

    static deleteHeight(setWalls) {

        setWalls(prev => {

            return {
                ...prev,
                height: 0
            }
        })
    }

    static increaseInkLayerCount(setWalls) {

        setWalls(prev => {

            return {
                ...prev,
                inkLayers: prev.inkLayers + 1
            }
        })
    }

    static decreaseInkLayerCount(setWalls) {

        setWalls(prev => {

            let inkLayers = prev.inkLayers

            if (inkLayers > 0)
                inkLayers -= 1

            return {
                ...prev,
                inkLayers: inkLayers
            }
        })
    }

    static increaseWallCount(setWalls) {

        setWalls(prev => {

            let wallsAmount = prev.wallsAmount + 1

            const dataFormat = {
                width: appConfig.WALL_WIDTH,
                duplicates: appConfig.DUPLICATES_AMOUNT,
                wallObjectsAmount: appConfig.WALLS_OBJECT_AMOUNT,
                objectsArray: []
            }

            let wallsArray = prev.wallsArray
            wallsArray = WallMethods.arrayExpansion(wallsArray, wallsAmount, dataFormat)

            return {
                ...prev,
                wallsAmount: wallsAmount,
                wallsArray: wallsArray
            }
        })
    }

    static decreaseWallCount(setWalls) {

        setWalls(prev => {

            let wallsAmount
            prev.wallsAmount - 1 < 0
                ? wallsAmount = 0
                : wallsAmount = prev.wallsAmount - 1

            let wallsArray = prev.wallsArray
            wallsArray = WallMethods.arrayContraction(wallsArray, wallsAmount)

            return {
                ...prev,
                wallsAmount: wallsAmount,
                wallsArray: wallsArray
            }
        })
    }

    static setWallObjectsAmount(setWalls, wall_index, objectsAmount) {

        if (!isNaN(objectsAmount))
            setWalls(prev => {

                objectsAmount = Number(objectsAmount)

                const dataFormat = {
                    name: ``,
                    height: 0,
                    width: 0
                }

                const newWall = { ...prev }
                let wallsArray = newWall.wallsArray
                let objectsArray = newWall.wallsArray[wall_index].objectsArray
                const objectsArrayLength = objectsArray.length

                objectsAmount > objectsArrayLength
                    ? objectsArray = WallMethods.arrayExpansion(objectsArray, objectsAmount, dataFormat)
                    : objectsArray = WallMethods.arrayContraction(objectsArray, objectsAmount)

                wallsArray[wall_index].wallObjectsAmount = objectsAmount
                wallsArray[wall_index].objectsArray = objectsArray

                return {
                    ...prev,
                    wallsArray: wallsArray
                }
            })
    }

    static getWallTotalObjectsWidth(walls_State, wall_index) {

        let totalObjectsWidth = 0
        for (let i = 0; i < WallMethods.getWallObjectsArrayLenght(walls_State, wall_index); i++) {

            let objectWidth = Number(WallMethods.getWallObjectWidth(walls_State, wall_index, i))
            totalObjectsWidth += objectWidth
        }
        return totalObjectsWidth
    }

    static getWallArea(walls_State, wall_index) {
        let wallWidth = Number(WallMethods.getWallWidth(walls_State, wall_index))
        let wallHeight = Number(WallMethods.getWallsHeight(walls_State))
        return wallWidth * wallHeight
    }

    static getTotalWallArea(walls_State) {

        let totalArea = 0
        for (let i = 0; i < WallMethods.getWallsAmount(walls_State); i++) {

            let wallArea = WallMethods.getWallArea(walls_State, i)
            let wallDuplicates = Number(WallMethods.getWallDuplicatesAmount(walls_State, i))
            totalArea += wallArea * wallDuplicates
        }
        return totalArea
    }

    static getObjectArea(walls_State, wall_index, object_index) {
        let objectHeight = Number(WallMethods.getWallObjectHeight(walls_State, wall_index, object_index))
        let objectWidth = Number(WallMethods.getWallObjectWidth(walls_State, wall_index, object_index))
        return objectWidth * objectHeight
    }

    static getTotalObjectArea(walls_State) {

        let totalObjectsArea = 0

        for (let i = 0; i < WallMethods.getWallsAmount(walls_State); i++) {
            for (let j = 0; j < WallMethods.getWallObjectsAmount(walls_State, i); j++) {

                let objectArea = WallMethods.getObjectArea(walls_State, i, j)
                let wallDuplicates = Number(WallMethods.getWallDuplicatesAmount(walls_State, i))
                totalObjectsArea += objectArea * wallDuplicates
            }
        }

        return totalObjectsArea
    }

    static getTotalAreaToPaint(walls_State) {

        let totalWallArea = WallMethods.getTotalWallArea(walls_State)
        let totalObjectArea = WallMethods.getTotalObjectArea(walls_State)
        return totalWallArea - totalObjectArea
    }

    static calculateCans(setWalls) {

        setWalls(prev => {

            // Converts the cansString and cansPricesString into a Number arrays, removing any invalid element
            const rawCanArray = prev.cansString.split(';')
            const rawPriceArray = prev.cansPricesString.split(';')
            let cansArray = []
            let pricesArray = []
            if (cansArray.length !== pricesArray.length)
                return { ...prev }

            for (let i = 0; i < rawCanArray.length; i++) {
                if (!isNaN(rawCanArray[i]) && !isNaN(rawPriceArray[i])) {
                    cansArray.push(Number(rawCanArray[i]))
                    pricesArray.push(Number(rawPriceArray[i]))
                }
            }
            console.log(cansArray)
            console.log(pricesArray)

            //Sort cansArray without losing index correlation with pricesArray
            let tempVariable
            let tempVariable2
            let swapCount
            let done = false

            while(!done){
                swapCount = 0
                for(i=1; i < cansArray.length; i++){
                    if(cansArray[i - 1] < cansArray[i]){
                        
                        tempVariable = cansArray[i]
                        cansArray[i] = cansArray[i - 1]
                        cansArray[i - 1] = tempVariable

                        tempVariable2 = pricesArray[i]                        
                        pricesArray[i] = pricesArray[i - 1]
                        pricesArray[i - 1] = tempVariable2

                        swapCount += 1
                    }
                }
                if(swapCount === 0){
                    done = true
                }
            }

            console.log(cansArray)
            console.log(pricesArray)

            // Loops through cansArray and calculate how many cans its needed to paint the wall area
            let totalCans = ''
            let areaToPaint = WallMethods.getTotalAreaToPaint(prev) * prev.inkLayers
            const cansAmountArray = []
            for (let i = 0; i < cansArray.length; i++) {

                const areaPerCan = cansArray[i] * Number(WallMethods.getWallInkEfficiency(prev))

                if (areaToPaint / areaPerCan >= 0 && areaToPaint !== 0) {

                    let cans = 0
                    i !== cansArray.length - 1
                        ? cans = Math.floor(areaToPaint / areaPerCan)
                        : cans = Math.ceil(areaToPaint / areaPerCan)

                    areaToPaint = areaToPaint - areaPerCan * cans
                    cansAmountArray.push(cans)

                    totalCans += `${cans} latas de ${cansArray[i]}L / `
                } else {
                    cansAmountArray.push(0)
                }
            }

            return {
                ...prev,
                cansAmount: cansAmountArray,
                pricesArray: pricesArray,
                totalCans: totalCans
            }
        })
    }

    static calculateTotalPrice(setWalls) {

        setWalls(prev => {

            let totalPrice = 0

            if (prev.pricesArray.length === prev.cansAmount.length)
                for (let i = 0; i < prev.cansAmount.length; i++) {
                    totalPrice += prev.pricesArray[i] * prev.cansAmount[i]
                }

            return {
                ...prev,
                totalPrice: totalPrice
            }
        })
    }
}
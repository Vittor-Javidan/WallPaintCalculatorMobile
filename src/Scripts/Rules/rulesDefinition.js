import WallMethods from '../utilClasses/WallMethods'
import LitersFormatMethods from '../utilClasses/LitersFormatMethods'
import GallonsFormatMethods from '../utilClasses/GallonsFormatMethods'

function checkDefaultHeight(data, setStatus, wall_index) {

    const defaultHeight = WallMethods.getDefaultWallHeight(data)
    if (defaultHeight < 0 || isNaN(defaultHeight))
        return setStatus('defaultHeight must be a valid number')
}

function checkWallHeight(data, setStatus, wall_index) {

    const height = WallMethods.getWallHeight(data, wall_index)
    if (height < 0 || isNaN(height))
        return setStatus(`Wall ${wall_index + 1} height must be a valid number`)
}

function checkWallWidth(data, setStatus, wall_index) {

    const width = WallMethods.getWallWidth(data, wall_index)
    if (width < 0 || isNaN(width))
        return setStatus(`Wall ${wall_index + 1} width must be a valid number`)
}

function checkWallDuplicates(data, setStatus, wall_index) {

    const duplicates = WallMethods.getWallDuplicates(data, wall_index)
    if (duplicates < 0 || isNaN(duplicates))
        return setStatus(`Wall ${wall_index + 1} duplicates must be a valid number`)
}

function checkWallObjectsAmount(data, setStatus, wall_index) {

    const objectsAmount = WallMethods.getObjectsAmount(data, wall_index)
    if (objectsAmount < 0 || isNaN(objectsAmount))
        return setStatus(`Wall ${wall_index + 1} objectsAmount must be a valid number`)
}

function checkObjectsInfo(data, setStatus, wall_index) {

    for (let object_index = 0; object_index < WallMethods.getObjectsAmount(data, wall_index); object_index++) {

        const height = WallMethods.getObjectHeight(data, wall_index, object_index)
        if (height < 0 || isNaN(height))
            return setStatus(`Object ${object_index + 1} height on Wall ${wall_index + 1} must be a valid number`)

        const width = WallMethods.getObjectWidth(data, wall_index, object_index)
        if (width < 0 || isNaN(width))
            return setStatus(`Object ${object_index + 1} width on Wall ${wall_index + 1} must be a valid number`)

        const duplicates = WallMethods.getObjectDuplicates(data, wall_index, object_index)
        if (duplicates < 1 || isNaN(duplicates))
            return setStatus(`Object ${object_index + 1} duplicates on Wall ${wall_index + 1} must be a valid number`)
    }
}

function checkLitersUnitFormatInputs(data, setStatus, wall_index) {

    const gallonsSizes = LitersFormatMethods.getGallonsSizes(data).split(';')
    const gallonsRespectivePrices = LitersFormatMethods.getGallonsRespectivePrices(data).split(';')

    //Check input amount
    if (gallonsSizes.length !== gallonsRespectivePrices.length)
        return setStatus('check if each gallonsSizes has a price, and if they are using ";" to distinguish each number')

    //Checks if the numbers have a valid format
    for (let i = 0; i < gallonsSizes.length; i++) {
        if (isNaN(gallonsSizes[i]) || isNaN(gallonsRespectivePrices[i]))
            return setStatus('check if each gallonsSizes and its prices has the follow number format: 000.00')
        else if (gallonsSizes[i] < 0 || gallonsRespectivePrices[i] < 0)
            return setStatus('check if each gallonsSizes and its prices have any negative number')
    }

    //Check if coatAmount have a valid format
    const coatAmount = LitersFormatMethods.getCoatAmount(data)
    if (coatAmount < 1 || isNaN(coatAmount))
        return setStatus('check if coatAmount is a valid number')

    //check if paintEfficiency
    const paintEfficiency = LitersFormatMethods.getPaintEfficiency(data)
    if (paintEfficiency < 0 || isNaN(paintEfficiency))
        return setStatus('check if paintEfficiency is a valid number')

}

function checkGallonsUnitFormat(data, setStatus, wall_index) {

    //Check if gallonPrice have a valid format
    const gallonPrice = GallonsFormatMethods.getGallonPrice(data)
    if (gallonPrice < 0 || isNaN(gallonPrice))
        return setStatus('check if gallonPrice is a valid number')

    //Check if coatAmount have a valid format
    const coatAmount = GallonsFormatMethods.getCoatAmount(data)
    if (coatAmount < 1 || isNaN(coatAmount))
        return setStatus('check if coatAmount is a valid number')

    //check if paintEfficiency have a valid format
    const paintEfficiency = GallonsFormatMethods.getPaintEfficiency(data)
    if (paintEfficiency < 0 || isNaN(paintEfficiency))
        return setStatus('check if Coverage/gallon is a valid number')
}

const rulesArray = [

    checkGallonsUnitFormat,
    checkLitersUnitFormatInputs,
    checkObjectsInfo,
    checkWallObjectsAmount,
    checkWallDuplicates,
    checkWallWidth,
    checkWallHeight,
    checkDefaultHeight,
]

export default function verifyConditions(data, setStatus) {

    setStatus('ok')

    for (let wall_index = 0; wall_index < WallMethods.getWallsAmount(data); wall_index++) {

        rulesArray.forEach(element => {
            element(data, setStatus, wall_index)
        });
    }

    console.log('verifyDone')
}
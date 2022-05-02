function wallLimitAmountText() {
    return 'Wall limit amount must be an integer'
}
function objectsLimitAmountText() {
    return 'Objects limit amount must be an integer'
}
function defaultHeightText() {
    return 'defaultHeight must be a valid number. Ex: 1.00 and not 1,00'
}
function wallHeightText(wall_index) {
    return `Wall ${wall_index + 1} height must be a valid number. Ex: 1.00 and not 1,00`
}
function wallWidthText(wall_index) {
    return `Wall ${wall_index + 1} width must be a valid number. Ex: 1.00 and not 1,00`
}
function wallDuplicatesText(wall_index) {
    return `Wall ${wall_index + 1} copies must be an integer`
}
function wallObjectsAmountText(wall_index) {
    return `Wall ${wall_index + 1} Objects amount must be an integer`
}
function objectHeighText(wall_index, object_index) {
    return `Object ${object_index + 1} height on Wall ${wall_index + 1} must be a valid number. Ex: 1.00 and not 1,00`
}
function objectWidthText(wall_index, object_index) {
    return `Object ${object_index + 1} width on Wall ${wall_index + 1} must be a valid number. Ex: 1.00 and not 1,00`
}
function objectDuplicatesText(wall_index, object_index) {
    return `Object ${object_index + 1} copies on Wall ${wall_index + 1} must be an integer`
}
function LitersInputAmountText() {
    return 'Check if each gallons sizes has a price, and if they are using ";" to distinguish each number'
}
function LitersValidFormatText1() {
    return 'Check if each gallons sizes and its prices have a valid number: Ex: 1.00 and not 1,00'
}
function LitersValidFormatText2() {
    return 'Check if each gallons sizes and its prices have any negative number'
}
function LitersCoatAmountText() {
    return 'CoatAmount must be an integer'
}
function LitersPaintEfficiencyText() {
    return 'Coverage/Liter must be a valid number. Ex: 1.00 and not 1,00'
}
function GallonPriceText() {
    return 'Gallon Price bust be a valid number. Ex: 1.00 and not 1,00'
}
function GallonCoatAmountText() {
    return 'CoatAmount must be an integer'
}
function GallonPaintEfficiencyText() {
    return 'Coverage/gallon must be a valid number'
}

const eng = {
    wallLimitAmountText,
    objectsLimitAmountText,
    defaultHeightText,
    wallHeightText,
    wallWidthText,
    wallDuplicatesText,
    wallObjectsAmountText,
    objectHeighText,
    objectWidthText,
    objectDuplicatesText,
    LitersInputAmountText,
    LitersValidFormatText1,
    LitersValidFormatText2,
    LitersCoatAmountText,
    LitersPaintEfficiencyText,
    GallonPriceText,
    GallonCoatAmountText,
    GallonPaintEfficiencyText
}

export default eng
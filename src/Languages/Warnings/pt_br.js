function wallLimitAmountText() {
    return 'Limite de paredes precisa ser um número inteiro'
}
function objectsLimitAmountText() {
    return 'Limite de objetos/parede precisa ser um número inteiro'
}
function defaultHeightText() {
    return 'Altura padrão precisa ser um numero válido. Ex: 1.00 e não 1,00'
}
function wallHeightText(wall_index) {
    return `Altura da parede ${wall_index + 1} precisa ser um número válido. Ex: 1.00 e não 1,00`
}
function wallWidthText(wall_index) {
    return `Largura da parede ${wall_index + 1} precisa ser um número válido. Ex: 1.00 e não 1,00`
}
function wallDuplicatesText(wall_index) {
    return `Quantidade de cópias da parede ${wall_index + 1} precisa ser um número inteiro`
}
function wallObjectsAmountText(wall_index) {
    return `Quantidade de objetos na parede ${wall_index + 1} precisa ser um número inteiro`
}
function objectHeighText(wall_index, object_index) {
    return `Altura do objeto ${object_index + 1} na parede ${wall_index + 1} precisa ser um número válido. Ex: 1.00 e não 1,00`
}
function objectWidthText(wall_index, object_index) {
    return `Largura do objeto ${object_index + 1} na parede ${wall_index + 1} precisa ser um número válido. Ex: 1.00 e não 1,00`
}
function objectDuplicatesText(wall_index, object_index) {
    return `Quantidade de cópias do Objeto ${object_index + 1} na parede ${wall_index + 1} precisa ser um número inteiro`
}
function LitersInputAmountText() {
    return 'Confira se cada tamanho de lata possui um preço respectivo, e se também está sendo utilizado ";" para separar cada valor'
}
function LitersValidFormatText1() {
    return 'Confira se cada tamanho de lata e seus respectivos preços possuem um formato de valor válido. Ex: 1.00 e não 1,00'
}
function LitersValidFormatText2() {
    return 'Confira se cada tamanho de lata e seus respectivos preços possuem valores negativos' 
}
function LitersCoatAmountText() {
    return 'Quantidade de demãos precisa ser um número inteiro'
}
function LitersPaintEfficiencyText() {
    return 'Valor de rendimento/Litro precisa ser um número válido. Ex: 1.00 e não 1,00'
}
function GallonPriceText() {
    return 'Preço da lata precisa ser um número válido. Ex: 1.00 e não 1,00'
}
function GallonCoatAmountText() {
    return 'Quantidade de demãos precisa ser um número inteiro'
}
function GallonPaintEfficiencyText() {
    return 'Rendimento/Lata precisa ser um número válido. Ex: 1.00 e não 1,00'
}

const pt_br = {
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

export default pt_br
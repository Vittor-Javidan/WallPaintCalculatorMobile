import WallMethods from '../utilClasses/WallMethods.js'

function checkInkEfficiencyZero(walls_State, setStatus, wall_Index) {
    if (WallMethods.getWallInkEfficiency(walls_State) <= 0)
        return setStatus('AVISO: Gasto de tinta igual a zero')
}

function checkHeightZero(walls_State, setStatus, wall_Index) {

    if (WallMethods.getWallsHeight(walls_State) <= 0)
        return setStatus('AVISO: Altura das paredes possui valor 0')
}

function checkLayersAmount(walls_State, setStatus, wall_Index) {

    if (WallMethods.getWallsInkLayers(walls_State) < 1)
        return setStatus('AVISO: valor de demãos é menor que 1')
}

function checkObjectsAmount(walls_State, setStatus, wall_Index) {

    if (WallMethods.getWallObjectsAmount(walls_State, wall_Index) < 0)
        return setStatus(`AVISO: Parede ${wall_Index + 1} possui uma quantidade negativa de objetos`)
}

function checkObjectsMinArea(walls_State, setStatus, wall_Index) {

    for (let i = 0; i < WallMethods.getWallObjectsAmount(walls_State, wall_Index); i++)
        if (WallMethods.getWallObjectHeight(walls_State, wall_Index, i) * WallMethods.getWallObjectWidth(walls_State, wall_Index, i) <= 0)
            setStatus(`AVISO: objeto ${i + 1} da Parede ${wall_Index + 1} possui área zero`)
}

function checkMinWallArea(walls_State, setStatus, wall_Index) {

    if (WallMethods.getWallArea(walls_State, wall_Index) <= 0)
        return setStatus(`AVISO: Parede ${wall_Index + 1} não possui uma área válida`)
}

function checkWidthWallUsage(walls_State, setStatus, wall_Index) {

    if (WallMethods.getWallWidth(walls_State, wall_Index) < WallMethods.getWallTotalObjectsWidth(walls_State, wall_Index))
        return setStatus(`AVISO: largura da Parede ${wall_Index + 1} é menor que a soma das larguras de seus objetos`)
}

function checkHeightWallUsage(walls_State, setStatus, wall_Index) {

    for (let i = 0; i < WallMethods.getWallObjectsAmount(walls_State, wall_Index); i++)
        if (WallMethods.getWallsHeight(walls_State) < WallMethods.getWallObjectHeight(walls_State, wall_Index, i))
            return setStatus(`AVISO: Altura da Parede ${wall_Index + 1} é menor que a Altura do objeto ${i + 1}`)
}

function checkPricesAndCansArraysLenght(walls_State, setStatus) {

    if (WallMethods.getCansAmountArrayLenght(walls_State) !== WallMethods.getPricesArrayLength(walls_State))
        setStatus('AVISO: A quantidade de latas e seus preços precisa ser a mesma')
}

const rulesArray = [ // Last array indexes has priority on status message display

    checkInkEfficiencyZero,
    checkPricesAndCansArraysLenght,
    checkObjectsMinArea,
    checkObjectsAmount,
    checkLayersAmount,
    checkHeightWallUsage,
    checkWidthWallUsage,
    checkMinWallArea,
    checkHeightZero
]

export default function verifyConditions(walls_State, setStatus) {

    setStatus('ok')

    for (let i = 0; i < WallMethods.getWallsAmount(walls_State); i++) {

        rulesArray.forEach(element => {
            element(walls_State, setStatus, i)
        });
    }
}
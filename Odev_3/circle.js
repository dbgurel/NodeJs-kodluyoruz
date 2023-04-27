
const calculateCircleArea = (r) => {
    return console.log(`Daire Alanı: ${Math.PI * r * r}`)
}

const calculateCircleCircumference = (r) => {
    return console.log(`Daire Çevresi: ${2 * Math.PI * r}`)
}

module.exports = {
    calculateCircleArea,
    calculateCircleCircumference
}
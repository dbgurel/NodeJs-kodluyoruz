const args = process.argv.slice(2);

function calculateCircleArea (r) {
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${Math.PI * r * r}`)
}

calculateCircleArea(args[0]*1);
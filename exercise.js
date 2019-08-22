const strings = ["Totam", "ut", "odit","quis", "Maiores", "unde", "EX", "EST", "corporis"]

strings.forEach(function(string) {
    lower = string.toLowerCase()
    if (string.length > 4) {
        console.log('long')
    } else if (string == lower) {
        console.log('lowercase')
    } else if (string.length > 4 && string == lower) {
        console.log('long and lowercase')
    } else {
        console.log(string)
    }
});
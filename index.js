// Code your solution here
function findMatching(array, string) {
    return array.filter( (n) => {
        return n.toLowerCase() === string.toLowerCase();
    })
}

function fuzzyMatch(arr, str) {
    return arr.filter( r => 
        r.toLowerCase().indexOf(str.toLowerCase()) === 0
    )
}

function matchName(array, string) {
    return array.filter( obj => {
        if (obj.name === string){ return obj }
    })
}
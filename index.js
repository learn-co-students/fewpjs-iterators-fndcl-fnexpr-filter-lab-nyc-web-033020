function findMatching(drivers, searchString){
    return drivers.filter(driver => 
        driver.toLowerCase() === searchString.toLowerCase()
    )
}

function fuzzyMatch(drivers, searchString){
    return drivers.filter(driver => 
        driver.toLowerCase().indexOf(searchString.toLowerCase()) === 0
    )
}

function matchName(drivers, searchString){
    return drivers.filter(driver => 
        driver.name === searchString
    )
}
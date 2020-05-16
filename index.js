function findMatching(drivers, name){
  return drivers.filter(element => (
      element.toLowerCase() === name.toLowerCase())
    )
}

function fuzzyMatch(drivers, name){
  return drivers.filter(element =>(
      element.toLowerCase()[0] === name.toLowerCase()[0]
  ))
}

function matchName(drivers, name){
 return drivers.filter(element =>(
     element.name === name 
 ))
}
const findMatching = (drivers, name) => drivers.filter(driver => driver.toLowerCase() == name.toLowerCase())

const fuzzyMatch = (drivers, string) => drivers.filter(driver => driver.substring(0, string.length) == string)

const matchName = (drivers, string) => drivers.filter(driver => driver.name == string)

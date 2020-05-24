// Code your solution here

const findMatching = (drivers, name) => {
  return drivers.filter(driver => {
    return driver.toLowerCase() === name.toLowerCase();
  })
};

const fuzzyMatch = (drivers, string) => {
  return drivers.filter(driver => {
    return driver.slice(0, string.length) === string
  })
};

const matchName = (drivers, string) => {
  return drivers.filter(driver =>{
    return driver.name === string
  })
};
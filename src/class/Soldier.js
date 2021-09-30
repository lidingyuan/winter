
class Soldier {
  constructor (soldier) {
    Object.keys(soldier).forEach(key => {
      this[key] = soldier[key]
    })
  }
}

export default Soldier

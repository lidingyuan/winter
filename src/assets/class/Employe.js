
class Employe {
  head
  name
  equipmentList
  constructor (e) {
    let dirty = false
    let skillGird = {}
    let skill = {}
    let equipmentList = []
    Object.defineProperty(this, 'equipmentList', {
      get () {
        return equipmentList
      },
      set (val) {
        dirty = true
        equipmentList = val
      }
    })
    Object.defineProperty(this, 'skill', {
      get () {
        return skill
      },
      set (val) {
        dirty = true
        skill = val
      }
    })
    Object.defineProperty(this, 'skillGird', {
      get () {
        if (!dirty) {
          return skillGird
        } else {
          skillGird = countSkill(this.skill, this.equipmentList)
          dirty = false
          return skillGird
        }
      }
    })

    this.head = e.head
    this.name = e.name
    this.skill = e.skill || {}
    this.equipmentList = e.equipmentList || []
  }
}

function countSkill (skill, equipmentList) {
  const _skill = { ...skill }
  equipmentList.forEach(({ skill }) => {
    Object.keys(skill).forEach(key => {
      if (!_skill[key]) {
        _skill[key] = 0
      }
      _skill[key] += skill[key]
    })
  })
  return _skill
}

export default Employe

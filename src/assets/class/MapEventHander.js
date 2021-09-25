import goodsList from '@/assets/base/goods'

let id = 0

const signMap = {
  h: (a, b) => a > b,
  l: (a, b) => b > a
}
const conditionMap = {
  some: (group, type, id, sign, value) => group.some(s => {
    return signMap[sign](s[type][id], value)
  }),
  sum: (group, type, id, sign, value) => {
    const sum = group.reduce((a, b) => {
      return a + (b[type][id] || 0)
    }, 0)
    return signMap[sign](sum, value)
  },
  undefined: () => true
}

function countGoods (gain) {
  const goods = {}
  Object.keys(gain).forEach(key => {
    const index = parseInt(Math.random() * gain[key].length)
    goods[key] = gain[key][index]
  })
  return goods
}

function goodsDescribe (goods) {
  return '获得' + Object.keys(goods).reduce((a, key) => {
    return a + '，' + goodsList[key].name + goods[key] + '个'
  }, '').substr(1)
}

class MapEventHander {
    record = []
    goods = {}

    judge (group) {
      let res = 0
      this.conditions && this.conditions.forEach(([type, args]) => {
        res += conditionMap[type](group, ...(args || []))
      })
      this.resDescribe && this.record.push(this.resDescribe[res])
      if (this.gain && this.gain[res]) {
        this.goods = countGoods(this.gain[res])
        this.record.push(goodsDescribe(this.goods))
      }
      const eventName = this.next ? this.next[res] : ''
      return Promise.resolve(eventName)
    }

    constructor (e) {
      this.id = id++
      this.type = e.type
      this.describe = e.describe
      this.resDescribe = e.resDescribe
      this.next = e.next
      this.conditions = e.conditions
      this.gain = e.gain
    }
}

export default MapEventHander

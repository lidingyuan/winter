
const eventMap = {

  search: {
    type: 'empty',
    describe: '搜索'
  },
  walk: {
    type: 'empty',
    describe: '赶路'
  },
  tiger: {
    type: 'hunt',
    describe: '发现老虎',
    conditions: [
      ['sum', ['skill', 0, 'h', 10]]
    ],
    resDescribe: {
      1: '狩猎成功',
      0: '狩猎失败'
    },
    next: {
      1: 'tiger_collect'
    }
  },
  tiger_collect: {
    type: 'collect',
    describe: '开始采集',
    conditions: [
      ['some', ['skill', 2, 'h', 5]]
    ],
    resDescribe: {
      1: '完美采集',
      0: '一般采集'
    },
    gain: {
      1: { 0: [4, 5], 1: [4, 5], 2: [8, 9, 10] },
      0: { 2: [4, 5] }
    }
  },
  deer: {
    type: 'hunt',
    describe: '发现鹿',
    conditions: [
      ['sum', ['skill', 0, 'h', 3]]
    ],
    resDescribe: {
      1: '狩猎成功',
      0: '狩猎失败'
    },
    next: {
      1: 'deer_collect'
    }
  },
  deer_collect: {
    type: 'collect',
    describe: '开始采集',
    conditions: [
      ['some', ['skill', 2, 'h', 5]]
    ],
    resDescribe: {
      1: '完美采集',
      0: '一般采集'
    },
    gain: {
      1: { 0: [2, 3], 1: [2, 3], 2: [3, 4, 5] },
      0: { 2: [1, 2, 3] }
    }
  }
}

export default eventMap

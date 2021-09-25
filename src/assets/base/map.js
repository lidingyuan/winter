import eventMap from './event'

const mapList = [
  {
    id: 0,
    timeOptions: [10, 30, 60, 120, 240, 480, 1440],
    name: '森林',
    events: {
      search: eventMap.search,
      walk: eventMap.walk,
      tiger: eventMap.tiger,
      // tiger_collect: eventMap.tiger_collect,
      deer: eventMap.deer
      // deer_collect: eventMap.deer_collect
    }
  }
]

export default mapList

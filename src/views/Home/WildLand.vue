<template>
  <div class="out">
    <el-button @click="begin">
      开始
    </el-button>
    <el-button @click="pause">
      暂停
    </el-button>
    <div class="record">
      <div
        v-for="(item,index) in record"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import MapEventHander from '@/assets/class/MapEventHander'
import { mapActions, mapGetters } from 'vuex'
import mapList from '@/assets/base/map'
import eventMap from '@/assets/base/event'
export default {
  name: 'Out',
  data () {
    return {
      map: null,
      record: [],
      timeoutId: null
    }
  },
  computed: {
    ...mapGetters('employe', ['employeList'])
  },
  created () {
    this.createMap()
  },
  methods: {
    ...mapActions('goodsStore', ['setGoodsStore']),
    createMap () {
      this.map = mapList[0]
    },
    pause () {
      clearTimeout(this.timeoutId)
    },
    begin () {
      this.eventHander()
    },
    eventHander (eventName) {
      let event = null
      if (eventName) {
        event = new MapEventHander(eventMap[eventName])
      } else {
        const events = Object.values(this.map.events)
        const randomIndex = parseInt(Math.random() * events.length)
        event = new MapEventHander(events[randomIndex])
      }
      this.record.push(event.describe)
      event.judge(this.employeList).then((eventName) => {
        Object.keys(event.goods).length && this.setGoodsStore(event.goods)
        const pollingArg = event.record.map((record, i) => {
          return () => {
            this.record.push(record)
          }
        })
        pollingArg.push(() => {
          this.eventHander(eventName)
        })
        this.polling(pollingArg)
      })
    },
    polling (pollingArg, i = 0) {
      this.timeoutId = setTimeout(() => {
        pollingArg[i]()
        i++
        pollingArg[i] && this.polling(pollingArg, i)
      }, 1000 * 1)
    }
  }
}
</script>

<style lang='scss' scoped>

</style>

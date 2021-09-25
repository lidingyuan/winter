<template>
  <div class="">
    <el-button @click="comp='PubHouse'">
      酒馆
    </el-button>
    <el-button @click="comp='EmployeList'">
      人物
    </el-button>
    <el-button @click="comp='WildLand'">
      冒险
    </el-button>
    <el-button @click="comp='GoodsStore'">
      仓库
    </el-button>
    <el-button @click="save">
      保存
    </el-button>
    <keep-alive>
      <component :is="comp" />
    </keep-alive>
  </div>
</template>

<script>
import PubHouse from './PubHouse'
import EmployeList from './EmployeList'
import WildLand from './WildLand'
import GoodsStore from './GoodsStore'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: { PubHouse, EmployeList, WildLand, GoodsStore },
  data () {
    return {
      comp: 'WildLand'
    }
  },
  computed: {
    ...mapGetters('goodsStore', ['goodsStore']),
    ...mapGetters('employe', ['employeList'])
  },
  methods: {
    save () {
      const data = {
        position: 0,
        userInfo: {},
        goodsStore: this.goodsStore,
        employeList: this.employeList
      }
      localStorage.setItem('data', JSON.stringify(data))
    }
  }
}
</script>

<style lang='scss' scoped>

</style>

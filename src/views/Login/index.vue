<template>
  <div class="Login">
    <div @click="$router.push('/home')">
      登陆
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {

    }
  },
  created () {
    const dataStr = localStorage.getItem('data')
    const data = dataStr ? JSON.parse(dataStr) : {
      position: 0,
      userInfo: {},
      goodsStore: {},
      employeList: [
        {
          head: '0000',
          name: '测试1',
          skill: {
            0: 4,
            1: 1,
            2: 3
          }
        },
        {
          head: '0000',
          name: '测试2',
          skill: {
            0: 6,
            1: 1,
            2: 8
          }
        }
      ]
    }
    this.loadGoodsStore(data.goodsStore)
    this.loadEmployeList(data.employeList)
    this.loadUserInfo(data.userInfo)
  },
  methods: {
    ...mapActions('goodsStore', ['loadGoodsStore']),
    ...mapActions('employe', ['loadEmployeList']),
    ...mapActions('user', ['loadUserInfo'])
  }
}
</script>

<style lang='scss' scoped>

</style>

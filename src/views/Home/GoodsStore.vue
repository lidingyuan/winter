<template>
  <div class="goods-store">
    <el-card
      v-for="(value,key) in goodsStore"
      :key="key"
    >
      {{ goodsList[key].name }}:{{ value }}
    </el-card>
  </div>
</template>

<script>
import goodsList from '@/assets/base/goods'
import { mapGetters } from 'vuex'
export default {
  name: 'GoodsStore',
  data () {
    return {
      goodsList
    }
  },
  computed: {
    ...mapGetters('goodsStore', ['goodsStore'])
  },
  created () {

  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>

</style>

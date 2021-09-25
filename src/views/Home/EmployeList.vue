<template>
  <div class="employe-list">
    <el-card
      v-for="(employe,index) in employeList"
      :key="index"
    >
      {{ employe.name }}
      <div
        v-for="(skill,key,_index) in employe.skillGird"
        :key="_index"
      >
        {{ skillList[key].name }}：{{ skill }}
      </div>
    </el-card>
  </div>
</template>

<script>
import skillList from '@/assets/base/skill'
import { mapGetters } from 'vuex'
export default {
  name: 'EmployeList',
  data () {
    return {
      skillList
    }
  },
  computed: {
    ...mapGetters('employe', ['employeList'])
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>

</style>

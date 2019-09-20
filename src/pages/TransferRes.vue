<template>
<div>
  <div class="transfer-res">
    <p>转账确认页</p>
  </div>
  <md-button class="main-res" @click="gotoTransferPre" type="warning">确认</md-button>
</div>
</template>

<script>
import {Button} from 'mand-mobile'

export default {
  name: 'TransferRes',
  data () {
    return {}
  },
  components: {
    [Button.name]: Button
  },
  methods: {
    gotoTransferPre () {
      this.$router.push({
        name: 'TransferPre',
        params: { code: '111111' }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .transfer-res
    padding-top: 60px;
    padding-bottom: 60px;
    text-align : center;
    background-color : #ff5257;
    color : #fff;
  .main-res
    margin : 50px auto;
    width :120px;
    height :40px;
    font-size : 20px;
</style>

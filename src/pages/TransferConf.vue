<template>
<div>
  <div>
    <md-field>
    <md-input-item
     class="transfer-conf"
      title="收款姓名"
      placeholder="请输入姓名"
      align="right"
    ></md-input-item>
    <md-input-item
      title="收款账户"
      placeholder="请输入账户"
      align="right"
    ></md-input-item>
    <md-input-item
      title="转账金额"
      placeholder="请输入金额"
      align="right"
    ></md-input-item>
    </md-field>
  </div>
  <md-button class="main-conf" @click="gotoTransferRes" type="warning">转账</md-button>
</div>
</template>

<script>
import {InputItem, Field, Button} from 'mand-mobile'

export default {
  name: 'TransferConf',
  data () {
    return {}
  },
  components: {
    [InputItem.name]: InputItem,
    [Field.name]: Field,
    [Button.name]: Button
  },
  methods: {
    gotoTransferRes () {
      this.$router.push({
        name: 'TransferRes'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .transfer-conf
    font-size : 10px
  .main-conf
    margin :auto;
    width :90%;
</style>

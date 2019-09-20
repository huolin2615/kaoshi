<template>
  <div class="md-example-child md-example-child-button md-example-child-button-2">
    <div>
      <img class="card" src="../assets/qwe.jpg"><img>
      <div class="sign-in">
        <br>帐户:<input type="test"><br>
        <br>密码:<input type="test"><br>
      </div>
      <md-button class="main-btn" @click="gotoTransferConf" type="primary">登录</md-button>
    </div>
  </div>
</template>

<script>
import {Button} from 'mand-mobile'
export default {
  name: 'TransferPre',
  components: {
    [Button.name]: Button
  },
  data () {
    return {
      params: {
        id: 1234
      }
    }
  },
  methods: {
    gotoTransferConf () {
      this.$router.push({
        name: 'TransferConf'
      })
      this.$axios.post('/api', this.prames).then(res => {
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
    .card
      position : relative;
      padding-top : 25%;
      overflow : hidden;
      width : 100%;
    .sign-in
      margin-top : 40px;
      text-align : center;
    .main-btn
      margin :10px auto;
      width :120px;
      height :40px;
      font-size : 20px;
</style>

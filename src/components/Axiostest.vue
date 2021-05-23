<template>
  <h2> {{loadData}}</h2>
</template>

<script>
import { testMyApi } from "@/api/myapi"

export default {
  name: "Axiostest",
  data(){
    return {
      queryParam: { "name": "hzxiao", "age": 18},
      loadData: ''
    }
  },
  created() {
    testMyApi().then((res) => {
      this.loadData = res.data;
    })
  }
}

</script>

<style scoped>

</style>

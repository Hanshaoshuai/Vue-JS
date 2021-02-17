<template>
  <div class="tx">
    <div class='textList' v-for="(item,i) in list" :key="i">
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tx",
  props: {
  },
  data() {
    return {
      list:[
        1,2,3,4,5,6,7,8,9,10,11,12,13
      ]
    };
  },
  computed: {
  },
  created() {
  },
  mounted() {
  },
  methods: {
  },
  watch: {
  },
  components: {
  }
};
</script>

<style lang="scss">
.tx{
  width:100%;
  height:auto;
  padding: 1.3rem 0 1.5rem 0;
  background-image:url("../../public/img/imgs/Tx.png");
  background-size:100%;
  .textList{
    width:100%;
    height:1.93rem;
  }
}
</style>
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Lazy loaded component</h2>
    <Clock time='10:40:00'></Clock>
  </div>
</template>

<script>
import Clock from 'vue-clock2';
export default {
  name: 'Lazy',
  components: { Clock },
  props: {
    msg: String
  },

  mounted() {
    console.log('Lazy component has been mounted');
    console.log(this);
    console.log(this.$store);
  }
}
</script>

<style scoped>
h1 {
  margin: 20px 0;
  color: red;
}
</style>

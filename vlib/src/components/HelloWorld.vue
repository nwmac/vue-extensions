<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  // async fetch() {
  //   const uiSettings = await this.$store.dispatch('management/findAll', { type: 'management.cattle.io.setting' });

  //   console.log(JSON.parse(JSON.stringify(uiSettings)));

  //   console.log('ASYNC FETCH IN IMPORTED COMPONENT');
  // },

  mounted() {
    console.log('HelloWorld component has been mounted');
    console.log(this);
    console.log(this.$store);
  }
}
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
  color: #42b983;
}
</style>

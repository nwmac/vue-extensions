<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" height="96" class="logo">

    <h1>Test Host App</h1>

    <div>
      <Clock time='08:30:00'></Clock>
    </div>

    <Button @click="test()" class="mb-20">Load Extension</Button>

    <h2 v-if="comps.length">Extension Components</h2>
    <div v-for="item in comps" :key="item">
      <div class="choice" @click="select(item)">{{ item }}</div>
    </div>

    <div v-if="error" class="error">{{ error }}</div>

    <component v-if="testComp" :is="testComp" v-bind="currentProperties"></component>

  </div>
</template>

<script>
import { dynamicImport } from './utils.js';

import Clock from 'vue-clock2';

export default {
  name: 'App',
  components: {
    Clock
  },

  data() {
    return { testComp: null, comps: [], extension: null, error: null};
  },

  computed: {
    currentProperties() {
      return {
        msg: 'TEST'
      };
    }
  },

  methods: {
    async select(name) {
      const comp = this.extension[name];

      if (comp) {
        // Is it a function?
        if (typeof comp === 'function') {
          const c = await comp();

          this.testComp = c.default;
        } else {
          this.testComp = comp;
        }
      }
    },

    async test() {
      window.__remotes__ = {
        'Lazy': 'vlib@http://127.0.0.1:8081/vlib-remote.js',
        'Extension': 'vlib@http://127.0.0.1:8081/vlib-remote.js'
      };

      this.testComp = null;

      const n = await dynamicImport('Extension');

      if (!n) {
        this.error = 'Can not load extension';
        return;
      }

      this.error = null;

      if (n.default) {
        const ext = n.default();
        this.extension = ext;
        this.comps = ext.Options;
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.choice {
  display: inline-flex;
  padding: 10px 40px;
  cursor: pointer;
}

.choice:hover {
  background-color: #2491ff;
  border-radius: 6px;
  color: #fff;
}

.logo {
  position: absolute;
  top: 10px;
  left: 10px;
}

button {
  margin: 10px 0;
}

.error {
  color: red;
  font-weight: bold;
  font-size: 20px;
  margin: 20px 0;
}
</style>

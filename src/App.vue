<template>
  <el-container>
    <el-aside width="200px">
      <org-tree></org-tree>
    </el-aside>
    <el-main>
      <user-table></user-table>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import OrgTree from "./components/OrgTree.vue";
import UserTable from "./components/UserTable.vue";
export default defineComponent({
  name: "App",
  components: {
    OrgTree,
    UserTable,
  },
  setup() {
    const state = reactive({});

    return {
      ...toRefs(state),
    };
  },
});
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
</style>

<template>
  <div>
    <el-tree
      style="max-width: 600px"
      :props="props"
      :load="loadNode"
      lazy
      @node-click="nodeClick"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, watch } from "vue";
import orgApi from "@/api/org";
import { InitData, orgInfo } from "@/type/org";
import type Node from "element-plus/es/components/tree/src/model/node";

import { useStore } from "vuex";
export default defineComponent({
  name: "OrgTree",
  setup() {
    const store = useStore();
    const state = reactive({
      current_node: Object,
    });
    const props = {
      label: "name",
      children: "children",
      isLeaf: "leaf",
    };

    const loadNode = async (node: Node, resolve: (data: orgInfo[]) => void) => {
      if (node.level > 3) return resolve([]);

      const data: orgInfo[] = await getData();

      resolve(data);
    };
    // onMounted(() => {
    //   getData();
    // });
    const getData = async () => {
      //   const datas: orgInfo[] = await orgApi.query("1");
      return await orgApi.query("1");
    };
    const nodeClick = (node: any, nodemsg: any) => {
      state.current_node = nodemsg;
    };
    watch(
      () => state.current_node,
      (val) => {
        store.commit("set_current_node", val);
      }
    );
    return {
      ...toRefs(state),
      props,
      loadNode,
      nodeClick,
    };
  },
});
</script>

<style scoped></style>

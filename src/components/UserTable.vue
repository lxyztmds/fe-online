<template>
  <div v-if="current_node" style="font-size: 36px; color: red">userTable</div>
  <span>
    {{
      current_node_path
        .filter((v) => v.id)
        .map((v) => {
          return v.data.name;
        })
        .join("/")
    }}
  </span>
  <el-input v-model="filterKey" style="width: 240px" placeholder="Please input" />
  <el-table :data="userList" style="width: 100%">
    <el-table-column prop="name" label="Name" width="180" />
  </el-table>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, computed, ref, watch } from "vue";
import userApi from "@/api/user";
import { InitData } from "@/type/user";
import { useStore } from "vuex";
export default defineComponent({
  name: "userTable",
  setup() {
    function debounce(func: Function, delay: number) {
      let timer: any = null;
      return function (this: any, ...args: any[]) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    }

    const filterKey = ref("");
    const store = useStore();
    const state = reactive(new InitData());
    const current_node = ref(
      computed(() => {
        // console.log(getNodePath(store.state.current_node));
        return store.state.current_node;
      })
    );
    const current_node_id = ref(
      computed(() => {
        // console.log(getNodePath(store.state.current_node));
        return store.state.current_node.data.id;
      })
    );
    watch(current_node, (val) => {
      //   console.log(val);
      //   console.log(getNodePath(val));
      getData();
    });
    watch(filterKey, (val) => {
      getData();
    });
    const current_node_path = ref(
      computed(() => {
        return getNodePath(current_node.value);
      })
    );
    // onMounted(() => {
    //   getData();
    // });
    const getNodePath = (node: any) => {
      let arr = [];
      let parent = node.parent;

      while (parent) {
        arr.unshift(parent);
        parent = parent.parent;
      }

      return arr;
    };
    const getData = debounce(() => {
      userApi
        .query({
          name: String(filterKey),
          orgId: String(current_node_id),
        })
        .then((users) => {
          state.userList = users;
        });
    }, 300);
    return {
      ...toRefs(state),
      current_node,
      current_node_path,
      filterKey,
    };
  },
});
</script>

<style scoped></style>

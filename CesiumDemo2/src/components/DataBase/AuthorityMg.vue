<!---人员权限管理-->
<template>
  <MyForm v-show="showForm" @formSubmit="addRow"  class="myform"></MyForm>
  <a-button
    @click="showmyForm"
    class="addacc"
    type="primary"
    style="background-color: #6bc7a1"
    ><span
      ><PlusCircleOutlined style="padding-right: 3px" />添加账号
    </span></a-button
  >
  <a-table
    :columns="columns"
    :data-source="tableData"
    @resizeColumn="handleResizeColumn"
  >
    <template #headerCell="{ column }">
      <template v-if="column.key === 'account'">
        <span>
          <!-- <smile-outlined /> -->
          账号
        </span>
      </template>
    </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'account'">
        <a style="color: #6bc7a1">
          {{ record.account }}
        </a>
      </template>
      <template v-else-if="column.key === 'tags'">
        <span>
          <a-tag
            v-for="tag in record.tags"
            :key="tag"
            :color="tag === '未启用' ? 'volcano' : 'green'"
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <span>
          <a @click="EditInfo" style="color: #6bc7a1">编辑</a>
          <a-divider type="vertical" />
          <a @click="handleRowDelete(record)" style="color: #6bc7a1">删除</a>
          <a-divider type="vertical" />
          <a style="color: #6bc7a1" class="ant-dropdown-link">
            改密
            <!-- <down-outlined /> -->
          </a>
        </span>
      </template>
    </template>
  </a-table>
</template>
  <script setup>
import { ref, onMounted, reactive } from "vue";

import http from "@/module/myAxios";
import MyForm from "./AccoutForm.vue";
http.defaults.withCredentials = true; // Cookie跨域

const tableData = ref([]); // 表格数据
const editData = reactive({}); // 编辑数据
const showForm = ref(false);

// const data = [
//   {
//     key: '1',
//     account: 'MSPT',
//     name: 'test',
//     phone: 'New York No. 1 Lake Park',
//     tags: ['启用'],
//   },
//   {
//     key: '2',
//     account: 'LVXCY',
//     name: '李惠明',
//     phone: 'London No. 1 Lake Park',
//     tags: ['未启用'],
//   },
//   {
//     key: '3',
//     account: 'WYQ',
//     name: '刘龙金',
//     phone: 'Sidney No. 1 Lake Park',
//     tags: ['启用'],
//   },
// ];

const columns = ref([
  {
    title:'账号',
    dataIndex: "Account",
    key: "Account",
    resizable: true,
    width: 150,
  },
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
    resizable: true,
    width: 100,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    title: "部门",
    dataIndex: "department",
    key: "department",
    resizable: true,
    width: 100,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    title: "手机号码",
    dataIndex: "contact_number",
    key: "contact_number",
    resizable: true,
    width: 300,
    minWidth: 200,
    maxWidth: 400,
  },
  // {
  //   title: '状态',
  //   key: 'tags',
  //   dataIndex: 'tags',
  // },
  {
    title: "操作",
    key: "action",
  },
]);

function handleResizeColumn(w, col) {
  col.width = w;
}

const EditInfo = () => {
  editData.id = " row.id";
  editData.name = "row.name";
  // ...根据你的数据结构赋值编辑数据
};
const loadTableData = async () => {
  try {
    const response = await http.get("/Account_Controller/getALL_Account");
    console.log(response);
    tableData.value = response;
  } catch (error) {
    console.log(error);
  }
};

const showmyForm = () => {
  showForm.value = true;
  console.log('点击了'+showForm.value);
};
//添加数据
const addRow = async (data) => {
  console.log(data);
  const response = await http.post("/Account_Controller/addALL_Account", {
    // 从表单组件获取到的数据
    // ...
  });
  // 处理响应数据，更新表格数据
  tableData.value.push(response.data);
};
//删除数据 响应式tableData改变后 组件重新渲染
const handleRowDelete = async (row) => {
  try {
    //await http.delete(`/api/tableData/${row.id}`);
    await http.delete("/Account_Controller/Delete_Account", {
      Account: "test",
    });
    tableData.value = [...tableData.value].filter(
      (data) => data.Account !== row.Account
    ); // 从表格数据中删除行
  } catch (error) {
    console.error(error);
  }
};
http.interceptors.request.use((config) => {
  console.log(config.url);
});

setInterval(() => {console.log(showForm.value )}, 1500);
// 在组件挂载后加载表格数据
//loadTableData();
//  testfunc();

onMounted(() => {
  loadTableData();
});
</script>

  <style scoped>
.addacc {
  background-color: rgb(107, 199, 161);
  position: relative;
  right: -78.5vw;
  /* left: 47px; */
  top: -1vh;
}
.myform{
  z-index: 10000000;
    position: fixed;
    background-color: whitesmoke;
    width: 83vw;
    top: 16vh;
    height: 51vh;
}
</style>
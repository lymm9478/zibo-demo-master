<!---人员权限管理-->
<template>
   <a-button @click="addRow"  class="addacc" type="primary" style="background-color: #6bc7a1;"><span><PlusCircleOutlined style="padding-right: 3px;" />添加账号
    
   </span></a-button>
    <a-table :columns="columns" :data-source="data" @resizeColumn="handleResizeColumn">
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
          <a style="color:#6bc7a1;">
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
            <a @click="EditInfo" style="color: #6bc7a1;">编辑</a>
            <a-divider type="vertical" />
            <a  @click="handleRowDelete"  style="color: #6bc7a1;">删除</a>
            <a-divider type="vertical" />
            <a style="color: #6bc7a1;" class="ant-dropdown-link">
              改密
              <!-- <down-outlined /> -->
            </a>
          </span>
        </template>
      </template>
    </a-table>
  </template>
  <script setup>
 
  import {ref, onMounted,reactive} from 'vue'
  import axios from 'axios';

  const tableData = ref([]); // 表格数据  
  const editData = reactive({}); // 编辑数据  

 
  const data = [
    {
      key: '1',
      account: 'MSPT',
      name: 'test',
      phone: 'New York No. 1 Lake Park',
      tags: ['启用'],
    },
    {
      key: '2',
      account: 'LVXCY',
      name: '李惠明',
      phone: 'London No. 1 Lake Park',
      tags: ['未启用'],
    },
    {
      key: '3',
      account: 'WYQ',
      name: '刘龙金',
      phone: 'Sidney No. 1 Lake Park',
      tags: ['启用'],
    },
  ];

  const columns = ref([
    {
      dataIndex: 'account',
      key: 'account',
      resizable: true,
      width: 150,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      resizable: true,
      width: 100,
      minWidth: 100,
      maxWidth: 200,
    },
    {
      title: '手机号码',
      dataIndex: 'phone',
      key: 'phone',
      resizable: true,
    },
    {
      title: '状态',
      key: 'tags',
      dataIndex: 'tags',
    },
    {
      title: '操作',
      key: 'action',
    },
  ]);
  function handleResizeColumn(w, col) {
    col.width = w;
  }

  const EditInfo=()=>{
      editData.id =' row.id';  
      editData.name = 'row.name';  
      // ...根据你的数据结构赋值编辑数据  
  }
  const loadTableData = async () => {  
      try {  
        const response = await axios.get('/api/tableData'); // 替换为你的后端数据接口地址  
        tableData.value = response.data; // 设置表格数据  
      } catch (error) {  
        console.error(error);  
      }  
    };

//添加数据
const addRow=async()=> {  
    const response = await axios.post('/api/tableData', {  
      // 发送你需要的数据字段  
      column1: 'value1',  
      column2: 'value2',  
      // ...  
    });  
    // 处理响应数据，更新表格数据  
     tableData.value.push(response.data);  
  }
//删除数据
const handleRowDelete = async (row) => {  
      try {  
        await axios.delete(`/api/tableData/${row.id}`); // 替换为你的后端删除接口地址  
        tableData.value = [...tableData.value].filter(data => data.id !== row.id); // 从表格数据中删除行  
      } catch (error) {  
        console.error(error);  
      }  
    };  
    axios.interceptors.request.use((config) => { console.log(config.url) })
   
    setInterval (() => {}, 1500)
  // 在组件挂载后加载表格数据  
    loadTableData();  


  onMounted(()=>{


})

  </script>

  <style scoped>
.addacc{
  background-color: rgb(107, 199, 161);
    position: relative;
    right: -78.5vw;
    /* left: 47px; */
    top: -1vh;
}
</style>
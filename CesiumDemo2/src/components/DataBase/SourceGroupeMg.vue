<!---资源组管理-->
<template>
    <a-table :columns="columns" :data-source="data" @resizeColumn="handleResizeColumn">
      <template #headerCell="{ column }">
        <template v-if="column.key === 'groupename'">
          <span >
            <!-- <smile-outlined /> -->
            序号
          </span>
        </template>
      </template>
  
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'groupename'">
          <a style="color:#070707;">
            {{ record.groupename }}
          </a>
        </template>

        <template v-else-if="column.key === 'action'">
          <span>
            <a style="color: #6bc7a1;">编辑</a>
            <a-divider type="vertical" />
            <a style="color: #6bc7a1;" >删除</a>
            <a-divider type="vertical" />
            <a class="ant-dropdown-link" style="color: #6bc7a1;">
              改密
              <!-- <down-outlined /> -->
            </a>
          </span>
        </template>
      </template>
    </a-table>
  </template>
  <script setup>
 
  import {ref, onMounted} from 'vue'

  onMounted(()=>{

  })
  const data = [
    {
      key: '1',
      groupename: 'MSPT',
      sourcenum: 'test',
      souregrounpedesc: 'New York No. 1 Lake Park',
      createperson: 'LIYI',
    },
    {
      key: '2',
      groupename: 'MSPT',
      sourcenum: 'test',
      souregrounpedesc: 'New York No. 1 Lake Park',
      createperson: 'LIYI',
    },
    {
      key: '3',
      
      groupename: 'MSPT',
      sourcenum: 'test',
      souregrounpedesc: 'New York No. 1 Lake Park',
      createperson: 'LIYI',
    },
    {
      key: '4',
      
      groupename: 'MSPT',
      sourcenum: 'test',
      souregrounpedesc: 'New York No. 1 Lake Park',
      createperson: 'LIYI',
    },
  ];
  const columns = ref([

    {
      title: '资源组名称',
      dataIndex: 'groupename',
      key: 'groupename',
      resizable: true,
      width: 100,
      minWidth: 100,
      maxWidth: 200,
    },
    {
      title: '组内站点数',
      dataIndex: 'sourcenum',
      key: 'sourcenum',
      resizable: true,
    },
    {
      title: '资源组描述',
      dataIndex: 'souregrounpedesc',
      key: 'souregrounpedesc',
      resizable: true,
      width: 200,
      minWidth: 200,
      maxWidth: 400,
    },
    {
      title: '创建人',
      dataIndex: 'createperson',
      key: 'createperson',
      resizable: true,
    },

    {
      title: '操作',
      key: 'action',
    },
  ]);
  function handleResizeColumn(w, col) {
    col.width = w;
  }


  </script>
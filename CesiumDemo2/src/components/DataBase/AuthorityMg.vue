<!---人员权限管理-->
<template>
    <a-table :columns="columns" :data-source="data" @resizeColumn="handleResizeColumn">
      <template #headerCell="{ column }">
        <template v-if="column.key === 'account'">
          <span>
            <smile-outlined />
            账号
          </span>
        </template>
      </template>
  
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'account'">
          <a>
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
            <a>编辑</a>
            <a-divider type="vertical" />
            <a>删除</a>
            <a-divider type="vertical" />
            <a class="ant-dropdown-link">
              改密
              <!-- <down-outlined /> -->
            </a>
          </span>
        </template>
      </template>
    </a-table>
  </template>
  <script setup>
  import { ref } from 'vue';
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
  </script>
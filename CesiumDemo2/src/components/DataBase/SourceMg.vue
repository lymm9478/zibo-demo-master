<template>
  <a-table
    :columns="columns"
    :data-source="data"
    :pagination="{ pageSize: 50 }"
    :scroll="{ y: 460 }"
  >
  
  <template #bodyCell="{ column }">
    <template v-if="column.key === 'action'">
          <span>
            <a >编辑</a>
            <a-divider type="vertical" />
            <a>删除</a>
            <a-divider type="vertical" />

          </span>
        </template>

      </template>
  
  </a-table>
</template>
<script setup>
const columns = [
{
    title: '序号',
    dataIndex: 'indexorder',
    width: 150,
  },
  {
    title: '资源标识',
    dataIndex: 'sourcetag',
    width: 150,
  },
  {
    title: '资源描述',
    dataIndex: 'sourcedescrible',
    resizable: true,
    width: 200,
    minWidth: 150,
    maxWidth: 400,
  },
  {
    title: '资源名称',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: '所属资源组',
    dataIndex: 'sourcegoroup',
    width: 150,
  },
  {
      title: '操作',
      key: 'action',
    },
];
const data = [...Array(100)].map((_, i) => ({
  key: i,
  indexorder:i,
  sourcetag: ` K${i}${i+1}${i+2}`,
  sourcedescrible:`矿山安全监测 ${i}`,
  name: `设备${i}`,
  sourcegoroup: '默认资源组',
  address: `London, Park Lane no. ${i}`,
}));
</script>
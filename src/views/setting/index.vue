<template>
  <div class="app-container">
    <el-card shadow="always">
      <el-tabs v-model="activeName">
        <el-tab-pane
          label="用户管理"
          name="first"
        ><el-row>
           <el-col :span="24" /><el-button
             type="primary"
             style="margin-left: 10px"
             @click="isshow = true"
           >新增人员</el-button>
         </el-row>
          <el-table
            :data="pagelist"
            height="250"
            border
            style="width: 100%"
            :loading="loading"
          >
            <el-table-column type="index" label="序号" width="120" />
            <el-table-column prop="name" label="角色名称" width="180" />
            <el-table-column prop="description" label="描述" />
            <el-table-column label="操作" width="280">
              <el-button size="small" type="success">分配权限</el-button>
              <el-button size="small" type="primary">编辑</el-button>
              <el-button size="small" type="danger">删除</el-button>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">公司信息</el-tab-pane>
      </el-tabs>
      <el-row type="flex" align="middle" justify="end" style="height: 60px">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
        /></el-row>
    </el-card>
    <dalong :isshow.sync="isshow" @updata="getpagelist" />
  </div>
</template>

<script>
import { getpage } from '@/api/setting'
import dalong from '@/views/setting/components/dalong.vue'
export default {
  name: 'HrsaasIndex',
  components: {
    dalong
  },
  data() {
    return {
      activeName: 'first',
      page: {
        page: 1,
        pagesize: 10
      },
      total: 0,
      pagelist: [],
      loading: false,
      isshow: false
    }
  },

  mounted() {
    this.getpagelist()
  },

  methods: {
    async getpagelist() {
      this.loading = true
      try {
        const { data } = await getpage(this.page)
        const { rows, total } = data.data
        this.total = total
        this.pagelist = rows
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = true
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>

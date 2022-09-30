<template>
  <el-dialog title="新增角色" width="50%" :visible="isshow">
    <el-form ref="roleDialogForm" :model="formData" label-width="80px">
      <el-form-item
        prop="name"
        label="角色"
        :rules="[{ required: true, triger: 'blur', message: '角色必填' }]"
      >
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item
        label="描述"
        prop="description"
        :rules="[{ required: true, triger: 'blur', message: '角色必填' }]"
      >
        <el-input v-model="formData.description" type="textarea" row="3" />
      </el-form-item>
    </el-form>
    <el-row
      slot="footer"
      type="flex"
      justify="center"
      align="middle"
      class="dialog-footer"
    >
      <el-button
        @click="
          ;[$emit('update:isshow', false), $refs.roleDialogForm.resetFields()]
        "
      >取 消</el-button>
      <el-button
        v-loading="loading"
        type="primary"
        @click="submit"
      >确 定</el-button>
    </el-row>
  </el-dialog>
</template>

<script>
import { addRole } from '@/api/setting'
export default {
  props: {
    isshow: {
      type: Boolean
    }
  },
  data() {
    return {
      formData: {
        name: '',
        description: ''
      },
      loading: false
    }
  },
  methods: {
    async submit() {
      try {
        this.loading = true
        await this.$refs.roleDialogForm.validate()
        await addRole(this.formData)
        this.$message('添加角色成功')
        this.$emit('updata')
        this.$emit('update:isshow', false)
        this.$refs.roleDialogForm.resetFields()
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style></style>

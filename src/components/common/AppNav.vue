<template>
  <div class="app-nav-wrap">
    <!-- 左侧菜单导航栏组件 -->
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router>
        <el-submenu v-for="menu in menus"
                    :index="menu.route"
                    :key="menu.route">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{menu.name}}</span>
          </template>
          <div v-if="menu.children.length > 0">
          <el-menu-item v-for="list in menu.children"
                          :index="list.route"
                          :key="list.route">{{list.name}}</el-menu-item>
          </div>
        </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        {route: '/', name: '首页', children: [{route: '/user', name: '用户管理'}, {route: '/psd', name: '密码管理'}, {route: '/salary', name: '工资管理'}, {route: '/attendence', name: '考勤管理'}, {route: '/perform', name: '绩效管理'}, {route: '/admin', name: '系统管理'}, {route: '/feedback', name: '意见反馈'}]}
      ]
    }
  },
  mounted () {
    // 刷新时以当前路由做为tab加入tabs
    if (this.$route.path !== '/' && this.$route.path.indexOf('userInfo') === -1) {
      this.$store.commit('add_tabs', {route: '/', name: '首页'})
      this.$store.commit('add_tabs', { route: this.$route.path, name: this.$route.name })
      this.$store.commit('set_active_index', this.$route.path)
    } else {
      this.$store.commit('add_tabs', {route: '/', name: '首页'})
      this.$store.commit('set_active_index', '/')
      this.$router.push('/')
    }
  },
  computed: {
    options () {
      return this.$store.state.options
    }
  }
}
</script>

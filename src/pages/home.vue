<template>
  <div class="menu">
    <div class="title">一体化平台</div>
    <div class="menu-list">
      <div class="left">
        <div class="menu-item" v-for="item in menuListLeft" :key="item.id">
          <div class="describe">{{ item.title }}</div>
          <div class="isDown" v-if="item.icon">
            <font-awesome-icon :icon="item.icon" />
          </div>
        </div>
      </div>
      <div class="right">
        <div class="menu-item" v-for="item in menuListRight" :key="item.id">
          <div class="describe" v-if="item.title">{{ item.title }}</div>
          <div class="isDown" v-if="item.icon">
            <font-awesome-icon size="lg" :icon="item.icon" />
            <a-badge
              :offset="[-5, -20]"
              :count="item.count"
              :v-if="item.count"
              :number-style="{
                backgroundColor: '#006eff',
                boxShadow: '0',
              }"
            ></a-badge>
          </div>
        </div>
        <div class="userInfo">
          <img
            src="https://i.ibb.co/FJGtc8J/user-normal.png"
            width="24"
            height="24"
            alt=""
          />
          <div class="describe">githubdasdasdddgffgfdfg</div>
          <font-awesome-icon icon="fa-solid fa-angle-down" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const menuListLeft = reactive([
      {
        id: 0,
        title: "总览",
      },
      { id: 1, title: "云产品", icon: "fa-solid fa-angle-down" },
      { id: 1, title: "|" },
      {
        id: 1,
        title: "云服务器",
      },
      {
        id: 1,
        title: "域名服务",
      },
      {
        id: 1,
        title: "网站备案",
      },
      {
        id: 1,
        icon: "fa-solid fa-ellipsis",
      },
      {
        id: 1,
        icon: "fa-solid fa-plus",
      },
    ]);
    const menuListRight = reactive([
      {
        id: 0,
        icon: "fa-solid fa-qrcode",
      },
      {
        id: 1,
        count: 16,
        icon: "fa-solid fa-envelope",
      },
      {
        id: 2,
        title: "帮助",
      },
      {
        id: 3,
        title: "工单",
        icon: "fa-solid fa-angle-down",
      },
      {
        id: 4,
        title: "费用",
        icon: "fa-solid fa-angle-down",
      },
    ]);
    return {
      menuListLeft,
      menuListRight,
    };
  },
});
</script>

<style scope>
.count {
  color: v-bind(color);
}
.menu {
  height: 64px;
  background-color: #262f3e;
  color: #c1c6c8;
  display: flex;
  justify-content: flex-start;
  width: 100vw;
  align-items: center;
  padding: 0 25px;
}
.title {
  font-size: 28px;
  line-height: 64px;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.menu-list {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.menu-item {
  margin: 0 25px;
  font-size: 15px;
  line-height: 64px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.left {
  justify-content: flex-start;
  margin: 0 25px;
  font-size: 15px;
  display: flex;
  align-items: center;
}
.right {
  justify-content: flex-end;
  margin: 0 25px;
  font-size: 15px;
  display: flex;
  align-items: center;
}
.isDown {
  margin-left: 4px;
}
.userInfo {
  display: flex;
  align-items: center;
}
.userInfo .describe {
  margin: 0 5px;
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

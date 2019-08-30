<template>
    <div :class="'b-head'+(classn?classN:'')">
      <div class="logo">
        <router-link to="/">
          <img src="../../../static/images/logo-reddit.png" alt="logo" />
        </router-link>
      </div>
    </div>
</template>
<script>
export default {
  props:['classn'],
  data() {
    return {
      classN: " posfix"
    };
  }
};
</script>
<style scoped>
.b-head {
  width: 100%;
  padding: 10px 0;
  background: #161618;
}

.posfix {
  position: fixed;
  top: 0;
  left: 0;
}

.logo {
  padding-left: 50px;
}

.logo img {
  width: 50px;
  height: 50px;
}
</style>
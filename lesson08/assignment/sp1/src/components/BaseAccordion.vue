<template>
  <div class="wrapper">
    <div class="accordion" @click="toggleItem">
      <h2 class="title">
        <slot name="title"></slot>
      </h2>
    </div>
    <div v-show="show" class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data: function() {
    return {
      show: false
    };
  },
  methods: {
    toggleItem: function() {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
.wrapper {
  margin: 0 auto;
}
.accordion {
  cursor: pointer;
  margin: 0.5rem 0 0 0;
}
.title {
  margin: 0;
  color: white;
  background-color: #a179d2;
  border-radius: 8px;
  padding: .5rem 1rem;
  text-align: center;
}

.title:hover {
  background-color: #572e8a;
}
.content {
  text-align: left;
  margin: 0 1rem;
  padding: .5rem 1rem;
  width: 94%;
  background-color: #f2f2f2;
  border-radius: 0 0 8px 8px;

}
</style>

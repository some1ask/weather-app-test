<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->

<template>
  <div class="button" :class="this.type" @click="click">
    {{ this.text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'default',
    },
  },
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped lang="scss">
.delete{
      background-color: #e74c3c;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      &:hover{
        background-color: #c0392b;
      }
      &:active{
        background-color: #d35400;
      }
}
.favorites{
      background-color: #3498db;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      &:hover{
        background-color: #2980b9;
      }
      &.added{
        background-color: #f1c40f;
        pointer-events:none;
        &:hover{
          background-color: #f39c12;
        }
        &.active{
          background-color: #e67e22;
        }
      }
    }
    .add{

    background-color: #2ecc71;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #27ae60;
    }

    &:active {
      background-color: #1d8348;
    }
    }
</style>

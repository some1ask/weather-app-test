<!-- eslint-disable max-len -->
<template>
    <div class="popup-overlay" v-if="visible">
      <div class="popup-container">

        <div class="popup-content">
          <p class="popup-text">{{ text }}</p>
          <button class="popup-close" @click="closePopup">X</button>
          <div v-if="isDeletePopup">
          <div class="popup-buttons">
            <button class="popup-button popup-button--yes" @click="yesClicked">Да</button>
            <button class="popup-button popup-button--no" @click="closePopup">Нет</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'Popup',
  props: {
    text: {
      type: String,
      default: 'Message',
      required: true,
    },
    isDeletePopup: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    closePopup() {
      this.$emit('close');
      this.visible = false;
    },
    yesClicked() {
      this.$emit('deleteItem');
      this.visible = false;
    },
  },
};
</script>

  <style lang="scss">
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .popup-container {
    width: 500px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
  }

  .popup-close {
    position: absolute;
    top: -30px;
    right: -3px;
    background-color: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color:black;

  }

  .popup-content {
    text-align: center;
    position: relative;
  }

  .popup-text {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .popup-buttons {
    display: flex;
    justify-content: center;
  }

  .popup-button {
    background-color: green;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    margin: 0 10px;
    font-size: 16px;
    cursor: pointer;
  }

  .popup-button--yes {
    background-color: green;
  }

  .popup-button--no {
    background-color: red;
  }
  </style>

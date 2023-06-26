<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="container">
        <div class="row">
          <label>Name</label>
          <input type="text" v-model="name.val" name="name" placeholder="Your Name" autocomplete="off">
          <p class="error-msg" v-if="!name.isValid">Name is Required and must be at least 2 characters long.</p>
        </div>
        <div class="row">
          <label>Email</label>
          <input type="email" v-model="email.val" name="email" placeholder="Your Email" autocomplete="off">
          <p class="error-msg" v-if="!email.isValid">Email is Required and must contain '@'.</p>
        </div>
        <div class="row">
          <label>Message</label>
          <textarea name="message" v-model="message"
            cols="30" rows="3"
            placeholder="Message">
          </textarea>
        </div>
      </div>
      <basic-button @click="submitForm">Send</basic-button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      name:{
        val: '',
        isValid: true
      },
      email: {
        val: '',
        isValid: true
      },
      message: "",
      isValid: true,
    }
  },
  emits: ["on-submit"],
  methods: {
    resetValues() {
      this.name.val = "";
      this.email.val = "";
      this.message = "";
      this.isValid = true;
    },
    validateForm() {
      this.isValid = true;
      if (this.name.val === '' || this.name.val.length <= 2) {
        this.name.isValid = false;
        this.isValid = false;
      }
      if (this.email.val === '' || !this.email.val.includes('@')) {
        this.email.isValid = false;
        this.isValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      
      if (!this.isValid) {
        return;
      }

      this.$emit('on-submit', {
        name: this.name.val,
        email: this.email.val,
        message: this.message, 
      });

      this.resetValues();
    },
  }
}
</script>

<style scoped>
.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 75%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 12px;
  resize: vertical;
}

.error-msg {
  font-size: 12px;
  color: red;
}
</style>
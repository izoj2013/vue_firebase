<template>
  <div class="form-control">
    <h1 class="title">Register</h1>
    <div class="tile is-vertical is-4">
      <b-field label="Email">
        <b-input icon="email" type="email" v-model="email"/>
      </b-field>
      <b-field label="Password">
        <b-input type="password" password-reveal v-model="password"/>
      </b-field>
      <b-field label="Confirm Password">
        <b-input type="password" password-reveal v-model="password"/>
      </b-field>
      <b-message type="is-danger" v-if="error">
        {{ error }}
      </b-message>
      <b-button class="is-primary" @click="register()">Register</b-button>
    </div>
  </div>
</template>

<script>
//import Vue from "vue";

import firebase from 'firebase/app';
import 'firebase/auth';


export default {
    data() {
        return {
            email: "",
            password: "",
            error: null
        };
    },
    methods: {
        register() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .catch(error => {
                    this.error = error.message;
                });
        }
    }
}
</script>

<style lang="scss" scoped>
  .form-control {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 6rem;
  }
</style>
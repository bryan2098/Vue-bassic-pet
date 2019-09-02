<template>
  <div class="home">
      <h1>Adopt a new best friend</h1>
      <button @click="togglePetForm" class="btn btn-primary">Add New Pet</button>
      <b-form v-if="showPetForm" @submit.prevent="handleSubmit">
        <b-form-group label="Name:" label-for="input-1">
          <b-form-input type="text" required placeholder="Enter name" v-model="formData.name"></b-form-input>
        </b-form-group>

        <b-form-group label="Your Age:" label-for="input-2">
          <b-form-input type="text"  required placeholder="Enter age" v-model="formData.age"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Food:" label-for="input-3">
          <b-form-select id="input-3" :options="['cats', 'dogs']" v-model="formData.species" required></b-form-select>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions} from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {
      showPetForm : false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit() {
      const {species, age, name} = this.formData;
      const payload = {
        species,
        pet: {
          name, age
        }
      }
      this.addPet(payload);
      console.log(this.formData);
      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  }
}
</script>

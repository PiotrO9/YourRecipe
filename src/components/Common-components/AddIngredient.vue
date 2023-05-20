<template>
  <div class="AddIngredient">
    <input type="text" placeholder="Składnik">
    <input type="number" placeholder="Ilość" min="1">
    <select>

    </select>
    <button @click="HandleIngredientRemoving">
        X
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
    props: {
        RemoveIngredient: {
            type: Function,
            required: true
        }
    },
    methods: {
        HandleIngredientRemoving() {
            this.RemoveIngredient(this.$.vnode.key)
        }
    }
})

</script>

<style lang="scss">
@import  "../../GlobalStyles/variabless.scss";

* {
    font-family: "Sora";
}

.AddIngredient {
    width: 100%;
    height: 40px;
    display: grid;
    grid-template-columns: 6fr 2fr 3fr 1fr;

    input {
        outline: none;
        border: 2px solid $Orange;
        color: black;
    }

    input[type=text] {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        font-size: 100%;
        text-align: center; 
    }

    input[type=number] {
        text-align: center;
    }

    select {
        outline: none;
        border: 2px solid $Orange;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    button {
        outline: none;
        border: none;
        background-color: $CremeBackground;
        font-size: 2rem;
        font-weight: bold;
        font-family: "Sora";
        color: red;
        cursor: pointer;
    }
}

</style>
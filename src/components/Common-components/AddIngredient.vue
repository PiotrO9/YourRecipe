<template>
    <div v-if="IngredientData" class="AddIngredient">
        <input type="text" placeholder="Składnik" v-model="IngredientData.name" @input="UpdateIngredientData">
        <input type="number" placeholder="Ilość" min="1" v-model="IngredientData.amount" @input="UpdateIngredientData">
        <select @change="UpdateIngredientData" v-model="IngredientData.unit">
            <optgroup label="Płynne">
                <option value="ml">ml</option>
                <option value="l">litr</option>
            </optgroup>
            <optgroup label="Sypkie">
                <option value="g">g</option>
                <option value="kg">kg</option>
            </optgroup>
            <optgroup label="Inne">
                <option value="szczypta">szczypta</option>
                <option value="sztuka">sztuka</option>
            </optgroup>
        </select>
        <button @click="HandleIngredientRemoving">
            X
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: ['RemoveIngredient', 'IngredientData', 'UpdateIngredient'],
    methods: {
        HandleIngredientRemoving() {
            this.RemoveIngredient(this.$.vnode.key)
        },
        UpdateIngredientData() {
            this.$props.UpdateIngredient(this.IngredientData)
        }
    }
})

</script>

<style lang="scss">
@import "../../GlobalStyles/variabless.scss";

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

        @media (max-width: $VerySmallWidth) {
            max-width: 180px;
        }

        @media (max-width: $MobileMediumWidth) {
            max-width: 120px;
        }
    }

    input[type=number] {
        text-align: center;

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
        }

        @media (max-width: $VerySmallWidth) {
            max-width: 100px;
        }

        @media (max-width: $MobileMediumWidth) {
            width: 60px;
        }
    }

    select {
        outline: none;
        border: 2px solid $Orange;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        appearance: none;
        -webkit-appearance: none;
        text-indent: 1px;
        text-overflow: '';
        padding-left: 0.6rem;

        @media (max-width: $MobileMediumWidth) {
            width: 70px;
        }
    }

    button {
        outline: none;
        border: none;
        margin-left: 4px;
        background-color: $CremeBackground;
        font-size: 2rem;
        font-weight: bold;
        font-family: "Sora";
        color: red;
        cursor: pointer;
    }
}
</style>
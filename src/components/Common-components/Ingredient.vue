<template>
    <div class="Ingredient">
        <p>{{ $props.ingredients[0] }}</p>
        <p>{{ $props.ingredients[1] }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['ingredients']
})
</script>

<style scoped lang="scss">
@import "../../GlobalStyles/variabless.scss";

.Ingredient {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1.5rem;
    margin-top: 0.6rem;

    p {
        font-size: 2rem;
        font-family: "Sora";

        &::first-letter {
            text-transform: uppercase;
        }

        @media (max-width: 1024px) {
            font-size: 1.5rem;
        }

        @media (max-width: $MobileMediumWidth) {
            font-size: 1.2rem;
        }
    }
}
</style>
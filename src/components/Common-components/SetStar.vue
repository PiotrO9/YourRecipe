<template>
    <div class="SetStar">
        <fa icon="fa-solid fa-star"
            @mouseenter="StarHover"
            @click="StarClick"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent ({
    props: ["StarHover", "StarClick"],
    methods: {
        StarHover() {
            this.$props.StarHover
        },
        StarClick() {
            this.$props.StarClick
        }
    }
})
</script>

<style scoped lang="scss">
@import "../../GlobalStyles/variabless.scss";

.SetStar {
    @include SquareSize(40px);

    svg {
        @include SquareSize(100%);

        &.gold {
            color: $Orange;
        }
    }
}

</style>
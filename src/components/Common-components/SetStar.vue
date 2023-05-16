<template>
    <div class="SetStar">
        <fa icon="fa-solid fa-star"
            @mouseenter="HandleStarHover"
            @click="HandleStarClick"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent ({
    props: {
        StarClick: {
            type: Function,
            required: true
        },
        StarHover: {
            type: Function,
            required: true
        }
    },
    methods: {
        HandleStarHover() {
            this.StarHover(1)
        },
        HandleStarClick() {
            this.StarClick(2)
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
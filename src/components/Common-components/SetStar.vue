<template>
    <div class="SetStar" >
        <fa icon="fa-solid fa-star" :class="{ selected: StarState}"
            @mouseenter="HandleStarHover"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent ({
    props: {
        StarHover: {
            type: Function,
            required: true
        },
        StarState: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        HandleStarHover() {
            this.StarHover(this.$.vnode.key)
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
        cursor: pointer;
        
        &.selected {
            color: $Orange;
        }
    }
}

</style>
<template>
  <div class="FavuoriteIcon">
    <button @click="ChangeIconState">
        <fa v-if="IconState" icon="fa-solid fa-heart" />
        <fa v-else icon="fa-regular fa-heart" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            IconState: false
        }
    },
    methods: {
        ChangeIconState() {
            this.IconState = !this.IconState

            const ClickedButton: HTMLElement = this.$el.querySelector("button")
            ClickedButton.classList.add("favourite")

            setTimeout(() => {
                ClickedButton.classList.remove("favourite")
            }, 1000);
        }
    }
})
</script>

<style scoped lang="scss">
.FavuoriteIcon {
    position: absolute;
    top: 5%;
    left: 5%;

    button {
        background: transparent;
        border: none;
        outline: none;
        color: red;
        cursor: pointer;

        &.favourite{
            animation: Active-favourite 1s forwards;
        }
   
        svg {
            width: 40px;
            height: 40px;
        }
    }
}

@keyframes Active-favourite {
    50% {
        transform: scale(150%);
    }
    100% {
        transform: scale(100%);
    }
}
</style>
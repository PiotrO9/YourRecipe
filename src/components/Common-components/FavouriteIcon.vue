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

            if(this.IconState) {
                ClickedButton.classList.add("Active-favourite")
            }
            else {
                ClickedButton.classList.add("Deactive-favourite")
            }


            setTimeout(() => {
                ClickedButton.classList.remove("Active-favourite")
                ClickedButton.classList.remove("Deactive-favourite")
            }, 1000);
        }
    }
})
</script>

<style scoped lang="scss">
@import "../../GlobalStyles/variabless.scss";
.FavuoriteIcon {
    position: absolute;
    top: 5%;
    left: 5%;

    button {
        background: transparent;
        border: none;
        outline: none;
        color: $Orange;
        cursor: pointer;

        &.Active-favourite{
            animation: Active-favourite 1s forwards;
        }

        &.Deactive-favourite {
            animation: Deactive-favourite 0.5s forwards;
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

@keyframes Deactive-favourite {
    0% {
        transform: scale(75%);
    }
    30% {
        transform: rotate(-30deg);
    }
    65% {
        transform: rotate(30deg);
    }
    100% {
        transform: scale(100%);
    }
}
</style>
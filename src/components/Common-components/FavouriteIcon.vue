<template>
    <div class="FavuoriteIcon">
        <button @click="ChangeIconState">
            <fa v-if="IconState" icon="fa-solid fa-heart" />
            <fa v-else icon="fa-regular fa-heart" />
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useFavourites } from '@/stores/favourites';

export default defineComponent({
    props: ['id'],
    data() {
        return {
            IconState: false,
            RecipeId: this.$props.id
        }
    },
    computed: {
        Favourites() {
            return useFavourites()
        }
    },
    mounted() {
        if (this.Favourites.getFavourites.includes(this.$props.id)) {
            this.IconState = true
        }
    },
    methods: {
        ChangeIconState() {
            this.IconState = !this.IconState

            const ClickedButton: HTMLElement = this.$el.querySelector("button")

            if (this.IconState) {
                ClickedButton.classList.add("Active-favourite")
                this.Favourites.setFavourites(this.RecipeId)
            }
            else {
                ClickedButton.classList.add("Deactive-favourite")
                this.Favourites.removeFromFavourites(this.RecipeId)
            }

            setTimeout(() => {
                ClickedButton.classList.remove("Active-favourite")
                ClickedButton.classList.remove("Deactive-favourite")
            }, 1000);
        }
    },
    watch: {
        id() {
            if (this.Favourites.getFavourites.includes(this.$props.id)) {
                this.IconState = true
            }
            else {
                this.IconState = false
            }
        }
    }
})
</script>

<style scoped lang="scss">
@import "../../GlobalStyles/variabless.scss";

.FavuoriteIcon {
    position: absolute;
    top: 6%;
    left: 7%;

    button {
        background: transparent;
        border: none;
        outline: none;
        color: $Orange;
        cursor: pointer;

        &.Active-favourite {
            animation: Active-favourite 1s forwards;
        }

        &.Deactive-favourite {
            animation: Deactive-favourite 0.5s forwards;
        }

        svg {
            @include SquareSize(40px);
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
<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const open = ref(false)
const modal = ref(null)

onClickOutside(modal, () => (open.value = false))

defineProps({
  title: {
    type: String,
    required: true
  },
  dateOfCreation: {
    type: String,
    required: true
  },
  techs: {
    type: String,
    required: true
  }
})
</script>

<template>
    <button @click="open = true" class="btn btn-color-2 project-btn">Presentation</button>
    <Teleport to="#modal">
        <Transition name="fade">
            <div class="modal-bg" v-if="open">
                <div class="modal" ref="modal">
                    <button @click="open = false" class="btn btn-color-2 project-btn modal-btn"> X </button>
                    <div class="modal-text-container">
                        <h1 class="title">{{ title }}</h1>
                        <p class="section__text__p1">Created: {{ dateOfCreation }}</p>
                    </div>
                    <div class="modal-text-container">
                        <h2>Techs used</h2>
                        <div>{{ techs }}</div>
                    </div>
                    <button class="btn btn-color-2 modal-btn-2" onclick="window.open()">More Infos</button>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style>

.modal-bg {
    z-index: 2;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.modal {
    position: relative;
    background: white;
    padding: 75px 75px;
    height: 25vh;
    width: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 3rem;
    border-radius: 1rem;
    box-shadow: 0px 10px 5px 2px rgba(0, 0, 0, 0.3);
}

.modal-btn {
    position: absolute;
    top: 10px;
    right: 10px;
}

.modal-btn:hover {
    background: rgb(197, 10, 10);
}

.fade-enter-active, .fade-leave-active{
    transition: all 0.3s ease;
}

.fade-enter-from, .fade-leave-to{
    opacity: 0;
    transform: scale(1.1);
}

.modal-text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.modal-btn-2 {
    padding: 10px;
}
</style>
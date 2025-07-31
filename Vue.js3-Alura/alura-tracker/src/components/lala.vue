<template>
  <div class="box">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa."
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
        />
      </div>
      <div class="column">
        <section>
          <strong>00:00:00</strong>
        </section>
        <button class="button" @click="iniciar">
          <span class="icon">
            <i class="fas fa-play"></i>
            <span>play</span>
          </span>
        </button>
        <button class="button" @click="finalizar">
          <span class="icon">
            <i class="fas fa-stop"></i>
            <span>stop</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormularioView",
  methods: {
    iniciar() {
      console.log("iniciando");
    },
    finalizar() {
      console.log("finalizando");
    },
  },
});
</script>

<template>
  <main class="columns in-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateralView />
    </div>
    <div class="column is-three-quarter">
      <FormularioView />
      <div class="lista">
        <Tarefa />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateralView from "./components/BarraLateralView.vue";
import FormularioView from "./components/FormularioView.vue";
import Tarefa from "./components/Tarefa.vue";

export default defineComponent({
  name: "App",
  components: {
    BarraLateralView,
    FormularioView,
    Tarefa,
  },
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
</style>

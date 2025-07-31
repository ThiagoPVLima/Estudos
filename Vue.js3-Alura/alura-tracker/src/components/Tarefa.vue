<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                Descrição da tarefa</div>
            <div class="column">
                <CronometroView tempoEmSegundos="15" />
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from "vue";
import CronometroView from "./CronometroView.vue";

export default defineComponent({
    name: "TarefaItem",
    components: {
        CronometroView,
    },
});
</script>
<style scoped>
.box {
    background: #faf0ca;
    color: black;
}
</style>

<script setup>
    // import { defineEmits } from "vue"
    const { question } = defineProps(["question"])

    const emit = defineEmits( ["selectedOption"] )

    const emitSelectedOption = ( isCorrect ) => {
        emit ( "selectedOption", isCorrect)
    }
</script>

<template>
    <div class="question-container" >
        <h1 class="question">
            {{ question.text }}
        </h1>
    </div>
    <div class="options-container">
        <div 
            v-for="item in question.options" 
            :key="item.id" 
            class="option"
            @click="emitSelectedOption( item.isCorrect )"
        >
            <p class="option-label"> {{ item.label }} </p>
            <div class="option-value">
                <p> {{ item.text }} </p>
            </div>    
        </div>


        
    </div>
</template>

<style scoped>
    .question-container {
        margin-top: 20px;
    }

    .question {
        font-size: 40px;
        margin-bottom: 20px;
    }

    .option {
        display: flex;
        margin-bottom: 20px;
        cursor: pointer;
    }

    .option-label {
        background-color: bisque;
        width: 50px;
        height: 50px;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .option-value {
        background-color: rgb(244,239,239);
        width: 100%;
        font-size: 30px;
        padding: 0 20px
    }
</style>
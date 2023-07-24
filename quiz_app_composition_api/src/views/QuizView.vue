<script setup>
  import Question from "@/components/Questions.vue"
  import QuizHeader from "@/components/QuizHeader.vue"
  import Result from "@/components/Result.vue"
  import { useRoute } from "vue-router"
  import { ref, computed } from "vue"
  import quizes from "@/data/quizes.json"

  // get quiz id
  const route = useRoute()
  const quizID = parseInt( route.params.id )

  //
  const currentQuestionIndex = ref(0)
  const numberOfCorrectAnswers = ref(0)

  // initially show resut is false
  const showResult = ref( false )

  // get associate quiz
  const quiz = quizes.find( q => q.id === quizID )

  // got selected emits from question component
  const onOptionSelected = ( isCorrect ) => {
    if ( isCorrect )
    {
      numberOfCorrectAnswers.value++
    }

    if ( quiz.questions.length -1 === currentQuestionIndex.value )
    {
      showResult.value = true
      console.log (" onOption Slected from quizv ", showResult.value)
    }

    currentQuestionIndex.value++
  }

  // change current question number
  const questionStatus = computed ( () => 
    `${ currentQuestionIndex.value } / ${ quiz.questions.length }` )

  // value to show bar percentage
  const barPercentage = computed ( () => 
    `${currentQuestionIndex.value / quiz.questions.length * 100}%` )
</script>

<template>
  <div>
    <QuizHeader 
      :questionStatus="questionStatus"
      :barPercentage="barPercentage"
    />

    <!-- send first index of question  -->
    <Question 
      v-if="!showResult"
      :question = "quiz.questions[currentQuestionIndex]"
      @selectedOption="onOptionSelected"
    />

    <Result
      v-else 
      :numberOfCorrectAnswers="numberOfCorrectAnswers"
      :quizQuestionLength="quiz.questions.length"
     />
  </div>
</template>
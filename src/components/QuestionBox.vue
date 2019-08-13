<template>
  <div class="question-box-container">
    <b-jumbotron>
      <template slot="lead">
        {{ question.fields["Question"] }}
      </template>

      <hr class="my-4"/>

      <p>
        List of answers
      </p>

      <b-button variant="primary">Submit</b-button>
      <b-button @click="next" variant="success">Next</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  props: {
    question: Object,
    next: Function
  }
}
</script>



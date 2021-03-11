<template>
  <section class="about">
    <div id="aboutContainer" class="container">

          <div class="accordion" role="tablist">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-1 variant="info"><h3>{{accordionprop.title}}</h3></b-button>
              </b-card-header>
              <b-collapse id="accordion-1" accordion="accordion" visible role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    <div v-html='accordionprop.image'>
                      <!-- {{accordionprop.image}} -->
                    </div>
                    <!-- <img src="../assets/img/alex-mertz-Hf0VFk1kCUQ-unsplash.jpg" class="img-fluid" alt="Responsive image"> -->
                    <p>{{accordionprop.copy}}</p>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>

  </section>
</template>

<script>

export default {
  name: 'accordion',//name of file, component, html tag
  props: {
    //prop is an object. it is attached to the array item in jumbotronArray with a v-bind.
    accordionprop: Object,
    //my prop name : data type
  }
}
</script>
<style scoped>
</style>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__container__logo">
        <p>logo</p>
      </div>
      <h1 class="header__container__brandTitle">{{ brandTitle }}</h1>
    </div>
  </header>
</template>

<script>

export default {
  name: 'bannerTop',//name of file, component, html tag
  props: {
    brandTitle: String
    //my prop name : data type
    // can also list names
    // try an array
  }
}
</script>

<style scoped>
  .header {
    padding: 2rem;
    border: 2px solid magenta;
    margin: 0;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

  }
  .header__container {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }


  .header__container__logo {
    height: 8rem;
    width: 8rem;
    padding: 3rem;
    border-radius: 50%;
    color: white;
    background-color: purple;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-right: 1rem;
  }

  p {
    margin: auto;
  }

  h1 {
    margin: auto;
    font-family: cooper-black-std, Helvetica, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 3rem;
  }

  @media only screen and (max-width: 400px) {
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .header__container {
    flex-direction: column;
  }

  .header__container__logo {
      width: 7rem;
      height: 7rem;
    }
  }
</style>

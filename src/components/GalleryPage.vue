<template>
  <div class="main-wrapper">
    <div>
      <h1>Qalareya</h1>
      <br />
      <hr />
    </div>
    <p>
      Bacon ipsum dolor amet cupim buffalo shoulder corned beef. Ball tip t-bone
      brisket salami pork chopken tri-tip venison sirloin filet mignon
      landjaeger. Andouille t-bone chickensa salami, burgdoggen porchetta
      meatball bacon strip
    </p>
    <div class="img-wrapper">
      <img src="../assets/imgs/1.jpg" alt="" />
      <img src="../assets/imgs/2.jpg" alt="" />
      <img src="../assets/imgs/3.jpg" alt="" />
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.main-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.img-wrapper {
  width: 80%;
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
}
.img-wrapper img {
  width: 40%;
  /* object-fit: contain; */
  box-shadow: 0px 0px 14px #000;
}
</style>
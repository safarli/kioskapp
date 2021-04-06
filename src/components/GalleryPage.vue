<template>
  <div class="main-wrapper">
    <h1>Qalareya Sehifesi</h1>
    <p>
      Bacon ipsum dolor amet cupim buffalo shoulder corned beef. Ball tip t-bone
      brisket salami pork chopken tri-tip venison sirloin filet mignon landjaeger.
      Andouille t-bone chickensa salami, burgdoggen porchetta meatball bacon strip
    </p>
    <div class="img-wrapper">
      <img src="../assets/imgs/1.jpg" alt="" />
      <img src="../assets/imgs/2.jpg" alt="" />
      <img src="../assets/imgs/1.jpg" alt="" />
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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 200px 1fr;
}
.img-wrapper {
  justify-self: center;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 10px;
}
.img-wrapper img {
  width: 400px;
  object-fit: contain;
}
</style>
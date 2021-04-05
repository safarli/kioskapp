
<template>
    <div class="grid-container">
      <div id="header">
        <img class="logo" src="./assets/texlogo.png" />
        <h1>Texnokom MMC</h1>
        <p>E-Mail: info@texnokom.az</p>
        <p>Tarix: {{ date }}</p>
      </div>
      <div class="nav-wrapper">
        <router-link to="/">ANA SƏHİFƏ</router-link>
        <router-link to="/about">HAQQIMIZDA</router-link>
        <router-link to="/contact">ƏLAQƏ</router-link>
        <router-link to="/products">MƏHSULLAR</router-link>
        <router-link to="/gallery">QALAREYA</router-link>
      </div>
      <div class="view-wrapper">
        <router-view></router-view>
      </div>
    </div>
</template>


<script>
export default {
  data: function () {
    return {
      date: new Date().toLocaleString("az", { timeZone: "Asia/Baku" }),
    };
  },
  created: function () {
    return setInterval(
      () =>
        (this.date = new Date().toLocaleString("az", {
          timeZone: "Asia/Baku",
        })),
      1000
    );
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  width: 100vw;
  height: 100vh;
  background-color: bisque;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
}
#app{
  height: 100%;
}
.grid-container {
  background-color: rgb(51, 117, 84);
  width: 100vw;
  height: 100%;
  /* min-height: 100vh; */
  display: grid;
  gap: 10px;
  grid-template-columns: 0.2fr 0.8fr;
  grid-template-rows: 3fr 7fr;
  grid-template-areas:
    "logo content"
    "nav content";
}

.grid-container h1 {
  text-align: center;
  align-self: center;
}
#header {
  padding: 2px 8px;
  background-color: #222;
  justify-self: stretch;
  align-self: stretch;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
}

#header h1 {
  font-size: 2.2rem;
  color: rgb(106, 216, 106);
}

#header p {
  color: #eee;
}

#header .logo {
  width: 135px;
  object-fit: contain;
  /* object-position: 10px -10px; */
}

.nav-wrapper {
  grid-area: nav;
  background-color: #222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: stretch;
  align-self: stretch;
}

.nav-wrapper a {
  color: #ddd;
  width: 70%;
  margin: 5px 0px;
  padding: 12px 16px;
  align-self: center;
  text-align: center;
  font-size: 1.4rem;
  text-decoration: none;
  border-bottom: 2px solid rgb(0, 128, 85);
  /* border-right: 3px solid rgb(0, 128, 85); */
  /* border-left:  3px solid rgb(0, 128, 85); */
}
.nav-wrapper a:link,
a:visited {
  background-color: #111;
  color: #ddd;
}
.nav-wrapper a:hover,
a:active {
  color: #bbb;
}

.view-wrapper {
  color: #ccc;
  grid-area: content;
  padding: 8px;
  background-color: #222;
  margin: 10px 10px 10px 0px;
}
.view-wrapper h1 {
  color: #eee;
}

h1 {
  color: hotpink;
}
</style>
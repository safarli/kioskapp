
<template>
    <div class="grid-container">
      <div id="header">
        <img class="logo" src="./assets/texlogo.png" />
        <h1>Texnokom MMC</h1>
        <p>E-Mail: info@texnokom.az</p>
        <p>Tarix: {{ date }}</p>
      </div>
      <div class="nav-wrapper">
        <router-link to="/">Ana Səhifə</router-link>
        <router-link to="/about">Haqqimizda</router-link>
        <router-link to="/contact">Xidmetler</router-link>
        <router-link to="/products">Mehsullar</router-link>
        <router-link to="/gallery">Mehsullar</router-link>
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
body {
  background-color: bisque;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
}
.grid-container {
  background-color: rgb(54, 150, 103);
  width: 100vw;
  height: 100vh;
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
  background-color: #000;
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
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: stretch;
  align-self: stretch;
}

.nav-wrapper a {
  color: #ddd;
  width: 65%;
  margin: 5px 0px;
  padding: 6px 16px;
  align-self: center;
  text-align: center;
  font-size: 1.8rem;
  text-decoration: none;
  border: 2px solid rgb(80, 218, 133);
  border-radius: 8px;
}
.nav-wrapper a:link,
a:visited {
  color: #ddd;
  background-color: #000;
}
.nav-wrapper a:hover,
a:active {
  color: mediumseagreen;
}

.view-wrapper {
  grid-area: content;
}

h1 {
  color: hotpink;
}
</style>
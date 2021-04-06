<template>
  <h1>Partnyorlar</h1>
  <br />
  <hr />
  <br />
  <p></p>
  <ul >
    <li v-for="partner in partners_list[0]" :key="partner">{{ partner + ')' }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      partners: `Babək plaza (Parking sistemi) Sevinc MTK (Parking sistemi) AMK Yasamal MTK
    (Parking sistemi) Milla süd zavodu (Keçidə nəzarət sistemi) Azərbaycan
    Avropa Məktəbi (Keçidə nəzarət sistemi) Heydər Əliyev Mərkəzi (Parking
    sistemi) Qartal Trenajor – Əhmədli (Fitness proqram sistemi) Azərbaycan
    Müəllimlər İnstitutu (Keçidə Nəzarət Sistemi) Fit House – Gəncə (Fitness
    proqram sistemi) Baku Plates Center – Gənclik (Fitness proqram sistemi)
    Xətai Yaşayış Kompleksi (Keçidə nəzarət sistemi) Modern Fitness – Biləcəri
    (Fitness proqram sistemi) Zeytun Apteklərin ambarı ( Yeməkxana sistemi) Ağsu
    İdman Kompleksi (Keçidə nəzarət sistemi) Azenco Tikinti şirkətinin Məkan MM
    ofisi (Keçidə nəzarət sistemi) Esthetic Spa (Müştərilərin qeydiyyatı,
    rezervi, avtomatik sms send sistemi) Binə Atçılıq Mərkəzi (Keçidə nəzarət
    sistemi) Bravo Marketlər (Uşaq əyləncə mərkəzinə giriş sistemi) Tarqoviy
    center (Parking sistemi) Under Ground GYM-Azadlıq (Fitness proqram sistemi)
    Auto Motors-Nərimanov (Parking sistemi) Azərbaycan Respublikasi Daxili İşlər
    Nazirliyinin Daxili Qoşunlar Baş İdarəsi (Hərbi Poliqon Atış Sistemlərinin
    Quraşdırılması) Azərbaycan Respublikası Sərhəd Qoşunları (Hərbi Poliqon Atış
    Sistemlərinin Quraşdırılması) Müdafiə Sənaye Nazirliyi (Keçidə nəzarət
    sistemi)`,
    partners_list: [],
    };
  },
  methods: {},
  created() {
    this.partners_list.push(this.partners.split(') '))
    console.log(this.partners_list[0][3]);
  },
};
</script>

<style scoped>
  ul {
    list-style-position: inside;
  }
</style>
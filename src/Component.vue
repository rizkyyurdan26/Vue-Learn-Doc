<script setup>
import AFundamentalComp from "./components/AFundamentalComp.vue";
import BNestedComponent from "./components/BNestedComponent.vue";
import CBlogCart from "./components/CBlogCart.vue";
import CProductCart from "./components/CProductCart.vue";
import DPropsAdv from "./components/DPropsAdv.vue";
import EEmitParent from "./components/EEmitParent.vue";

const user = [
  {
    id: 1,
    nama: "Rizky",
    email: "rizky@mail.com",
    kota: "Pekanbaru",
    status: "Online",
    umur: 25,
  },
  { id: 2, nama: "Andi", email: "andi@mail.com", umur: 22 },
  { id: 3, nama: "Budi", email: "budi@mail.com", kota: "Jakarta" },
];
</script>

<template>
  <h1>Ini Untuk Belajar Komponen + Props</h1>

  <!-- <AFundamentalComp/> -->
  <!-- <BNestedComponent/> -->
  <!-- <CProductCart nama="Laptop Asus" :harga="1000"/>
 <CProductCart nama="Mouse" :harga="50" /> -->

  <!-- <CBlogCart judul="Blog 1" deskripsi="Lorem Ipsum dolor color" author="Budi Santoso"/> -->

  <!-- ADVANCE PROPS -->
  <!-- <div>
    <h1>Biodata</h1>
    <ol>
        <li v-for="data in user" :key="data.id">
            <DPropsAdv
              :nama="data.nama"
              :email="data.email"
              :kota="data.kota"
              :status="data.status"
              :umur="data.umur"
            />
        </li>
    </ol>
    <p>Banyak data: {{ user.length }}</p>
  </div> -->

  <!-- EMIT -->
   <EEmitParent/>
</template>

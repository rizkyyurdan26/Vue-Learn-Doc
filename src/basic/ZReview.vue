<script setup>
import { ref } from "vue";

const namaProduk = ref("");
const hargaProduct = ref(0);

const productList = ref([]);

function addProduct() {
  if (namaProduk.value.trim() != "" && hargaProduct.value > 0) {
    productList.value.push({
      id: Date.now(),
      nama: namaProduk.value,
      harga: hargaProduct.value,
    });

    namaProduk.value = "";
    hargaProduct.value = 0;
  } else {
    alert("Tolong Isi Semua Field Input");
  }
}

function delProduct(id) {
    const konfirmasi = confirm('Apakah Anda Yakin?')
    const index = productList.value.findIndex(t => t.id === id)

    if (konfirmasi) {
        productList.value.splice(index, 1)
    }
}

function rmvProduct(){
    const conf = confirm('Hapus Semua Data?')

    if (conf){
        productList.value = []
    }
}
</script>

<template>
  <div>
    <h1>Product Manager</h1>

    <input type="text" placeholder="Nama Product" v-model="namaProduk" />
    <br /><br />
    <input type="number" placeholder="Harga Product" v-model="hargaProduct" />
    <br /><br />
    <button @click="addProduct">Tambah Product</button>
  </div>

  <div>
    <h2>Daftar Produk</h2>
    <p v-if="productList.length === 0">Belum ada Produk</p>

    <ol v-else>
      <li v-for="(prod, index) in productList" :key="prod.id">
        {{ prod.nama }} - ${{ prod.harga }}

        <button @click="delProduct(prod.id)">Hapus</button>
      </li>
      <br>
      <p>Total Product: {{ productList.length }}</p>
      <button @click="rmvProduct">Remove All Data</button>
    </ol>
  </div>
</template>

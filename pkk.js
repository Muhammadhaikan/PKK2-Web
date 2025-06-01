var data = document.getElementById("isiankeranjang")


function pemesanan() {
  var isi = document.getElementById('isian-keranjang')
  var isi2 = document.getElementById("h3keranjang")
  var jumlah = document.getElementById('jumlah').value
  var harga = 12000
  total = jumlah * harga
  isi.innerHTML = `
    <h1 style="text-align: center;">Keranjang</h1>
  <h3 style = "padding:0;">Pembelian  :${jumlah}
  <h3 style = "padding:0;">Penghitungan :${jumlah} x ${harga.toLocaleString()}
  <h3 style = "padding:0;">Duit yang harus disiapkan :${total.toLocaleString()}
   <button><a href="https://wa.me/6281280866824?text=Halo%20Min%20saya%20Memesan%20${jumlah} Ricebowl" style = "text-decoration:none; height:40px; width:80px;">Pesan Via WhatsApp!</a></button>`   
} 

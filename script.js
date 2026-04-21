const namaCafe = "Menu Cafe Study With You";

function pesanMenu(namaMenu, harga, idQty, idTipe) {
    let jumlah = document.getElementById(idQty).value;
    let tipe = document.getElementById(idTipe).value;
    
    let totalHarga = harga * jumlah;

    let hasilTeks = `
        <p><strong>Terima kasih telah memesan di ${namaCafe}!</strong></p>
        <p>Menu: ${namaMenu}</p>
        <p>Jumlah: ${jumlah} pcs</p>
        <p>Tipe: ${tipe}</p>
        <p>Total Bayar: <strong>Rp ${totalHarga.toLocaleString()}</strong></p>
        <hr>
        <p style="color: #FF1493; font-weight: bold;">Pesanan Anda sedang disiapkan!</p>
    `;

    document.getElementById("display-pesanan").innerHTML = hasilTeks;
}
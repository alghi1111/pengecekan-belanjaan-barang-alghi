const stokbarang = {
  sapu : 100,
  pel : 15,
  tongsampah :10,

};

export function laku(sisabarang,jumlah){
    if(!stokbarang.hasOwnProperty(sisabarang)){
        throw new Error(` stok barang habis.`);

    }
   
    if (stokbarang [sisabarang]< jumlah ){
        throw new Error (`stok ${sisabarang} tdk mencukupi sisa stok: ${stokbarang[sisabarang]}`);
    }
    stokbarang [sisabarang] -= jumlah ;
    return `berhasil membeli ${jumlah} ${sisabarang} sisa stok: ${stokbarang[sisabarang]}`
}

    
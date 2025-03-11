const inputAngka = document.getElementById('angka');
const tombolKonversi = document.getElementById('konversi');
const paragrafHasil = document.getElementById('hasil');

const angkaKeKata = (angka) => {
    const satuan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
    const belasan = ['sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
    const puluhan = ['', '', 'dua puluh', 'tiga puluh', 'empat puluh', 'lima puluh', 'enam puluh', 'tujuh puluh', 'delapan puluh', 'sembilan puluh'];
    const ratusan = ['', 'seratus', 'dua ratus', 'tiga ratus', 'empat ratus', 'lima ratus', 'enam ratus', 'tujuh ratus', 'delapan ratus', 'sembilan ratus'];
    const ribuan = ['', 'ribu', 'juta', 'milyar'];

    if (angka < 10) {
        return satuan[angka];
    } else if (angka < 20) {
        return belasan[angka - 10];
    } else if (angka < 100) {
        return puluhan[Math.floor(angka / 10)] + (angka % 10 !== 0 ? ' ' + satuan[angka % 10] : '');
    } else if (angka < 1000) {
        return ratusan[Math.floor(angka / 100)] + ' ratus' + (angka % 100 !== 0 ? ' ' + angkaKeKata(angka % 100) : '');
    } else if (angka < 1000000) {
        return angkaKeKata(Math.floor(angka / 1000)) + ' ribu' + (angka % 1000 !== 0 ? ' ' + angkaKeKata(angka % 1000) : '');
    } else if (angka < 1000000000) {
        return angkaKeKata(Math.floor(angka / 1000000)) + ' juta' + (angka % 1000000 !== 0 ? ' ' + angkaKeKata(angka % 1000000) : '');
    } else {
        return angkaKeKata(Math.floor(angka / 1000000000)) + ' milyar' + (angka % 1000000000 !== 0 ? ' ' + angkaKeKata(angka % 1000000000) : '');
    }
};


const rupiahKeKata = (angka) => {
    const integer = Math.floor(angka);
    const decimal = Math.round((angka - integer) * 100);
    if (decimal) {
        return (angkaKeKata(integer) + ' Rupiah ' + angkaKeKata(decimal) + ' Sen').replace(/\b\w/g, l => l.toUpperCase());
    } else {
        return (angkaKeKata(angka) + ' Rupiah').replace(/\b\w/g, l => l.toUpperCase());
    }
};

const formatRupiah = (angka) => {
    return 'Rp' + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

tombolKonversi.addEventListener('click', () => {
    const angka = parseFloat(inputAngka.value);
    if (!isNaN(angka)) {
        paragrafHasil.textContent = formatRupiah(angka) + ' ' + rupiahKeKata(angka);
    } else {
        paragrafHasil.textContent = 'Input tidak valid';
    }
});

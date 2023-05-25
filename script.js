const Panjang = document.getElementById('panjang')
const Lebar = document.getElementById('lebar')
const Hitung = document.getElementById('hitung')
const output = document.getElementById('output')

hitung.addEventListener('click', function(){
        let p = panjang.value
        let l = lebar.value
        let L = p*l
    output.innerHTML = `Luas persegi panjang dari panjang ${p} cm dan sisi ${l} cm adalah ${L} cm2`      
}

)
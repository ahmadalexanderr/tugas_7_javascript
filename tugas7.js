var tinggiBadan = [
    ["John", 170], ["Georgie", 169], ["Paulina", 159], ["Abdul Hamid", 162], ["Elizabeth", 172],
    ["Wilhem", 140], ["Tsar Nicholas", 167.7], ["Llyod", 144.3], ["Napoleon", 160], ["Winston", 177.5]
]

const perulangan1 = () => {
    for (let i = 0; i <= tinggiBadan.length; i++){
        console.log(tinggiBadan[i]);
    }
}

const perulangan2 = () => {
    for (let x of tinggiBadan){
        console.log(x);
    }
}

perulangan1();
perulangan2();

// analisis: perulangan1() memerlukan index dalam pencetakkan
//perulangan2() dengan menggunakan for of tidak memerlukan index saat mencetak
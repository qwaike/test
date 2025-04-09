const test = document.getElementById("test");
const metin = "seni benden baska siken var mi?";
yeniMetin = metin.split("");

const intID = setInterval(() => {
  
    let harf = yeniMetin.shift();
    if(harf==undefined) {
        clearInterval(intID);
    }else{
        test.textContent += harf;
    }
    
}, 200);

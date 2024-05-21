console.log("Sepete eklendi")

function sepeteEkle() {
  alert("Ürün sepete eklendi!");
  console.log("Sepete eklendi");
}

function gizle() {
  document.getElementById("gizlegoster").style.display = "none"
}

function goster() {
  document.getElementById("gizlegoster").style.display = "block"
}


function hesapoluştur() {
  alert("Hesabınız Oluşturuldu");
  console.log("Hesabınız Oluşturuldu");
}


let alisverisSepeti = {};

function urunEkle() {
    let urunAdi = document.getElementById("urun-ad").value;
    let urunAdet = parseInt(document.getElementById("urun-adet").value);

    if (urunAdi && urunAdet) {
        if (alisverisSepeti[urunAdi]) {
            alisverisSepeti[urunAdi] += urunAdet;
        } else {
            alisverisSepeti[urunAdi] = urunAdet;
        }

        guncelleSepet();
    } else {
        alert("Lütfen ürün adı ve adet girin.");
    }
}

function urunSil() {
    let urunAdi = document.getElementById("urun-ad").value;
    let urunAdet = parseInt(document.getElementById("urun-adet").value);

    if (urunAdi && urunAdet) {
        if (alisverisSepeti[urunAdi]) {
            if (alisverisSepeti[urunAdi] <= urunAdet) {
                delete alisverisSepeti[urunAdi];
            } else {
                alisverisSepeti[urunAdi] -= urunAdet;
            }

            guncelleSepet();
        } else {
            alert("Sepette " + urunAdi + " bulunamadı.");
        }
    } else {
        alert("Lütfen ürün adı ve adet girin.");
    }
}

function guncelleSepet() {
    let urunlerListesi = document.getElementById("urunler-listesi");
    urunlerListesi.innerHTML = "";


    let toplamFiyat = 0;




    for (let urunAdi in alisverisSepeti) {
        let listItem = document.createElement("li");
        listItem.textContent = urunAdi + ": " + alisverisSepeti[urunAdi] + " adet ";
        urunlerListesi.appendChild(listItem);

    }

}
    

    function acceptAllCookies() {
        
        document.cookie = "cookies_accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
       
        alert("Tüm çerezler kabul edildi.");
        document.getElementById("cookie-banner").style.display = "none";
      }
      
      document.getElementById("accept-cookies-btn").addEventListener("click", acceptAllCookies);
    
    














  
  
  
  
  
  
  
  
  
  
  
  
  
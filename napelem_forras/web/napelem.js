function panelek(db){
    const panelek=document.getElementById('panelek');
    panelek.innerHTML=""; 
    for (i = 0; i < db; i++) {
        panelek.innerHTML += "<img src='napelem_ikon.png'>"; 
    }
    panelek.innerHTML += "<br>("+db+" db)";
    document.getElementById('osszteljesitmeny').value = db * 275;
    document.getElementById('tetofelulet').value = db * 3.5
}

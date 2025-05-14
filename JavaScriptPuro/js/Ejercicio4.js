function numeromedio(){
    let n1 = parseInt(document.getElementById("numero1").value);
    let n2 = parseInt(document.getElementById("numero2").value);
    let n3 = parseInt(document.getElementById("numero3").value);
   
    if (n1&&n2&&n3) {
        let nummedia=(n1+n2+n3)/3
        document.getElementById("medio").innerHTML =
          "la media es:" + nummedia;
       
      } else {
        alert("campos vacios.");
      }
}



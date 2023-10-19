function vocales(){
	voc="àèìòùâêîôû";
	letra="?";
	for(i=1;i<ap.length;i++){
		letra=ap.charAt(i);
		if (voc.includes(letra)) return(letra);
	}
	return(letra);
}

function ejecuta() {
    var nom = document.UNIAT.nom.value;
    var ap = document.UNIAT.ap.value;
    var am = document.UNIAT.am.value;

    if (nom.length == 0) {
        document.UNIAT.nom.style.background = "red";
        alert("Error, se debe indicar el Nombre ...");
        return;
    } else {
        document.UNIAT.nom.style.background = "#c09ceb";
    }


    if (ap.length == 0) {
        document.UNIAT.ap.style.background = "red";
        alert("Error, se debe indicar el Apellido paterno ...");
        return; 
    } else {
        document.UNIAT.nom.style.background = "#c09ceb";
    }

    if (am.length == 0) {
        document.UNIAT.am.style.background = "red";
        alert("Error, se debe indicar el Apellido materno ...");
        return;
    } else {
        document.UNIAT.nom.style.background = "#c09ceb";
    }

    nom = nom.toUpperCase();
    ap = ap.toUpperCase();
    am = am.toUpperCase();
    
    var correo = nom.charAt(0).toLowerCase() + ap.toLowerCase() + am.charAt(0).toLowerCase() + "@uniat.edu.mx";
    correo = correo.replaceAll("ñ", "n");
    correo = correo.replaceAll(" ", "_");
    correo = correo.replaceAll("á", "a");
    correo = correo.replaceAll("é", "e");
    correo = correo.replaceAll("í", "i");
    correo = correo.replaceAll("ó", "o");
    correo = correo.replaceAll("ú", "u");
    
    document.UNIAT.salida.value = correo;
}
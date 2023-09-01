
//---------------------------------------------------------------------------
// code for Grams - Kilograms
function gTokg(){
    let fieldG1 = Number(document.getElementById("num1").value);
    let resultKg = (fieldG1 / 1000);
    let fieldKg1 = document.getElementById("num2");
    fieldKg1.value = resultKg;
}
// code for Kilograms - Grams
function kgTog(){
    let fieldKg2 = Number(document.getElementById("num2").value);
    let resultG = (fieldKg2*1000);
    let fieldG2 = document.getElementById("num1");
    fieldG2.value = resultG;
}//------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
// code for Centimeters - Kilometers
function cTom(){
    let fieldC = Number(document.getElementById("num3").value)
    let resultM = (fieldC / 100);
    let fieldM = document.getElementById("num4");
    fieldM.value = resultM;
}
function mToc(){
    let fieldM2 = Number(document.getElementById("num4").value)
    let resultC = (fieldM2 * 100);
    let fieldC2 = document.getElementById("num3");
    fieldC2.value = resultC;
}
//-----------------------------------------------------------------------
function mTokm(){
    let fieldM3 = Number(document.getElementById("num5").value);
    let resultKm = (fieldM3 / 1000);
    let fieldKm = document.getElementById("num6");
    fieldKm.value = resultKm;
}
function kmTom(){
    let fieldKm2 = Number(document.getElementById("num6").value);
    let resultM2 = (fieldKm2 * 1000);
    let fieldM4 = document.getElementById("num5");
    fieldM4.value = resultM2;
}

function Clear(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("num3").value = "";
    document.getElementById("num4").value = "";
    document.getElementById("num5").value = "";
    document.getElementById("num6").value = "";
    
    

}
export let deg = -90;

export const nextSlider = (vM) => {
    deg -= 90;
    vM.bigSlider.style.transform = "perspective(1000px) translateX(13%) rotateY("+deg+"deg)";
    //console.log(deg);
    switch(deg){
        case -180:
            vM.btnA.style.visibility = "visible";
            vM.bigSlider.style.transform = "perspective(1000px) translateX(0%) rotateY("+deg+"deg)";
        break;
        case -360:
            vM.btnS.style.visibility = "hidden";
            vM.bigSlider.style.transform = "perspective(1000px) translateX(26%) rotateY("+deg+"deg)";
        break;
    }
}
export const backSlider = (vM) => {
    deg += 90;
    vM.bigSlider.style.transform = "perspective(1000px) translateX(13%) rotateY("+deg+"deg)";
    //console.log(deg);
    switch(deg){
        case -90:
            vM.btnA.style.visibility = "hidden";
            vM.bigSlider.style.transform = "perspective(1000px) translateX(13%) rotateY("+deg+"deg)";
        break;
        case -180:
            vM.btnS.style.visibility = "visible";
            vM.bigSlider.style.transform = "perspective(1000px) translateX(0%) rotateY("+deg+"deg)";
        break;
        case -270:
            vM.btnS.style.visibility = "visible";
            vM.bigSlider.style.transform = "perspective(1000px) translateX(13%) rotateY("+deg+"deg)";
        break;
        case -360:
            vM.btnS.style.visibility = "hidden";
            vM.bigSlider.style.transform = "perspective(1000px) translateX(26%) rotateY("+deg+"deg)";
        break;
    }
}
export const deslizar = (vM) => {
    deg = -90;
    //console.log(deg);
    vM.boxSlider.classList.toggle("deslizY");
    vM.bigSlider.style.transform = "perspective(1000px) translateX(13%) rotateY("+deg+"deg)";
    vM.btnA.classList.toggle('btn-off');
    vM.btnS.classList.toggle('btn-off');
    vM.btnAa.classList.toggle('btn-on');
    vM.btnSs.classList.toggle('btn-on');
    vM.btnS.style.visibility = "visible";
    vM.btnSs.style.visibility = "visible";
    vM.btnA.style.visibility = "hidden";
    vM.btnAa.style.visibility = "hidden";
    vM.bigSlider2.style.transform = "perspective(1000px) translateX(13%) rotateY("+deg+"deg)";
}
export const nextSlider2 = (vM) => {
    deg -= 90;
    vM.bigSlider2.style.transform = "perspective(1000px) translateX(13%) rotateY("+deg+"deg)";
    //console.log(deg);
    switch(deg){
        case -180:
            vM.btnAa.style.visibility = "visible";
            vM.bigSlider2.style.transform = "perspective(1000px) translateX(0%) rotateY("+deg+"deg)";
        break;
        case -360:
            vM.btnSs.style.visibility = "hidden";
            vM.bigSlider2.style.transform = "perspective(1000px) translateX(26%) rotateY("+deg+"deg)";
        break;
    }
}
export const backSlider2 = (vM) => {
    deg += 90;
    vM.bigSlider2.style.transform = "perspective(1000px) translateX(13%) rotateY("+deg+"deg)";
    //console.log(deg);
    switch(deg){
        case -90:
            vM.btnAa.style.visibility = "hidden";
            vM.bigSlider2.style.transform = "perspective(1000px) translateX(13%) rotateY("+deg+"deg)";
        break;
        case -180:
            vM.btnSs.style.visibility = "visible";
            vM.bigSlider2.style.transform = "perspective(1000px) translateX(0%) rotateY("+deg+"deg)";
        break;
        case -270:
            vM.btnSs.style.visibility = "visible";
            vM.bigSlider2.style.transform = "perspective(1000px) translateX(13%) rotateY("+deg+"deg)";
        break;
        case -360:
            vM.btnSs.style.visibility = "hidden";
            vM.bigSlider2.style.transform = "perspective(1000px) translateX(26%) rotateY("+deg+"deg)";
        break;
    }
}     
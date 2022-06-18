
export const abrirPaneles = (obj, b) => {
    obj.panel_i.classList.toggle('panel-izq-off');
    obj.panel_d.classList.toggle('panel-der-off');
    obj.start.classList.toggle('start-on');
    obj.start.classList.toggle('start-off');
    obj.base.classList.toggle('base-on');
}

export const cerrarModal = (vM, deg) => {
    vM.boxModal.classList.toggle('modal-on');
    deg = -90;
    //console.log(deg);
    vM.boxSlider.classList.remove('deslizY');
    vM.btnA.classList.remove('btn-off');
    vM.btnS.classList.remove('btn-off');
    vM.btnAa.classList.remove('btn-on');
    vM.btnSs.classList.remove('btn-on');
    vM.btnS.style.visibility = "visible";
    vM.btnA.style.visibility = "hidden";
    vM.btnAa.style.visibility = "hidden";
}

export const exitModal = (vM) => {
    vM.classList.toggle('modal-on');
}

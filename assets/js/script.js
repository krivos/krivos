import {PORTADA as p} from './variables_portada.js';
import {abrirPaneles as ap, cerrarModal as cM, exitModal as eM} from './funciones1.js';
import {BASE as b} from './variables_base.js';
import {NAVON as nv, RWD as r} from './funciones2.js'; 
import {VARMODAL as vM} from './variables_modal.js';
import{nextSlider as nS, backSlider as bS, deslizar as des,
    nextSlider2 as nS2, backSlider2 as bS2, deg} from './funciones_slider.js';

//PORTADA
p.start.addEventListener('click', () => ap(p,b));
//Menu
b.btn_nav.addEventListener('click', () => p.size >= 992? nv(b) : r(b));
//Modales
b.opc1.addEventListener('click', () => cM(vM, deg));
vM.close.addEventListener('click', () => cM(vM, deg));
b.opc3.addEventListener('click', () => eM(vM.boxModal3));
vM.close3.addEventListener('click', () => eM(vM.boxModal3));
b.opc4.addEventListener('click', () => eM(vM.boxModal4));
vM.close4.addEventListener('click', () => eM(vM.boxModal4));
//Slider

vM.btnS.addEventListener('click', () => nS(vM));
vM.btnA.addEventListener('click', () => bS(vM));
vM.btnD.addEventListener('click', () => des(vM));
vM.btnSs.addEventListener('click', () => nS2(vM));
vM.btnAa.addEventListener('click', () => bS2(vM));
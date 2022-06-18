
export const NAVON = (b) => {
    setTimeout(function(){
        b.btn_nav.classList.toggle('nav-on');
		b.color_central.classList.toggle('on');
        b.color_central2.classList.toggle('on');
        b.t1.classList.toggle('hcolor');
        b.t3.classList.toggle('hcolor');
	}, 500);
    setTimeout(function(){
        b.ln_1.classList.toggle("lon1");
        b.ln_2.classList.toggle("lon2");
	}, 1000);
    setTimeout(function(){
        b.nav.classList.toggle('nav-opc-on');
    }, 1500);
}
 
export const RWD = (b) => {
   setTimeout(function(){
       b.nav.classList.toggle('nav-opc-on');
       b.opc1.style.top = "0%";
       b.opc2.style.right = "0%";
       b.opc3.style.left = "0%";
       b.opc4.style.top = "50%";
    }, 100);
}        
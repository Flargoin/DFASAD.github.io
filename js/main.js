// scroll

    
$(function() {
  $("a[href='" + window.location.href.replace(/\/(ru|ua)/g,"") + "']").addClass("active");
});
$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});


// ALVIC
// buttons
const solButton = document.querySelector('#solid');
const cuzButton = document.querySelector('#cuzco');
const marButton = document.querySelector('#marmol');
const melButton = document.querySelector('#melange');
const metButton = document.querySelector('#metallo');
const osiButton = document.querySelector('#osiris');
const pearlButton = document.querySelector('#pearl');
const stuButton = document.querySelector('#stuco');
const texButton = document.querySelector('#textil');
const woodButton = document.querySelector('#woodgrain');
const superMattButton = document.querySelector('#supermatt');
const carolPineButton = document.querySelector('#carolina_pine');
const nocceButton = document.querySelector('#nocce');
const tessutoButton = document.querySelector('#tessuto');
const factoryButton = document.querySelector('#factory');
const lakeLandButton = document.querySelector('#lakeland_oak');
const spattButton = document.querySelector('#spatt');
const frappeButton = document.querySelector('#frappe');
const pinoRButton = document.querySelector('#pino_rustico');
const pinoMButton = document.querySelector('#pino_malibu');
const leatherButton = document.querySelector('#leather');
const orientalButton = document.querySelector('#oriental');
const olmoButton = document.querySelector('#olmo');
const solidButton = document.querySelector('#solid1');
const murattiButton = document.querySelector('#muratti');
const idaButton = document.querySelector('#ida');
const iceCreamButton = document.querySelector('#ice_cream');
const oxidButton = document.querySelector('#oxid');
const evoraButton = document.querySelector('#evora');








// blocks
const chTable = document.querySelector('.table-choose');
const variable = document.querySelector('.variable');


// choose category
const catLuxe = document.querySelector('#category1-alvic');
const catZenit = document.querySelector('#category2-alvic');
const catSyncron = document.querySelector('#category3-alvic');
const luxeChoose = document.querySelector('.luxe');
const zenitChoose = document.querySelector('.zenit');
const syncronChoose = document.querySelector('.syncron');

// luxe colors
const solColors = document.querySelector('.solid');
const cuzColors = document.querySelector('.cuzco');
const marColors = document.querySelector('.marmol');
const melColors = document.querySelector('.melange');
const metColors = document.querySelector('.metallo');
const osiColors = document.querySelector('.osiris');
const pearlColors = document.querySelector('.pearl');
const stuColors = document.querySelector('.stuco');
const texColors = document.querySelector('.textil');
const woodColors = document.querySelector('.woodgrain');

// zenit colors
const superMattColors = document.querySelector('.supermatt');

// syncron colors
const carolPineColors = document.querySelector('.carolina_pine');
const nocceColors = document.querySelector('.nocce');
const tessutoColors = document.querySelector('.tessuto');
const factoryColors = document.querySelector('.factory');
const lakeLandColors = document.querySelector('.lakeland_oak');
const spattColors = document.querySelector('.spatt');
const frappeColors = document.querySelector('.frappe');
const pinoRColors = document.querySelector('.pino_rustico');
const pinoMColors = document.querySelector('.pino_malibu');
const leatherColor = document.querySelector('.leather');
const orientalColors = document.querySelector('.oriental');
const olmoColors = document.querySelector('.olmo');
const solidColors = document.querySelector('.solid1');
const murattiColors = document.querySelector('.muratti');
const idaColors = document.querySelector('.ida');
const iceCreamColors = document.querySelector('.ice_cream');
const oxidColors = document.querySelector('.oxid');
const evoraColors = document.querySelector('.evora');

// 
catLuxe.addEventListener('click', function(e){
 luxeChoose.style.display = 'flex';
 
 zenitChoose.style.display = 'none';
syncronChoose.style.display = 'none';
});

catZenit.addEventListener('click', function(e){
  zenitChoose.style.display = 'flex';

  luxeChoose.style.display = 'none';
 syncronChoose.style.display = 'none';
 });
 
 catSyncron.addEventListener('click', function(e){
  syncronChoose.style.display = 'flex';

  luxeChoose.style.display = 'none';
zenitChoose.style.display = 'none';
 });
 




solButton.addEventListener('click', function (e){
  marColors.classList.remove('marmol-active');
  cuzColors.classList.remove('cuzco-active');
 melColors.classList.remove('melange-active');
 metColors.classList.remove('metallo-active');
 osiColors.classList.remove('osiris-active');
 pearlColors.classList.remove('pearl-active');
 stuColors.classList.remove('stuco-active');
 texColors.classList.remove('textil-active');
 woodColors.classList.remove('woodgrain-active');
 superMattColors.classList.remove('supermatt-active');
 carolPineColors.classList.remove('carolina_pine-active');
 nocceColors.classList.remove('nocce-active');
 tessutoColors.classList.remove('tessuto-active');
 factoryColors.classList.remove('factory-active');
 lakeLandColors.classList.remove('lakeland_oak-active');
 spattColors.classList.remove('spatt-active');
 frappeColors.classList.remove('frappe-active');
 pinoRColors.classList.remove('pino_rustico-active');
 pinoMColors.classList.remove('pino_malibu-active');
 leatherColor.classList.remove('leather-active');
 orientalColors.classList.remove('oriental-active');
 olmoColors.classList.remove('olmo-active');
 solidColors.classList.remove('solid1-active');
 murattiColors.classList.remove('muratti-active');
 idaColors.classList.remove('ida-active');
 iceCreamColors.classList.remove('ice_cream-active');
 oxidColors.classList.remove('oxid-active');
 evoraColors.classList.remove('evora-active');


solColors.classList.toggle('solid-active');


  
  
});

cuzButton.addEventListener('click', function (e){
 marColors.classList.remove('marmol-active');
 solColors.classList.remove('solid-active');
 melColors.classList.remove('melange-active');
 metColors.classList.remove('metallo-active');
 osiColors.classList.remove('osiris-active');
 pearlColors.classList.remove('pearl-active');
 stuColors.classList.remove('stuco-active');
 texColors.classList.remove('textil-active');
 woodColors.classList.remove('woodgrain-active');
 superMattColors.classList.remove('supermatt-active');
 carolPineColors.classList.remove('carolina_pine-active');
 nocceColors.classList.remove('nocce-active');
 tessutoColors.classList.remove('tessuto-active');
 factoryColors.classList.remove('factory-active');
 lakeLandColors.classList.remove('lakeland_oak-active');
 spattColors.classList.remove('spatt-active');
 frappeColors.classList.remove('frappe-active');
 pinoRColors.classList.remove('pino_rustico-active');
 pinoMColors.classList.remove('pino_malibu-active');
 leatherColor.classList.remove('leather-active');
 orientalColors.classList.remove('oriental-active');
 olmoColors.classList.remove('olmo-active');
 solidColors.classList.remove('solid1-active');
 murattiColors.classList.remove('muratti-active');
 idaColors.classList.remove('ida-active');
 iceCreamColors.classList.remove('ice_cream-active');
 oxidColors.classList.remove('oxid-active');
 evoraColors.classList.remove('evora-active');


  cuzColors.classList.toggle('cuzco-active');
  
});

marButton.addEventListener('click', function (e){
   solColors.classList.remove('solid-active');
   cuzColors.classList.remove('cuzco-active');
   melColors.classList.remove('melange-active');
   metColors.classList.remove('metallo-active');
   osiColors.classList.remove('osiris-active');
   pearlColors.classList.remove('pearl-active');
   stuColors.classList.remove('stuco-active');
   texColors.classList.remove('textil-active');
   woodColors.classList.remove('woodgrain-active');
   superMattColors.classList.remove('supermatt-active');
  carolPineColors.classList.remove('carolina_pine-active');
  nocceColors.classList.remove('nocce-active');
  tessutoColors.classList.remove('tessuto-active');
  factoryColors.classList.remove('factory-active');
  lakeLandColors.classList.remove('lakeland_oak-active');
  spattColors.classList.remove('spatt-active');
  frappeColors.classList.remove('frappe-active');
  pinoRColors.classList.remove('pino_rustico-active');
  pinoMColors.classList.remove('pino_malibu-active');
  leatherColor.classList.remove('leather-active');
  orientalColors.classList.remove('oriental-active');
  olmoColors.classList.remove('olmo-active');
  solidColors.classList.remove('solid1-active');
  murattiColors.classList.remove('muratti-active');
  idaColors.classList.remove('ida-active');
  iceCreamColors.classList.remove('ice_cream-active');
  oxidColors.classList.remove('oxid-active');
  evoraColors.classList.remove('evora-active');


  marColors.classList.toggle('marmol-active');
});

melButton.addEventListener('click', function (e){
   solColors.classList.remove('solid-active');
   cuzColors.classList.remove('cuzco-active');
   marColors.classList.remove('marmol-active');
   metColors.classList.remove('metallo-active');
   osiColors.classList.remove('osiris-active');
   pearlColors.classList.remove('pearl-active');
   stuColors.classList.remove('stuco-active');
   texColors.classList.remove('textil-active');
   woodColors.classList.remove('woodgrain-active');
   superMattColors.classList.remove('supermatt-active');
  carolPineColors.classList.remove('carolina_pine-active');
  nocceColors.classList.remove('nocce-active');
  tessutoColors.classList.remove('tessuto-active');
  factoryColors.classList.remove('factory-active');
  lakeLandColors.classList.remove('lakeland_oak-active');
  spattColors.classList.remove('spatt-active');
  frappeColors.classList.remove('frappe-active');
  pinoRColors.classList.remove('pino_rustico-active');
  pinoMColors.classList.remove('pino_malibu-active');
  leatherColor.classList.remove('leather-active');
  orientalColors.classList.remove('oriental-active');
  olmoColors.classList.remove('olmo-active');
  solidColors.classList.remove('solid1-active');
  murattiColors.classList.remove('muratti-active');
  idaColors.classList.remove('ida-active');
  iceCreamColors.classList.remove('ice_cream-active');
  oxidColors.classList.remove('oxid-active');
  evoraColors.classList.remove('evora-active');


  melColors.classList.toggle('melange-active');
});

metButton.addEventListener('click', function (e){
   solColors.classList.remove('solid-active');
   cuzColors.classList.remove('cuzco-active');
   marColors.classList.remove('marmol-active');
   melColors.classList.remove('melange-active');
   osiColors.classList.remove('osiris-active');
   pearlColors.classList.remove('pearl-active');
   stuColors.classList.remove('stuco-active');
   texColors.classList.remove('textil-active');
   woodColors.classList.remove('woodgrain-active');
   superMattColors.classList.remove('supermatt-active');
   carolPineColors.classList.remove('carolina_pine-active');
   nocceColors.classList.remove('nocce-active');
   tessutoColors.classList.remove('tessuto-active');
   factoryColors.classList.remove('factory-active');
   lakeLandColors.classList.remove('lakeland_oak-active');
   spattColors.classList.remove('spatt-active');
   frappeColors.classList.remove('frappe-active');
   pinoRColors.classList.remove('pino_rustico-active');
   pinoMColors.classList.remove('pino_malibu-active');
   leatherColor.classList.remove('leather-active');
   orientalColors.classList.remove('oriental-active');
   olmoColors.classList.remove('olmo-active');
   solidColors.classList.remove('solid1-active');
   murattiColors.classList.remove('muratti-active');
   idaColors.classList.remove('ida-active');
   iceCreamColors.classList.remove('ice_cream-active');
   oxidColors.classList.remove('oxid-active');
   evoraColors.classList.remove('evora-active');


  metColors.classList.toggle('metallo-active');
});

osiButton.addEventListener('click', function (e){
  solColors.classList.remove('solid-active');
  cuzColors.classList.remove('cuzco-active');
  marColors.classList.remove('marmol-active');
  melColors.classList.remove('melange-active');
  metColors.classList.remove('metallo-active');
  pearlColors.classList.remove('pearl-active');
  stuColors.classList.remove('stuco-active');
  texColors.classList.remove('textil-active');
  woodColors.classList.remove('woodgrain-active');
  superMattColors.classList.remove('supermatt-active');
  carolPineColors.classList.remove('carolina_pine-active');
  nocceColors.classList.remove('nocce-active');
  tessutoColors.classList.remove('tessuto-active');
  factoryColors.classList.remove('factory-active');
  lakeLandColors.classList.remove('lakeland_oak-active');
  spattColors.classList.remove('spatt-active');
  frappeColors.classList.remove('frappe-active');
  pinoRColors.classList.remove('pino_rustico-active');
  pinoMColors.classList.remove('pino_malibu-active');
  leatherColor.classList.remove('leather-active');
  orientalColors.classList.remove('oriental-active');
  olmoColors.classList.remove('olmo-active');
  solidColors.classList.remove('solid1-active');
  murattiColors.classList.remove('muratti-active');
  idaColors.classList.remove('ida-active');
  iceCreamColors.classList.remove('ice_cream-active');
  oxidColors.classList.remove('oxid-active');
  evoraColors.classList.remove('evora-active');

  
  osiColors.classList.toggle('osiris-active');
});

pearlButton.addEventListener('click', function (e){
   solColors.classList.remove('solid-active');
   cuzColors.classList.remove('cuzco-active');
   marColors.classList.remove('marmol-active');
   melColors.classList.remove('melange-active');
   metColors.classList.remove('metallo-active');
   osiColors.classList.remove('osiris-active');
   stuColors.classList.remove('stuco-active');
   texColors.classList.remove('textil-active');
   woodColors.classList.remove('woodgrain-active');
   superMattColors.classList.remove('supermatt-active');
  carolPineColors.classList.remove('carolina_pine-active');
  nocceColors.classList.remove('nocce-active');
  tessutoColors.classList.remove('tessuto-active');
  factoryColors.classList.remove('factory-active');
  lakeLandColors.classList.remove('lakeland_oak-active');
  spattColors.classList.remove('spatt-active');
  frappeColors.classList.remove('frappe-active');
  pinoRColors.classList.remove('pino_rustico-active');
  pinoMColors.classList.remove('pino_malibu-active');
  leatherColor.classList.remove('leather-active');
  orientalColors.classList.remove('oriental-active');
  olmoColors.classList.remove('olmo-active');
  solidColors.classList.remove('solid1-active');
  murattiColors.classList.remove('muratti-active');
  idaColors.classList.remove('ida-active');
  iceCreamColors.classList.remove('ice_cream-active');
  oxidColors.classList.remove('oxid-active');
  evoraColors.classList.remove('evora-active');


  pearlColors.classList.toggle('pearl-active');
});

stuButton.addEventListener('click', function (e){
   solColors.classList.remove('solid-active');
   cuzColors.classList.remove('cuzco-active');
   marColors.classList.remove('marmol-active');
   melColors.classList.remove('melange-active');
   metColors.classList.remove('metallo-active');
   osiColors.classList.remove('osiris-active');
   pearlColors.classList.remove('pearl-active');
   texColors.classList.remove('textil-active');
   woodColors.classList.remove('woodgrain-active');
   superMattColors.classList.remove('supermatt-active');
   carolPineColors.classList.remove('carolina_pine-active');
   nocceColors.classList.remove('nocce-active');
   tessutoColors.classList.remove('tessuto-active');
   factoryColors.classList.remove('factory-active');
   lakeLandColors.classList.remove('lakeland_oak-active');
   spattColors.classList.remove('spatt-active');
   frappeColors.classList.remove('frappe-active');
   pinoRColors.classList.remove('pino_rustico-active');
   pinoMColors.classList.remove('pino_malibu-active');
   leatherColor.classList.remove('leather-active');
   orientalColors.classList.remove('oriental-active');
   olmoColors.classList.remove('olmo-active');
   solidColors.classList.remove('solid1-active');
   murattiColors.classList.remove('muratti-active');
   idaColors.classList.remove('ida-active');
   iceCreamColors.classList.remove('ice_cream-active');
   oxidColors.classList.remove('oxid-active');
   evoraColors.classList.remove('evora-active');


  stuColors.classList.toggle('stuco-active');
});

texButton.addEventListener('click', function (e){
   solColors.classList.remove('solid-active');
   cuzColors.classList.remove('cuzco-active');
   marColors.classList.remove('marmol-active');
   melColors.classList.remove('melange-active');
   metColors.classList.remove('metallo-active');
   osiColors.classList.remove('osiris-active');
   pearlColors.classList.remove('pearl-active');
   stuColors.classList.remove('stuco-active');
   woodColors.classList.remove('woodgrain-active');
   superMattColors.classList.remove('supermatt-active');
   carolPineColors.classList.remove('carolina_pine-active');
   nocceColors.classList.remove('nocce-active');
   tessutoColors.classList.remove('tessuto-active');
   factoryColors.classList.remove('factory-active');
   lakeLandColors.classList.remove('lakeland_oak-active');
   spattColors.classList.remove('spatt-active');
   frappeColors.classList.remove('frappe-active');
   pinoRColors.classList.remove('pino_rustico-active');
   pinoMColors.classList.remove('pino_malibu-active');
   leatherColor.classList.remove('leather-active');
   orientalColors.classList.remove('oriental-active');
   olmoColors.classList.remove('olmo-active');
   solidColors.classList.remove('solid1-active');
   murattiColors.classList.remove('muratti-active');
   idaColors.classList.remove('ida-active');
   iceCreamColors.classList.remove('ice_cream-active');
   oxidColors.classList.remove('oxid-active');
   evoraColors.classList.remove('evora-active');


  texColors.classList.toggle('textil-active');
});

woodButton.addEventListener('click', function (e){
   solColors.classList.remove('solid-active');
   cuzColors.classList.remove('cuzco-active');
   marColors.classList.remove('marmol-active');
   melColors.classList.remove('melange-active');
   metColors.classList.remove('metallo-active');
   osiColors.classList.remove('osiris-active');
   pearlColors.classList.remove('pearl-active');
   stuColors.classList.remove('stuco-active');
   texColors.classList.remove('textil-active');
   superMattColors.classList.remove('supermatt-active');
  carolPineColors.classList.remove('carolina_pine-active');
  nocceColors.classList.remove('nocce-active');
  tessutoColors.classList.remove('tessuto-active');
  factoryColors.classList.remove('factory-active');
  lakeLandColors.classList.remove('lakeland_oak-active');
  spattColors.classList.remove('spatt-active');
  frappeColors.classList.remove('frappe-active');
  pinoRColors.classList.remove('pino_rustico-active');
  pinoMColors.classList.remove('pino_malibu-active');
  leatherColor.classList.remove('leather-active');
  orientalColors.classList.remove('oriental-active');
  olmoColors.classList.remove('olmo-active');
  solidColors.classList.remove('solid1-active');
  murattiColors.classList.remove('muratti-active');
  idaColors.classList.remove('ida-active');
  iceCreamColors.classList.remove('ice_cream-active');
  oxidColors.classList.remove('oxid-active');
  evoraColors.classList.remove('evora-active');


  woodColors.classList.toggle('woodgrain-active');
});


superMattButton.addEventListener('click', function(e){
  solColors.classList.remove('solid-active');
  cuzColors.classList.remove('cuzco-active');
  marColors.classList.remove('marmol-active');
  melColors.classList.remove('melange-active');
  metColors.classList.remove('metallo-active');
  osiColors.classList.remove('osiris-active');
  pearlColors.classList.remove('pearl-active');
  stuColors.classList.remove('stuco-active');
  texColors.classList.remove('textil-active');
  woodColors.classList.remove('woodgrain-active');
  carolPineColors.classList.remove('carolina_pine-active');
  nocceColors.classList.remove('nocce-active');
  tessutoColors.classList.remove('tessuto-active');
  factoryColors.classList.remove('factory-active');
  lakeLandColors.classList.remove('lakeland_oak-active');
  spattColors.classList.remove('spatt-active');
  frappeColors.classList.remove('frappe-active');
  pinoRColors.classList.remove('pino_rustico-active');
  pinoMColors.classList.remove('pino_malibu-active');
  leatherColor.classList.remove('leather-active');
  orientalColors.classList.remove('oriental-active');
  olmoColors.classList.remove('olmo-active');
  solidColors.classList.remove('solid1-active');
  murattiColors.classList.remove('muratti-active');
  idaColors.classList.remove('ida-active');
  iceCreamColors.classList.remove('ice_cream-active');
  oxidColors.classList.remove('oxid-active');
  evoraColors.classList.remove('evora-active');


  superMattColors.classList.toggle('supermatt-active');
});


carolPineButton.addEventListener('click', function(e){
  solColors.classList.remove('solid-active');
  cuzColors.classList.remove('cuzco-active');
  marColors.classList.remove('marmol-active');
  melColors.classList.remove('melange-active');
  metColors.classList.remove('metallo-active');
  osiColors.classList.remove('osiris-active');
  pearlColors.classList.remove('pearl-active');
  stuColors.classList.remove('stuco-active');
  texColors.classList.remove('textil-active');
  superMattColors.classList.remove('supermatt-active');
  woodColors.classList.remove('woodgrain-active');
  nocceColors.classList.remove('nocce-active');
  tessutoColors.classList.remove('tessuto-active');
  factoryColors.classList.remove('factory-active');
  lakeLandColors.classList.remove('lakeland_oak-active');
  spattColors.classList.remove('spatt-active');
  frappeColors.classList.remove('frappe-active');
  pinoRColors.classList.remove('pino_rustico-active');
  pinoMColors.classList.remove('pino_malibu-active');
  leatherColor.classList.remove('leather-active');
  orientalColors.classList.remove('oriental-active');
  olmoColors.classList.remove('olmo-active');
  solidColors.classList.remove('solid1-active');
  murattiColors.classList.remove('muratti-active');
  idaColors.classList.remove('ida-active');
  iceCreamColors.classList.remove('ice_cream-active');
  oxidColors.classList.remove('oxid-active');
  evoraColors.classList.remove('evora-active');


  carolPineColors.classList.toggle('carolina_pine-active');
});


nocceButton.addEventListener('click', function(e){
  solColors.classList.remove('solid-active');
  cuzColors.classList.remove('cuzco-active');
  marColors.classList.remove('marmol-active');
  melColors.classList.remove('melange-active');
  metColors.classList.remove('metallo-active');
  osiColors.classList.remove('osiris-active');
  pearlColors.classList.remove('pearl-active');
  stuColors.classList.remove('stuco-active');
  texColors.classList.remove('textil-active');
  superMattColors.classList.remove('supermatt-active');
  woodColors.classList.remove('woodgrain-active');
  carolPineColors.classList.remove('carolina_pine-active');
  tessutoColors.classList.remove('tessuto-active');
  factoryColors.classList.remove('factory-active');
  lakeLandColors.classList.remove('lakeland_oak-active');
  spattColors.classList.remove('spatt-active');
  frappeColors.classList.remove('frappe-active');
  pinoRColors.classList.remove('pino_rustico-active');
  pinoMColors.classList.remove('pino_malibu-active');
  leatherColor.classList.remove('leather-active');
  orientalColors.classList.remove('oriental-active');
  olmoColors.classList.remove('olmo-active');
  solidColors.classList.remove('solid1-active');
  murattiColors.classList.remove('muratti-active');
  idaColors.classList.remove('ida-active');
  iceCreamColors.classList.remove('ice_cream-active');
  oxidColors.classList.remove('oxid-active');
  evoraColors.classList.remove('evora-active');


  nocceColors.classList.toggle('nocce-active');
});

tessutoButton.addEventListener('click', function(e){
  solColors.classList.remove('solid-active');
  cuzColors.classList.remove('cuzco-active');
  marColors.classList.remove('marmol-active');
  melColors.classList.remove('melange-active');
  metColors.classList.remove('metallo-active');
  osiColors.classList.remove('osiris-active');
  pearlColors.classList.remove('pearl-active');
  stuColors.classList.remove('stuco-active');
  texColors.classList.remove('textil-active');
  superMattColors.classList.remove('supermatt-active');
  woodColors.classList.remove('woodgrain-active');
  carolPineColors.classList.remove('carolina_pine-active');
  nocceColors.classList.remove('nocce-active');
  factoryColors.classList.remove('factory-active');
  lakeLandColors.classList.remove('lakeland_oak-active');
  spattColors.classList.remove('spatt-active');
  frappeColors.classList.remove('frappe-active');
  pinoRColors.classList.remove('pino_rustico-active');
  pinoMColors.classList.remove('pino_malibu-active');
  leatherColor.classList.remove('leather-active');
  orientalColors.classList.remove('oriental-active');
  olmoColors.classList.remove('olmo-active');
  solidColors.classList.remove('solid1-active');
  murattiColors.classList.remove('muratti-active');
  idaColors.classList.remove('ida-active');
  iceCreamColors.classList.remove('ice_cream-active');
  oxidColors.classList.remove('oxid-active');
  evoraColors.classList.remove('evora-active');


  tessutoColors.classList.toggle('tessuto-active');
});


factoryButton.addEventListener('click', function(e){
  solColors.classList.remove('solid-active');
  cuzColors.classList.remove('cuzco-active');
  marColors.classList.remove('marmol-active');
  melColors.classList.remove('melange-active');
  metColors.classList.remove('metallo-active');
  osiColors.classList.remove('osiris-active');
  pearlColors.classList.remove('pearl-active');
  stuColors.classList.remove('stuco-active');
  texColors.classList.remove('textil-active');
  superMattColors.classList.remove('supermatt-active');
  woodColors.classList.remove('woodgrain-active');
  carolPineColors.classList.remove('carolina_pine-active');
  nocceColors.classList.remove('nocce-active');
  tessutoColors.classList.remove('tessuto-active');
  lakeLandColors.classList.remove('lakeland_oak-active');
  spattColors.classList.remove('spatt-active');
  frappeColors.classList.remove('frappe-active');
  pinoRColors.classList.remove('pino_rustico-active');
  pinoMColors.classList.remove('pino_malibu-active');
  leatherColor.classList.remove('leather-active');
  orientalColors.classList.remove('oriental-active');
  olmoColors.classList.remove('olmo-active');
  solidColors.classList.remove('solid1-active');
  murattiColors.classList.remove('muratti-active');
  idaColors.classList.remove('ida-active');
  iceCreamColors.classList.remove('ice_cream-active');
  oxidColors.classList.remove('oxid-active');
  evoraColors.classList.remove('evora-active');


  factoryColors.classList.toggle('factory-active');
});

lakeLandButton.addEventListener('click', function(e){
  solColors.classList.remove('solid-active');
  cuzColors.classList.remove('cuzco-active');
  marColors.classList.remove('marmol-active');
  melColors.classList.remove('melange-active');
  metColors.classList.remove('metallo-active');
  osiColors.classList.remove('osiris-active');
  pearlColors.classList.remove('pearl-active');
  stuColors.classList.remove('stuco-active');
  texColors.classList.remove('textil-active');
  superMattColors.classList.remove('supermatt-active');
  woodColors.classList.remove('woodgrain-active');
  carolPineColors.classList.remove('carolina_pine-active');
  nocceColors.classList.remove('nocce-active');
  tessutoColors.classList.remove('tessuto-active');
  factoryColors.classList.remove('factory-active');
  spattColors.classList.remove('spatt-active');
  frappeColors.classList.remove('frappe-active');
  pinoRColors.classList.remove('pino_rustico-active');
  pinoMColors.classList.remove('pino_malibu-active');
  leatherColor.classList.remove('leather-active');
  orientalColors.classList.remove('oriental-active');
  olmoColors.classList.remove('olmo-active');
  solidColors.classList.remove('solid1-active');
  murattiColors.classList.remove('muratti-active');
  idaColors.classList.remove('ida-active');
  iceCreamColors.classList.remove('ice_cream-active');
  oxidColors.classList.remove('oxid-active');
  evoraColors.classList.remove('evora-active');


  lakeLandColors.classList.toggle('lakeland_oak-active');
});


spattButton.addEventListener('click', function(e){
  solColors.classList.remove('solid-active');
  cuzColors.classList.remove('cuzco-active');
  marColors.classList.remove('marmol-active');
  melColors.classList.remove('melange-active');
  metColors.classList.remove('metallo-active');
  osiColors.classList.remove('osiris-active');
  pearlColors.classList.remove('pearl-active');
  stuColors.classList.remove('stuco-active');
  texColors.classList.remove('textil-active');
  superMattColors.classList.remove('supermatt-active');
  woodColors.classList.remove('woodgrain-active');
  carolPineColors.classList.remove('carolina_pine-active');
  nocceColors.classList.remove('nocce-active');
  tessutoColors.classList.remove('tessuto-active');
  factoryColors.classList.remove('factory-active');
  lakeLandColors.classList.remove('lakeland_oak-active');
  frappeColors.classList.remove('frappe-active');
  pinoRColors.classList.remove('pino_rustico-active');
  pinoMColors.classList.remove('pino_malibu-active');
  leatherColor.classList.remove('leather-active');
  orientalColors.classList.remove('oriental-active');
  olmoColors.classList.remove('olmo-active');
  solidColors.classList.remove('solid1-active');
  murattiColors.classList.remove('muratti-active');
  idaColors.classList.remove('ida-active');
  iceCreamColors.classList.remove('ice_cream-active');
  oxidColors.classList.remove('oxid-active');
  evoraColors.classList.remove('evora-active');


  spattColors.classList.toggle('spatt-active');
});

frappeButton.addEventListener('click', function(e){
  solColors.classList.remove('solid-active');
  cuzColors.classList.remove('cuzco-active');
  marColors.classList.remove('marmol-active');
  melColors.classList.remove('melange-active');
  metColors.classList.remove('metallo-active');
  osiColors.classList.remove('osiris-active');
  pearlColors.classList.remove('pearl-active');
  stuColors.classList.remove('stuco-active');
  texColors.classList.remove('textil-active');
  superMattColors.classList.remove('supermatt-active');
  woodColors.classList.remove('woodgrain-active');
  carolPineColors.classList.remove('carolina_pine-active');
  nocceColors.classList.remove('nocce-active');
  tessutoColors.classList.remove('tessuto-active');
  factoryColors.classList.remove('factory-active');
  lakeLandColors.classList.remove('lakeland_oak-active');
  spattColors.classList.remove('spatt-active');
  pinoRColors.classList.remove('pino_rustico-active');
  pinoMColors.classList.remove('pino_malibu-active');
  leatherColor.classList.remove('leather-active');
  orientalColors.classList.remove('oriental-active');
  olmoColors.classList.remove('olmo-active');
  solidColors.classList.remove('solid1-active');
  murattiColors.classList.remove('muratti-active');
  idaColors.classList.remove('ida-active');
  iceCreamColors.classList.remove('ice_cream-active');
  oxidColors.classList.remove('oxid-active');
  evoraColors.classList.remove('evora-active');


  frappeColors.classList.toggle('frappe-active');
});

pinoRButton.addEventListener('click',function(e){
  solColors.classList.remove('solid-active');
  cuzColors.classList.remove('cuzco-active');
  marColors.classList.remove('marmol-active');
  melColors.classList.remove('melange-active');
  metColors.classList.remove('metallo-active');
  osiColors.classList.remove('osiris-active');
  pearlColors.classList.remove('pearl-active');
  stuColors.classList.remove('stuco-active');
  texColors.classList.remove('textil-active');
  superMattColors.classList.remove('supermatt-active');
  woodColors.classList.remove('woodgrain-active');
  carolPineColors.classList.remove('carolina_pine-active');
  nocceColors.classList.remove('nocce-active');
  tessutoColors.classList.remove('tessuto-active');
  factoryColors.classList.remove('factory-active');
  lakeLandColors.classList.remove('lakeland_oak-active');
  spattColors.classList.remove('spatt-active');
  frappeColors.classList.remove('frappe-active');
  pinoMColors.classList.remove('pino_malibu-active');
  leatherColor.classList.remove('leather-active');
  orientalColors.classList.remove('oriental-active');
  olmoColors.classList.remove('olmo-active');
  solidColors.classList.remove('solid1-active');
  murattiColors.classList.remove('muratti-active');
  idaColors.classList.remove('ida-active');
  iceCreamColors.classList.remove('ice_cream-active');
  oxidColors.classList.remove('oxid-active');
  evoraColors.classList.remove('evora-active');


  pinoRColors.classList.toggle('pino_rustico-active');
});

pinoMButton.addEventListener('click', function(e){
  solColors.classList.remove('solid-active');
  cuzColors.classList.remove('cuzco-active');
  marColors.classList.remove('marmol-active');
  melColors.classList.remove('melange-active');
  metColors.classList.remove('metallo-active');
  osiColors.classList.remove('osiris-active');
  pearlColors.classList.remove('pearl-active');
  stuColors.classList.remove('stuco-active');
  texColors.classList.remove('textil-active');
  superMattColors.classList.remove('supermatt-active');
  woodColors.classList.remove('woodgrain-active');
  carolPineColors.classList.remove('carolina_pine-active');
  nocceColors.classList.remove('nocce-active');
  tessutoColors.classList.remove('tessuto-active');
  factoryColors.classList.remove('factory-active');
  lakeLandColors.classList.remove('lakeland_oak-active');
  spattColors.classList.remove('spatt-active');
  frappeColors.classList.remove('frappe-active');
  pinoRColors.classList.remove('pino_rustico-active');
  leatherColor.classList.remove('leather-active');
  orientalColors.classList.remove('oriental-active');
  olmoColors.classList.remove('olmo-active');
  solidColors.classList.remove('solid1-active');
  murattiColors.classList.remove('muratti-active');
  idaColors.classList.remove('ida-active');
  iceCreamColors.classList.remove('ice_cream-active');
  oxidColors.classList.remove('oxid-active');
  evoraColors.classList.remove('evora-active');


  pinoMColors.classList.toggle('pino_malibu-active');
});

leatherButton.addEventListener('click', function(e){
  solColors.classList.remove('solid-active');
  cuzColors.classList.remove('cuzco-active');
  marColors.classList.remove('marmol-active');
  melColors.classList.remove('melange-active');
  metColors.classList.remove('metallo-active');
  osiColors.classList.remove('osiris-active');
  pearlColors.classList.remove('pearl-active');
  stuColors.classList.remove('stuco-active');
  texColors.classList.remove('textil-active');
  superMattColors.classList.remove('supermatt-active');
  woodColors.classList.remove('woodgrain-active');
  carolPineColors.classList.remove('carolina_pine-active');
  nocceColors.classList.remove('nocce-active');
  tessutoColors.classList.remove('tessuto-active');
  factoryColors.classList.remove('factory-active');
  lakeLandColors.classList.remove('lakeland_oak-active');
  spattColors.classList.remove('spatt-active');
  frappeColors.classList.remove('frappe-active');
  pinoRColors.classList.remove('pino_rustico-active');
  pinoMColors.classList.remove('pino_malibu-active');
  orientalColors.classList.remove('oriental-active');
  olmoColors.classList.remove('olmo-active');
  solidColors.classList.remove('solid1-active');
  murattiColors.classList.remove('muratti-active');
  idaColors.classList.remove('ida-active');
  iceCreamColors.classList.remove('ice_cream-active');
  oxidColors.classList.remove('oxid-active');
  evoraColors.classList.remove('evora-active');


  leatherColor.classList.toggle('leather-active');
});


orientalButton.addEventListener('click',function(e){
  solColors.classList.remove('solid-active');
  cuzColors.classList.remove('cuzco-active');
  marColors.classList.remove('marmol-active');
  melColors.classList.remove('melange-active');
  metColors.classList.remove('metallo-active');
  osiColors.classList.remove('osiris-active');
  pearlColors.classList.remove('pearl-active');
  stuColors.classList.remove('stuco-active');
  texColors.classList.remove('textil-active');
  superMattColors.classList.remove('supermatt-active');
  woodColors.classList.remove('woodgrain-active');
  carolPineColors.classList.remove('carolina_pine-active');
  nocceColors.classList.remove('nocce-active');
  tessutoColors.classList.remove('tessuto-active');
  factoryColors.classList.remove('factory-active');
  lakeLandColors.classList.remove('lakeland_oak-active');
  spattColors.classList.remove('spatt-active');
  frappeColors.classList.remove('frappe-active');
  pinoRColors.classList.remove('pino_rustico-active');
  pinoMColors.classList.remove('pino_malibu-active');
  leatherColor.classList.remove('leather-active');
  olmoColors.classList.remove('olmo-active');
  solidColors.classList.remove('solid1-active');
  murattiColors.classList.remove('muratti-active');
  idaColors.classList.remove('ida-active');
  iceCreamColors.classList.remove('ice_cream-active');
  oxidColors.classList.remove('oxid-active');
  evoraColors.classList.remove('evora-active');


  orientalColors.classList.toggle('oriental-active');
});

olmoButton.addEventListener('click',function(e){
  solColors.classList.remove('solid-active');
  cuzColors.classList.remove('cuzco-active');
  marColors.classList.remove('marmol-active');
  melColors.classList.remove('melange-active');
  metColors.classList.remove('metallo-active');
  osiColors.classList.remove('osiris-active');
  pearlColors.classList.remove('pearl-active');
  stuColors.classList.remove('stuco-active');
  texColors.classList.remove('textil-active');
  superMattColors.classList.remove('supermatt-active');
  woodColors.classList.remove('woodgrain-active');
  carolPineColors.classList.remove('carolina_pine-active');
  nocceColors.classList.remove('nocce-active');
  tessutoColors.classList.remove('tessuto-active');
  factoryColors.classList.remove('factory-active');
  lakeLandColors.classList.remove('lakeland_oak-active');
  spattColors.classList.remove('spatt-active');
  frappeColors.classList.remove('frappe-active');
  pinoRColors.classList.remove('pino_rustico-active');
  pinoMColors.classList.remove('pino_malibu-active');
  leatherColor.classList.remove('leather-active');
  orientalColors.classList.remove('oriental-active');
  solidColors.classList.remove('solid1-active');
  murattiColors.classList.remove('muratti-active');
  idaColors.classList.remove('ida-active');
  iceCreamColors.classList.remove('ice_cream-active');
  oxidColors.classList.remove('oxid-active');
  evoraColors.classList.remove('evora-active');


  olmoColors.classList.toggle('olmo-active');
});

solidButton.addEventListener('click', function(e){
  solColors.classList.remove('solid-active');
  cuzColors.classList.remove('cuzco-active');
  marColors.classList.remove('marmol-active');
  melColors.classList.remove('melange-active');
  metColors.classList.remove('metallo-active');
  osiColors.classList.remove('osiris-active');
  pearlColors.classList.remove('pearl-active');
  stuColors.classList.remove('stuco-active');
  texColors.classList.remove('textil-active');
  superMattColors.classList.remove('supermatt-active');
  woodColors.classList.remove('woodgrain-active');
  carolPineColors.classList.remove('carolina_pine-active');
  nocceColors.classList.remove('nocce-active');
  tessutoColors.classList.remove('tessuto-active');
  factoryColors.classList.remove('factory-active');
  lakeLandColors.classList.remove('lakeland_oak-active');
  spattColors.classList.remove('spatt-active');
  frappeColors.classList.remove('frappe-active');
  pinoRColors.classList.remove('pino_rustico-active');
  pinoMColors.classList.remove('pino_malibu-active');
  leatherColor.classList.remove('leather-active');
  orientalColors.classList.remove('oriental-active');
  olmoColors.classList.remove('olmo-active');
  murattiColors.classList.remove('muratti-active');
  idaColors.classList.remove('ida-active');
  iceCreamColors.classList.remove('ice_cream-active');
  oxidColors.classList.remove('oxid-active');
  evoraColors.classList.remove('evora-active');


  solidColors.classList.toggle('solid1-active');
});

murattiButton.addEventListener('click', function(e){
  solColors.classList.remove('solid-active');
  cuzColors.classList.remove('cuzco-active');
  marColors.classList.remove('marmol-active');
  melColors.classList.remove('melange-active');
  metColors.classList.remove('metallo-active');
  osiColors.classList.remove('osiris-active');
  pearlColors.classList.remove('pearl-active');
  stuColors.classList.remove('stuco-active');
  texColors.classList.remove('textil-active');
  superMattColors.classList.remove('supermatt-active');
  woodColors.classList.remove('woodgrain-active');
  carolPineColors.classList.remove('carolina_pine-active');
  nocceColors.classList.remove('nocce-active');
  tessutoColors.classList.remove('tessuto-active');
  factoryColors.classList.remove('factory-active');
  lakeLandColors.classList.remove('lakeland_oak-active');
  spattColors.classList.remove('spatt-active');
  frappeColors.classList.remove('frappe-active');
  pinoRColors.classList.remove('pino_rustico-active');
  pinoMColors.classList.remove('pino_malibu-active');
  leatherColor.classList.remove('leather-active');
  orientalColors.classList.remove('oriental-active');
  olmoColors.classList.remove('olmo-active');
  solidColors.classList.remove('solid1-active');
  idaColors.classList.remove('ida-active');
  iceCreamColors.classList.remove('ice_cream-active');
  oxidColors.classList.remove('oxid-active');
  evoraColors.classList.remove('evora-active');


  murattiColors.classList.toggle('muratti-active');
});

idaButton.addEventListener('click', function(e){
  solColors.classList.remove('solid-active');
  cuzColors.classList.remove('cuzco-active');
  marColors.classList.remove('marmol-active');
  melColors.classList.remove('melange-active');
  metColors.classList.remove('metallo-active');
  osiColors.classList.remove('osiris-active');
  pearlColors.classList.remove('pearl-active');
  stuColors.classList.remove('stuco-active');
  texColors.classList.remove('textil-active');
  superMattColors.classList.remove('supermatt-active');
  woodColors.classList.remove('woodgrain-active');
  carolPineColors.classList.remove('carolina_pine-active');
  nocceColors.classList.remove('nocce-active');
  tessutoColors.classList.remove('tessuto-active');
  factoryColors.classList.remove('factory-active');
  lakeLandColors.classList.remove('lakeland_oak-active');
  spattColors.classList.remove('spatt-active');
  frappeColors.classList.remove('frappe-active');
  pinoRColors.classList.remove('pino_rustico-active');
  pinoMColors.classList.remove('pino_malibu-active');
  leatherColor.classList.remove('leather-active');
  orientalColors.classList.remove('oriental-active');
  olmoColors.classList.remove('olmo-active');
  solidColors.classList.remove('solid1-active');
  murattiColors.classList.remove('muratti-active');
  iceCreamColors.classList.remove('ice_cream-active');
  oxidColors.classList.remove('oxid-active');
  evoraColors.classList.remove('evora-active');


  idaColors.classList.toggle('ida-active');
});

iceCreamButton.addEventListener('click', function(e){
  solColors.classList.remove('solid-active');
  cuzColors.classList.remove('cuzco-active');
  marColors.classList.remove('marmol-active');
  melColors.classList.remove('melange-active');
  metColors.classList.remove('metallo-active');
  osiColors.classList.remove('osiris-active');
  pearlColors.classList.remove('pearl-active');
  stuColors.classList.remove('stuco-active');
  texColors.classList.remove('textil-active');
  superMattColors.classList.remove('supermatt-active');
  woodColors.classList.remove('woodgrain-active');
  carolPineColors.classList.remove('carolina_pine-active');
  nocceColors.classList.remove('nocce-active');
  tessutoColors.classList.remove('tessuto-active');
  factoryColors.classList.remove('factory-active');
  lakeLandColors.classList.remove('lakeland_oak-active');
  spattColors.classList.remove('spatt-active');
  frappeColors.classList.remove('frappe-active');
  pinoRColors.classList.remove('pino_rustico-active');
  pinoMColors.classList.remove('pino_malibu-active');
  leatherColor.classList.remove('leather-active');
  orientalColors.classList.remove('oriental-active');
  olmoColors.classList.remove('olmo-active');
  solidColors.classList.remove('solid1-active');
  murattiColors.classList.remove('muratti-active');
  idaColors.classList.remove('ida-active');
  oxidColors.classList.remove('oxid-active');
  evoraColors.classList.remove('evora-active');


  iceCreamColors.classList.toggle('ice_cream-active');
});

oxidButton.addEventListener('click', function(e){
  solColors.classList.remove('solid-active');
  cuzColors.classList.remove('cuzco-active');
  marColors.classList.remove('marmol-active');
  melColors.classList.remove('melange-active');
  metColors.classList.remove('metallo-active');
  osiColors.classList.remove('osiris-active');
  pearlColors.classList.remove('pearl-active');
  stuColors.classList.remove('stuco-active');
  texColors.classList.remove('textil-active');
  superMattColors.classList.remove('supermatt-active');
  woodColors.classList.remove('woodgrain-active');
  carolPineColors.classList.remove('carolina_pine-active');
  nocceColors.classList.remove('nocce-active');
  tessutoColors.classList.remove('tessuto-active');
  factoryColors.classList.remove('factory-active');
  lakeLandColors.classList.remove('lakeland_oak-active');
  spattColors.classList.remove('spatt-active');
  frappeColors.classList.remove('frappe-active');
  pinoRColors.classList.remove('pino_rustico-active');
  pinoMColors.classList.remove('pino_malibu-active');
  leatherColor.classList.remove('leather-active');
  orientalColors.classList.remove('oriental-active');
  olmoColors.classList.remove('olmo-active');
  solidColors.classList.remove('solid1-active');
  murattiColors.classList.remove('muratti-active');
  idaColors.classList.remove('ida-active');
  iceCreamColors.classList.remove('ice_cream-active');
  evoraColors.classList.remove('evora-active');


  oxidColors.classList.toggle('oxid-active');
});

evoraButton.addEventListener('click', function(e){
  solColors.classList.remove('solid-active');
  cuzColors.classList.remove('cuzco-active');
  marColors.classList.remove('marmol-active');
  melColors.classList.remove('melange-active');
  metColors.classList.remove('metallo-active');
  osiColors.classList.remove('osiris-active');
  pearlColors.classList.remove('pearl-active');
  stuColors.classList.remove('stuco-active');
  texColors.classList.remove('textil-active');
  superMattColors.classList.remove('supermatt-active');
  woodColors.classList.remove('woodgrain-active');
  carolPineColors.classList.remove('carolina_pine-active');
  nocceColors.classList.remove('nocce-active');
  tessutoColors.classList.remove('tessuto-active');
  factoryColors.classList.remove('factory-active');
  lakeLandColors.classList.remove('lakeland_oak-active');
  spattColors.classList.remove('spatt-active');
  frappeColors.classList.remove('frappe-active');
  pinoRColors.classList.remove('pino_rustico-active');
  pinoMColors.classList.remove('pino_malibu-active');
  leatherColor.classList.remove('leather-active');
  orientalColors.classList.remove('oriental-active');
  olmoColors.classList.remove('olmo-active');
  solidColors.classList.remove('solid1-active');
  murattiColors.classList.remove('muratti-active');
  idaColors.classList.remove('ida-active');
  iceCreamColors.classList.remove('ice_cream-active');
  oxidColors.classList.remove('oxid-active');

  evoraColors.classList.toggle('evora-active');
})
  // alvic



  // senosan


  //senosan buttons
  const topXButton = document.querySelector('#topx');
  const topMButton = document.querySelector('#topm')
  const glassButton = document.querySelector('#glass')

  

  // senosam colors
  const topXColors = document.querySelector('.senosan__topx');
  const topMColors = document.querySelector('.senosan__topmatt');
  const glassColors = document.querySelector('.senosan__glass');

  topXButton.addEventListener('click', function(e){
    topMColors.classList.remove('senosan__topmatt-active');
    glassColors.classList.remove('senosan__glass-active');

    topXColors.classList.toggle('senosan__topx-active');
  });

  topMButton.addEventListener('click', function(e){
    topXColors.classList.remove('senosan__topx-active');
    glassColors.classList.remove('senosan__glass-active');

    topMColors.classList.toggle('senosan__topmatt-active');
  });

  glassButton.addEventListener('click', function(e){
    topMColors.classList.remove('senosan__topmatt-active');
    topXColors.classList.remove('senosan__topx-active');

    glassColors.classList.toggle('senosan__glass-active');
  });


  // fenix

  // fenix buttons

  const ntmButton = document.querySelector('#ntm');
  const ntaButton = document.querySelector('#nta');


  // fenix colors

  const ntmColors = document.querySelector('.ntm');
  const ntaColors = document.querySelector('.nta');

  ntmButton.addEventListener('click', function(e){
    ntmColors.classList.toggle('ntm-active');

    ntaColors.classList.remove('nta-active');
  });

  ntaButton.addEventListener('click', function(e){
    ntaColors.classList.toggle('nta-active');

    ntmColors.classList.remove('ntm-active');
  });




// prices
const priceButton = document.querySelector('.product-btn');
const priceOneButton = document.querySelector('.btn1');
const priceTwoButton = document.querySelector('.btn2');
const closeAlvic = document.querySelector('.close-alvic');
const closeSenosan = document.querySelector('.close-senosan');

const modalAlvic = document.querySelector('.price__alvic');
const modalSenosan = document.querySelector('.price__senosan');
const buyAlvic = document.querySelector('.price__buy-alvic');
const buySenosan = document.querySelector('.price__buy-senosan');

const closeFenix = document.querySelector('.close-fenix');
const modalFenix = document.querySelector('.price__fenix');
const buyFenix = document.querySelector('.price__buy-fenix');

buyFenix.addEventListener('click', function(e){
  modal.classList.remove('is_open');
});

buyAlvic.addEventListener('click', function(e){
  modalFenix.classList.remove('is_open');
});

closeFenix.addEventListener('click', function(e){
  modalFenix.classList.remove('is_open');
  });

buySenosan.addEventListener('click', function(e){
  modalSenosan.classList.remove('is_open');
});

closeAlvic.addEventListener('click', function(e){
modalAlvic.classList.remove('is_open');
});

closeSenosan.addEventListener('click', function(e){
modalSenosan.classList.remove('is_open');
});
priceButton.addEventListener('click', function(e){
  modalAlvic.classList.add('is_open');
});

priceOneButton.addEventListener('click', function(e){
  modalSenosan.classList.add('is_open');
});
priceTwoButton.addEventListener('click', function(e){
  modalFenix.classList.add('is_open');
})



  // slider

  $(document).ready(function(){
    $('.slider').slick({
      autoplay:true,
      autoplaySpeed:3000,
      arrows:true,
      nextArrow:'<button type="button" class="slick-next"></button>',
      centerMode:false,
      slidesToShow:1,
      slidesToScroll:1
    });
  });




  $('.slider-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    centerMode: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-1',
    dots: true,
    arrows: true,
    centerMode: true,
    focusOnSelect: true
  });





  const feedBackButton = document.querySelector('.feedback-button');
  const feedOneButton = document.querySelector('.feedback-button1');
  const feedTwoButton = document.querySelector('.feedback-button2');
  const feedThreeButton = document.querySelector('.feedback-button3');
  const feedFoureButton = document.querySelector('.feedback-button4');
  const feedFiveButton = document.querySelector('.feedback-button5');
  const feedSixButton = document.querySelector('.feedback-button6');
  const feedSevenButton = document.querySelector('.feedback-button7');
  const feedEightButton = document.querySelector('.feedback-button8');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close-modal');
const close2 = document.querySelector('.button');

feedBackButton.addEventListener('click', function(event) { 
     modal.classList.add('is_open');
});


feedOneButton.addEventListener('click', function(event) { 
  modal.classList.add('is_open');
});


feedTwoButton.addEventListener('click', function(event) { 
  modal.classList.add('is_open');
});


feedThreeButton.addEventListener('click', function(event) { 
  modal.classList.add('is_open');
});


feedFoureButton.addEventListener('click', function(event) { 
  modal.classList.add('is_open');
});


feedFiveButton.addEventListener('click', function(event) { 
  modal.classList.add('is_open');
});


feedSixButton.addEventListener('click', function(event) { 
  modal.classList.add('is_open');
});


feedSevenButton.addEventListener('click', function(event) { 
  modal.classList.add('is_open');
});


feedEightButton.addEventListener('click', function(event) { 
  modal.classList.add('is_open');
});

close.addEventListener('click', function(event) { 
    modal.classList.remove('is_open');
});


// adaptive header menu

$(document).ready(function() {
  $('.header__burger').click(function(event){
    $('.header__burger,.nav__header-adaptive').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
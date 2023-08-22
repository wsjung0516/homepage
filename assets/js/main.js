// initialize default language
changeLanguage('en');
 
function changeLanguage(language) {
  var enContent = document.getElementById('enContent');
  var koContent = document.getElementById('koContent');
  var enContent1 = document.getElementById('enContent1');
  var koContent1 = document.getElementById('koContent1');
  var enContent2 = document.getElementById('enContent2');
  var koContent2 = document.getElementById('koContent2');
  var enContent3 = document.getElementById('enContent3');
  var koContent3 = document.getElementById('koContent3');
  var enContent4 = document.getElementById('enContent4');
  var koContent4 = document.getElementById('koContent4');
  var enContent5 = document.getElementById('enContent5');
  var koContent5 = document.getElementById('koContent5');
  var enContent6 = document.getElementById('enContent6');
  var koContent6 = document.getElementById('koContent6');
  

  if (language === 'en') {
    enContent.classList.remove('hidden');
    koContent.classList.add('hidden');
    enContent1.classList.remove('hidden');
    koContent1.classList.add('hidden');
    enContent2.classList.remove('hidden');
    koContent2.classList.add('hidden');
    enContent3.classList.remove('hidden');
    koContent3.classList.add('hidden');
    enContent4.classList.remove('hidden');
    koContent4.classList.add('hidden');
    enContent5.classList.remove('hidden');
    koContent5.classList.add('hidden');
    enContent6.classList.remove('hidden');
    koContent6.classList.add('hidden');
  } else if (language === 'ko') {
    enContent.classList.add('hidden');
    koContent.classList.remove('hidden');
    enContent1.classList.add('hidden');
    koContent1.classList.remove('hidden');
    enContent2.classList.add('hidden');
    koContent2.classList.remove('hidden');
    enContent3.classList.add('hidden');
    koContent3.classList.remove('hidden');
    enContent4.classList.add('hidden');
    koContent4.classList.remove('hidden');
    enContent5.classList.add('hidden');
    koContent5.classList.remove('hidden');
    enContent6.classList.add('hidden');
    koContent6.classList.remove('hidden');
  }
}
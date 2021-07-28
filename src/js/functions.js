const flowers = ['Eustoma', 'Aster', 'Azalea', 'Jasmine', 'Delphinium', 'Hydrangea', 'Hibiscus', 'Hyacinth', 'Gerbera', 'Carnation', 'Cornflower', 'Heather', 'Lilac', 'Aquilegia', 'Anemone', 'Amaralis', 'Alstroemeria'];

const min = 0;
let max = flowers.length - 1;
let isActive = 0;

$(document).keydown((e) => {
  const code = e.keyCode || e.which;
  if (code === 32) {
    if (isActive === 0) {
      e.preventDefault();
      isActive = 1;
      let rndIndex = Math.floor(Math.random() * (max - min + 1)) + min;
      $('#popUp').css('background-image', `url("static/flowers/${flowers[rndIndex]}.jpg")`);
      $('#popUp').fadeIn('slow');
      $('#popUp').delay(5000).fadeOut('slow');
      setTimeout(() => {
        isActive = 0;
      }, 6100);
    }
  }
});

const flowers = ['Eustoma', 'Aster', 'Azalea', 'Jasmine', 'Delphinium', 'Hydrangea', 'Hibiscus', 'Hyacinth', 'Gerbera', 'Carnation', 'Cornflower', 'Heather', 'Lilac', 'Aquilegia', 'Anemone', 'Amaralis', 'Alstroemeria'];

const min = 0;
// let max = flowers.length;
let max = 0;
let isActive = 0;

$(document).keydown((e) => {
  const code = e.keyCode || e.which;
  if (e.key === 'z' || e.key === 'Z' || e.key === 'Я' || e.key === 'я') {
    if (isActive === 0) {
      e.preventDefault();
      isActive = 1;
      let rndIndex = Math.floor(Math.random() * (max - min + 1)) + min;
      let videoFile = `static/flowers/${flowers[rndIndex]}.mp4`;
      let video = $('#popUp video')[0];
      video.src = videoFile;
      video.load();
      video.play();
      $('#popUp').fadeIn('slow');
      $('#popUp').delay(5000).fadeOut('slow');
      setTimeout(() => {
        isActive = 0;
      }, 6100);
    }
  }
});


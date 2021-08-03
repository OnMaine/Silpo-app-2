
let predictions = `[{
  "id": "1",
  "name": "Аквілегія",
  "title": "Ідеально підходить для висловлення таємних почуттів",
  "message": "Не поспішайте розгадувати таємницю ваших відносин. Краще купіть тортик.",
  "image": "Aquilegia",
  "color": "#961db9"

}, {
  "id": "2",
  "name": "Азалія",
  "title": "Є символом радості, надії та успіху, а в китайській символіці - жіночності й стриманоісті",
  "message": "Маленькі щоденні радощі - запорука великого кохання. Порадуйте своє кохання цукерками",
  "image": "Azalea",
  "color": "#FF486D"

}, {
  "id": "3",
  "name": "Aster",
  "title": "Ідеально підходить для висловлення таємних почуттів",
  "message": "Готовьтесь к романтическим приключениям.",
  "image": "Aster",
  "color": "#FF486D"

}, {
  "id": "4",
  "name": "Alstroemeria",
  "title": "Ідеально підходить для висловлення таємних почуттів",
  "message": "В этом месяце ночная жизнь для вас.",
  "image": "Alstroemeria",
  "color": "#FF486D"

}, {
  "id": "5",
  "name": "Amaralis",
  "title": "Ідеально підходить для висловлення таємних почуттів",
  "message": "Вам предлагается мечта всей жизни. Скажите да!",
  "image": "Amaralis",
  "color": "#FF486D"

}, {
  "id": "6",
  "name": "Anemone",
  "title": "Ідеально підходить для висловлення таємних почуттів",
  "message": "Вас ждет приятный сюрприз.",
  "image": "Anemone",
  "color": "#FF486D"
}]`;

const animationsArr = ['stretchRight', 'stretchLeft', 'pullDown', 'pullUp', 'pulse', 'bounce', 'hatch', 'bigEntrance', 'expandOpen', 'fadeInit', 'slideExpandUp', 'slideUp', 'slideDown', 'slideLeft'];

predictions = $.parseJSON(predictions);
const min = 1;
let max = predictions.length;
// let max = 2;
let isActive = 0;
const animMin = 0;
let maxAnim = (animationsArr.length - 1);

$(document).keydown((e) => {
if (e.key === 'z' || e.key === 'Z' || e.key === 'Я' || e.key === 'я') {
  if (isActive === 0) {
    e.preventDefault();
    isActive = 1;
    let rndIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    let prediction = predictions.find(item => item.id == rndIndex);
    $('#popUp').css('background-image', `url("static/${prediction.image}/back.png")`);
    $('#popUp').css('color', `${prediction.color}`);
    $('.flower-name').css('border-color', `${prediction.color}`);
    $('#logo').attr('src', `static/${prediction.image}/logo.png`);
    $('#prediction-cloud').attr('src', `static/${prediction.image}/cloud.png`);
    $('#facebook').attr('src', `static/${prediction.image}/facebook.png`);
    $('#insta').attr('src', `static/${prediction.image}/insta.png`);
    $('#line').attr('src', `static/${prediction.image}/line.png`);
    $('#flower-name').text(prediction.name);
    $('#prediction-message').text(prediction.message);
    $('#prediction-title').text(prediction.title);
    $('#prediction-img').html(`<img class="img-fluid" src='static/${prediction.image}/${prediction.image}.gif'>`);
    $('#popUp').fadeIn('slow');
    let rndAnimIndex = Math.floor(Math.random() * (maxAnim - animMin + 1)) + animMin;
    $('#prediction-cloud').addClass(`${animationsArr[rndAnimIndex]}`);

    $('#prediction-message').delay(1500).fadeIn('slow');
    $('#popUp').delay(5000).fadeOut('slow');
    setTimeout(() => {
      isActive = 0;
      $('#prediction-message').css('display', 'none');
      $('#prediction-cloud').removeClass(`${animationsArr[rndAnimIndex]}`);
    }, 6100);
  }
}
});


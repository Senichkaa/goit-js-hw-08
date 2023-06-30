import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(timeUpdate, 1000));

function timeUpdate(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

player
  .setCurrentTime(localStorage['videoplayer-current-time'])
  .then(data.seconds)
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });

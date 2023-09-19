const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on(
  'timeupdate',
  _.throttle(() => {
      player.getCurrentTime().then((seconds) =>
      localStorage.setItem("videoplayer-current-time", seconds))  
    };
  )
);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

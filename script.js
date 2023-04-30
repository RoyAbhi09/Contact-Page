
anime.timeline({loop: true})
  .add({
    targets: '.heading',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 1200,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.heading',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
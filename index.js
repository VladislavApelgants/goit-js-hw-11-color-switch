const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const refs = {
  start: document.querySelector('#start'),
  stop: document.querySelector('#stop'),
  bodyForColor: document.querySelector('body'),
};
const { start, stop, bodyForColor } = refs;



const randomIntegerFromInterval= (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const objectColorCreate = {
  forStopCounter: null,
  isActive: false,

  startBtn() {
      start.disabled = true;
      if (this.isActive) {
        return;
      }
    this.isActive = true;
      forStopCounter = setInterval(() => {
        randomIntegerFromInterval(0, colors.length - 1)
        bodyForColor.bgColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
      }, 1000)    
  },
  

  stopBtn() {
    start.disabled = false;
    this.isActive = false;
      clearInterval(forStopCounter)
  },

};



start.addEventListener('click', () => {
  objectColorCreate.startBtn()
});

stop.addEventListener('click', () => {
  objectColorCreate.stopBtn()
})
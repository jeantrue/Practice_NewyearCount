const second = 1000;

function countDown() {

  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const now = new Date().getTime();
  const newYear = new Date('December 31, 2022 23:59:59').getTime();
  const Timeleft = newYear - now;

  const dayBox = document.getElementById('daysCount');
  dayBox.innerText = Math.floor(Timeleft / day);

  const hourBox = document.getElementById('hoursCount');
  hourBox.innerText = Math.floor((Timeleft % day) / hour);

  const minBox = document.getElementById('minCount');
  minBox.innerText = Math.floor((Timeleft % hour) / minute);

  const secBox = document.getElementById('secCount');
  secBox.innerText = Math.floor(Timeleft % minute / second);

}

function run() {
  countDown();
  setInterval(countDown, second);
}
run();
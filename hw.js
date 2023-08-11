const timer = document.getElementById("timer-1")
const daysEl = document.querySelector("[data-value='days']")
const hoursEl = document.querySelector("[data-value='hours']")
const minsEl = document.querySelector("[data-value='mins']")
const secsEl = document.querySelector("[data-value='secs']")

class CountdownTimer{
    constructor({selector, targetDate}){
       this.selector = selector
       this.targetDate = targetDate
    }

    start(){
        setInterval(() => {
            const timeLeft = this.targetDate - new Date
            const time = this.getTimeComponents(timeLeft)
            this.updateClockFace(time)
        }, 1000);
    }

    pad(value) {
        return String(value).padStart(2, '0');
      }

    getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs, days };
   }
   
   updateClockFace({ hours, mins, secs, days }){
       daysEl.textContent = days
       hoursEl.textContent = hours
       minsEl.textContent = mins
       secsEl.textContent = secs
   }
}

const countdownTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2026'),
  });

countdownTimer.start()


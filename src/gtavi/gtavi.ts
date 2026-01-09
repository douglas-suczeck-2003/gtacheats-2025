import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-gtavi',
  templateUrl: 'gtavi.html',
  styleUrls: ['gtavi.css']
})
export class Gtavi implements OnInit, OnDestroy {

  targetDate = new Date('2026-11-19T00:00:00');

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  private intervalId: any;

  ngOnInit() {
    this.updateCountdown();

    this.intervalId = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  updateCountdown() {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    if (distance <= 0) {
      this.days = this.hours = this.minutes = this.seconds = 0;
      clearInterval(this.intervalId);
      return;
    }

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }
}

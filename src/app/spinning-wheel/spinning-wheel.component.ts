import { Component, OnInit } from '@angular/core';
declare const spin:any;

@Component({
  selector: 'app-spinning-wheel',
  templateUrl: './spinning-wheel.component.html',
  styleUrls: ['./spinning-wheel.component.scss']
})
export class SpinningWheelComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  title = 'spinning-wheel';

  spin() {
    const wheel = new Audio('../../assets/audio/SYYWGNR-prize-wheel.mp3');
    wheel.play();
    const box = document.getElementById('box') as HTMLElement;
    const element = document.getElementById('mainbox') as HTMLElement;
    let SelectedItem = '';

    const shuffle = (array: number[]) => {
      let currentIndex = array.length, randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[currentIndex], array[randomIndex]
        ];
      }
      return array;
    };

    let Reward_1 = shuffle([1890, 2250, 2610]);
    let Reward_2 = shuffle([1850, 2210, 2570]);
    let Reward_3 = shuffle([1770, 2130, 2490]);
    let Reward_4 = shuffle([1810, 2170, 2530]);
    let Reward_5 = shuffle([1750, 2110, 2470]);
    let Reward_6 = shuffle([1630, 1990, 2350]);
    let Reward_7 = shuffle([1570, 1930, 2290]);

    let results = shuffle([
      Reward_1[0],
      Reward_2[0],
      Reward_3[0],
      Reward_4[0],
      Reward_5[0],
      Reward_6[0],
      Reward_7[0]
    ]);

    if (Reward_1.includes(results[0])) SelectedItem = 'Reward 1';
    if (Reward_2.includes(results[0])) SelectedItem = 'Reward 2';
    if (Reward_3.includes(results[0])) SelectedItem = 'Reward 3';
    if (Reward_4.includes(results[0])) SelectedItem = 'Reward 4';
    if (Reward_5.includes(results[0])) SelectedItem = 'Reward 5';
    if (Reward_6.includes(results[0])) SelectedItem = 'Reward 6';
    if (Reward_7.includes(results[0])) SelectedItem = 'Reward 7';

    box.style.setProperty('transition', 'all ease 5s');
    box.style.transform = 'rotate(' + results[0] + 'deg)';
    element.classList.remove('animate');

    setTimeout(function () {
      element.classList.add('animate');
    }, 5000);

    setTimeout(function () {
      //alert
    }, 0);

    setTimeout(function () {
      box.style.setProperty('transition', 'initial');
      box.style.transform = 'rotate(90deg)';
    }, 6000);
  }
}

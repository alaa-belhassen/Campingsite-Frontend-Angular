import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";


gsap.set('#platform, #giftcontain, #bag, #cart', {
  visibility: 'visible'
});
// @ts-ignore
gsap.set('.baghandle', {
  transformOrigin: '20% 50%'
});

@Component({
  selector: 'app-shoploader',
  templateUrl: './shoploader.component.html',
  styleUrls: ['./shoploader.component.scss']
})



export class ShoploaderComponent implements OnInit {
  ngOnInit(): void {
    const master = gsap.timeline({ repeat: -1 });
    master.add(this.gift(), 'gift');
    master.add(this.bag(), 'bag');
    master.add(this.cart(), 'cart');  
  }


  // Setting initial visibility and transform origin
 // @ts-ignore

  // Gift animation function
  gift(): gsap.core.Timeline {
    const tl = gsap.timeline();
  
    tl.add('start');
    tl.fromTo('#gift', { y: -500 }, { y: 0, duration: 1, ease: 'bounce.out' }, 'start+=1');
    tl.fromTo('#giftshadow', { scale: 0, opacity: 0 }, { scale: 1, opacity: 0.5, duration: 0.8, ease: 'bounce.out' }, 'start+=1');
    tl.fromTo('#ribbon', { y: 0 }, { y: -50, duration: 0.5, ease: 'elastic.out(3, 0.3)' }, 'start+=0.85');
    tl.to('#ribbon', { y: 0, duration: 0.5, ease: 'elastic.out(1.75, 0.3)' }, 'start+=1.35');
    tl.to('#giftcontain', { opacity: 0, duration: 0.25, ease: 'sine.in' }, 'start+=3');
    tl.to('#giftshadow', { opacity: 0, duration: 0.1, ease: 'sine.in' }, 'start+=2.9');
  
    return tl;
  }
  
  // Bag animation function
  bag(): gsap.core.Timeline {
    const tl = gsap.timeline();
  
    tl.add('start2');
    tl.fromTo('#bagalone', { y: -500 }, { y: 0, duration: 1, ease: 'bounce.out' }, 'start2');
    tl.fromTo('#bagshadow', { scale: 0, opacity: 0 }, { scale: 1, opacity: 0.5, duration: 0.8, ease: 'bounce.out' }, 'start2');
    tl.fromTo('.baghandle', { scaleY: 0.5 }, { scaleY: 1, duration: 2, ease: 'elastic.out(3, 0.3)' }, 'start2');
    tl.to('#bagshadow', { opacity: 0, duration: 0.1, ease: 'sine.in' }, 'start2+=1.4');
    tl.to('#bag', { opacity: 0, duration: 1, ease: 'sine.in' }, 'start2+=1.5');
  
    return tl;
  }
  
  // Cart animation function
  cart(): gsap.core.Timeline {
    const tl = gsap.timeline();
  
    tl.add('start3');
    tl.fromTo('#cartalone', { y: -500 }, { y: 0, duration: 1, ease: 'bounce.out' }, 'start3');
    tl.fromTo('#cartshadow', { scale: 0, opacity: 0 }, { scale: 1, opacity: 0.5, duration: 0.8, ease: 'bounce.out' }, 'start3');
    tl.fromTo('#arrow', { y: -200, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'bounce.out' }, 'start3+=1');
    tl.to('#cartshadow', { opacity: 0, duration: 0.1, ease: 'sine.in' }, 'start3+=2.0');
    tl.to('#cart', { opacity: 0, duration: 1, ease: 'sine.in' }, 'start3+=2.1');
  
    return tl;
  }
  
  // Master timeline that repeats indefinitely

  
  // Uncomment to adjust playback speed or seek to a specific part of the animation
  // master.timeScale(0.3);
  // master.seek('cart');
  

}

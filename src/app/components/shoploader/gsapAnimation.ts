import { gsap } from "gsap";

// Setting initial visibility and transform origin
gsap.set('#platform, #giftcontain, #bag, #cart', {
  visibility: 'visible'
});
gsap.set('.baghandle', {
  transformOrigin: '20% 50%'
});

// Gift animation function
function gift(): gsap.core.Timeline {
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
function bag(): gsap.core.Timeline {
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
function cart(): gsap.core.Timeline {
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
const master = gsap.timeline({ repeat: -1 });
master.add(gift(), 'gift');
master.add(bag(), 'bag');
master.add(cart(), 'cart');
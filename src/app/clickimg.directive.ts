import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appClickimg]'
})
export class ClickimgDirective {

  constructor(private el:ElementRef) {

  }

  @HostListener('click')
  imageChange(){
    var src:any=this.el.nativeElement.src;
    var prev:any=document.getElementById("preview")
    prev.src=src
    var imageSlide=document.getElementsByClassName("img-slide")
    for (let i=0;i<imageSlide.length;i++){
      imageSlide[i].classList.remove("active")
    }
  this.el.nativeElement.parentElement.classList.add("active")

  }
}

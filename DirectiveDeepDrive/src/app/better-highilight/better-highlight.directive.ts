import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'blue';
  @Input() highlightColor: string = 'red';

  @HostBinding('style.backgroundColor')
  backgroundColor: string = 'blue';

  constructor(private eleref: ElementRef, private render: Renderer2) {}
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.render.setStyle(this.eleref.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(evenData: Event) {
    // this.render.setStyle(this.eleref.nativeElement, 'background-color', 'red');
    // this.backgroundColor = 'red';
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouselave(evenData: Event) {
    // this.render.setStyle(this.eleref.nativeElement, 'background-color', 'transparent');
    // this.backgroundColor = 'blue';
    this.backgroundColor = this.defaultColor;
  }
  
}

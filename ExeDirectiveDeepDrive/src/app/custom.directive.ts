import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]',
})
export class CustomDirective implements OnInit {
  newArray: {}[] = [];
  @Input()
  directiveText!: string;

  @Input()
  directiveColor!: string;

  constructor(private eleref: ElementRef, private render: Renderer2) {}
  ngOnInit() {
    this.newArray.push({
      color: this.directiveColor,
      text: this.directiveText,
    });

    this.render.setStyle(
      this.eleref.nativeElement,
      'background-color',
      this.directiveColor
    );
    console.log(this.newArray);
  }
}

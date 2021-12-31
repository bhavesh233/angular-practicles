import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy {
  @ViewChild('header')
  header!: { nativeElement: { textContent: string; }; };
  @ContentChild('contentParagraph')
  paragraph!: { nativeElement: { textContent: string; }; };
  @Input()
  element!: { type: string; name: string; content: string };
  @Input()
  name!: string;

  constructor() {
    console.log('constructor called');
  }
  ngOnDestroy(): void {
    console.log('destroyMethod Call');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
    console.log(
      'paragraph content :: ' + this.paragraph.nativeElement.textContent
    );
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }
  ngDoCheck() {
    console.log('ngDoCheck method Call');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Method');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnit method called');
    console.log('text content :: ' + this.header.nativeElement.textContent);
    console.log(
      'paragraph content :: ' + this.paragraph.nativeElement.textContent
    );
  }
}

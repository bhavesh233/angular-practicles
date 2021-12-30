import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    servercontent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    servercontent: string;
  }>();
  newServerName = '';
  // newServerContent = '';
  // newServerContent = '';
  @ViewChild('serverContentInput')
  serverContentInput!: ElementRef;
  
  constructor() {}

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      servercontent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      servercontent: this.serverContentInput.nativeElement.value,
    });
  }
}

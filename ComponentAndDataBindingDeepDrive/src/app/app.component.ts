import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'TestServer', content: 'Just atest' },
  ];

  onServerAdded(serverData: { serverName: string; servercontent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.servercontent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    servercontent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.servercontent,
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'changed';
  }
  onDestroy() {
    this.serverElements.splice(0, 1);
  }
}

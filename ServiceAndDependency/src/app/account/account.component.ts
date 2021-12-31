import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AccountService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService],
})
export class AccountComponent implements OnInit {
  @Input()
  account!: { name: string; status: string };
  @Input()
  id!: number;

  constructor(
    private logginService: LoggingService,
    private accountService: AccountService
  ) {}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id,status);
    this.accountService.statusUpdate.emit(status);
    // this.statusChanged.emit({ id: this.id, newStatus: status });
    // this.logginService.logStatusChange(status);
    // console.log('A server status changed, new status: ' + status);
  }
  ngOnInit() {}
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService],
})
export class NewAccountComponent implements OnInit {
  // @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(
    private logginService: LoggingService,
    private accountService: AccountService
  ) {

    accountService.statusUpdate.subscribe((status:string)=>alert('New Status : '+status))
  }

  onCreateAccount(accountName: string, accountStatus: string) {

    this.accountService.addAccount(accountName,accountStatus)

    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus,
    // });
    // this.logginService.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }

  ngOnInit(): void {}
}

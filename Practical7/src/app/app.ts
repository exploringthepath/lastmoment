import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { LowerCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { RouterOutlet } from "@angular/router";   

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [UpperCasePipe, LowerCasePipe, DatePipe, CurrencyPipe, RouterOutlet]
})
export class AppComponent {
  studentName: string = 'Vaishnavi Vinod Chogale';
  course: string = 'Artificial Intelligence and Machine Learning';
  todayDate: Date = new Date();
  fees: number = 55000;
progress: any;
}

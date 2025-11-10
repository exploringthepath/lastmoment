import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from "./student/student";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Component Communication Demo';
  messageToChild = 'Welcome to Angular Components!';
}
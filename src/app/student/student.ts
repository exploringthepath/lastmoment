import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrls: ['./student.css'],
})
export class StudentComponent {
  studentName: string = 'Vaishnavi Chogale';

  @Input() parentMessage: string = '';

}

import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../model/employee.model';
import { EmployeeService } from '../../services/employee.service';

//import * as url from "url";

@Component({
  selector: 'employee-list-igor',
  templateUrl: './employee-list.component.html',
  //template: '<h1>Inaczej HTML</h1>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  title: string = 'Employee list';
  //data$: Observable<EmployeeModel[] | null> = this._httpClient.get<EmployeeModel[]>('assets/data/employees.json');
  data$: Observable<EmployeeModel[] | null> = this._employeeService.getAll();
  constructor(private _employeeService: EmployeeService) {
  }

}

import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import {PersonModel} from "../../model/person.model";

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
  data$: Observable<PersonModel[] | null> = this._employeeService.getAll();
  constructor(private _employeeService: EmployeeService) {
  }

  delete(id: string)
  {
    this._employeeService.delete(id).subscribe();
    alert("User was successfully removed");
  }

}

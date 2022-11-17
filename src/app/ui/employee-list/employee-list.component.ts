import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeModel } from '../../model/employee.model';
import {HttpClient} from "@angular/common/http";
//import * as url from "url";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  title: string = 'Employee list';
  constructor(private _httpClient: HttpClient) {}
  data$: Observable<EmployeeModel[] | null> = this._httpClient.get<EmployeeModel[]>('assets/data/employees.json');
}

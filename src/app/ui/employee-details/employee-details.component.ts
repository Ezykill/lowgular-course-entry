import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable, switchMap} from 'rxjs';
import { EmployeeDetailsParamsModel } from '../../model/employee-details-params.model';
import { EmployeeModel } from '../../model/employee.model';
import { EmployeeService } from '../../services/employee.service';
import {map} from "rxjs/operators";
import {PersonModel} from "../../model/person.model";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailsComponent {

  readonly params$: Observable<EmployeeDetailsParamsModel> = this._activatedRoute.params.pipe(
    map(params => ( {id: params['id'] }))
  );

  readonly details$: Observable<PersonModel> = this._activatedRoute.params.pipe
  (switchMap(data => this._employeeService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _employeeService: EmployeeService) {
  }
}

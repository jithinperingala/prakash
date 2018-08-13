import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { ModalDirective } from 'angular-bootstrap-md';
import { EmployeeService } from 'src/app/modules/employee/shared/employee.service';

@Component({
  selector: 'app-emp-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.scss']
})
export class EmployeeSearchComponent implements OnInit {
  searchKey=""
  searchdata
  @ViewChild('basicModal') public autoShownModal: ModalDirective;
  constructor(private employeeSer: EmployeeService, private router: Router) { }

  ngOnInit() {
  }
  employeeToDelete
  getEmployee() {
    console.log(this.searchKey)
    console.log("after trin",this.searchKey)
    this.employeeSer.getEmployeeBysearchKey(this.searchKey).subscribe(res => {
      this.searchdata = res[0]

    })
  }

  DeleteEmployee() {

    this.employeeSer.DeleteEmployee(this.employeeToDelete.employee_id).subscribe(res => {
      console.log(res)
      this.autoShownModal.hide();
      let index = this.searchdata.findIndex(x => x.employee_id == this.employeeToDelete.employee_id);
      this.searchdata.splice(index, 1)
    })
  }

  editEmployee(id) {

    this.router.navigate(['employee/edit/', id])
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';


import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-docs-form',
  templateUrl: './docs-form.component.html',
  styleUrls: ['./docs-form.component.css']
})
export class DocsFormComponent implements OnInit {

  constructor() {
    this.masterSelected = false;
    this.checklist = [
      { id: 1, value: 'CRE Commitment Letter', isSelected: false },
      { id: 2, value: 'Document B', isSelected: true },
      { id: 3, value: 'Document C', isSelected: true },
      { id: 4, value: 'Document D', isSelected: false }
    ];
    this.checkedList = [];
    this.getCheckedItemList();
  }

  formTypes = ['Lending', 'Servicing', 'Deposits', 'Employee'];

  formSearchList: any = ['CRE Com'];
  loanNumSearchList: any = ['60-123456',]
  model = {};

  title = 'Select Documents';
  masterSelected: boolean;
  checklist: any;
  checkedList: any;

  submitted = false;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.formSearchList.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  searchLoanNum = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.loanNumSearchList.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  checkUncheckAll() {
    for (let i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }
  isAllSelected() {
    this.masterSelected = this.checklist.every(function (item: any) {
      return item.isSelected == true;
    });
    this.getCheckedItemList();
  }

  getCheckedItemList() {
    this.checkedList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if (this.checklist[i].isSelected)
        this.checkedList.push(this.checklist[i]);
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }

  ngOnInit() {
    // this.applicationService.getFormList().subscribe(data => {
    //   // console.log(data);
    //  // this.formList = data.autoDocs[0].formType;
    //   console.log(this.formList);
    // });
  }

}

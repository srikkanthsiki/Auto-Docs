import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-docs-form',
  templateUrl: './docs-form.component.html',
  styleUrls: ['./docs-form.component.css']
})
export class DocsFormComponent implements OnInit {
  formList:any;
  constructor(
    private applicationService:ApplicationService
  ) { }

  ngOnInit() {
    this.applicationService.getFormList().subscribe(data => {
      // console.log(data);
      this.formList = data.autoDocs[0].formType;
      console.log(this.formList);
    });
  }

}

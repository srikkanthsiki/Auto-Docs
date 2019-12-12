import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoDocsComponent } from './auto-docs.component';

describe('AutoDocsComponent', () => {
  let component: AutoDocsComponent;
  let fixture: ComponentFixture<AutoDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

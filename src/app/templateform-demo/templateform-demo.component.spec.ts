import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateformDemoComponent } from './templateform-demo.component';

describe('TemplateformDemoComponent', () => {
  let component: TemplateformDemoComponent;
  let fixture: ComponentFixture<TemplateformDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateformDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateformDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

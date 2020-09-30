import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanyInformationPage } from './company-information.page';

describe('CompanyInformationPage', () => {
  let component: CompanyInformationPage;
  let fixture: ComponentFixture<CompanyInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyInformationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

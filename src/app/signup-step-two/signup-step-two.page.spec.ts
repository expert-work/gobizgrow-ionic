import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupStepTwoPage } from './signup-step-two.page';

describe('SignupStepTwoPage', () => {
  let component: SignupStepTwoPage;
  let fixture: ComponentFixture<SignupStepTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupStepTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupStepTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

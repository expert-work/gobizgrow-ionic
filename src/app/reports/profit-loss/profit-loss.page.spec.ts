import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfitLossPage } from './profit-loss.page';

describe('ProfitLossPage', () => {
  let component: ProfitLossPage;
  let fixture: ComponentFixture<ProfitLossPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfitLossPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfitLossPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

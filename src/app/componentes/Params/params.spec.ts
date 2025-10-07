import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParamsComponent } from './params';

describe('Params', () => {
  let component: any;
  let fixture: ComponentFixture<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParamsComponent]  // funciona porque é standalone
    }).compileComponents();

    fixture = TestBed.createComponent(ParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RequestBarComponent } from './request-bar';

describe('RequestBarComponent', () => {
  let component: RequestBarComponent;
  let fixture: ComponentFixture<RequestBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

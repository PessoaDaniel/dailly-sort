import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigleComponent } from './sigle.component';

describe('SigleComponent', () => {
  let component: SigleComponent;
  let fixture: ComponentFixture<SigleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

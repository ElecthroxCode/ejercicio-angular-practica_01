import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotactoComponentComponent } from './contacto-component.component';

describe('CotactoComponentComponent', () => {
  let component: CotactoComponentComponent;
  let fixture: ComponentFixture<CotactoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CotactoComponentComponent]
    });
    fixture = TestBed.createComponent(CotactoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

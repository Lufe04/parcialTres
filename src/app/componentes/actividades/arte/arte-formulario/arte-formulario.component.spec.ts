import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArteFormularioComponent } from './arte-formulario.component';

describe('ArteFormularioComponent', () => {
  let component: ArteFormularioComponent;
  let fixture: ComponentFixture<ArteFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArteFormularioComponent]
    });
    fixture = TestBed.createComponent(ArteFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

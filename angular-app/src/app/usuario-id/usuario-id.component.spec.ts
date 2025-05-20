import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioIDComponent } from './usuario-id.component';

describe('UsuarioIDComponent', () => {
  let component: UsuarioIDComponent;
  let fixture: ComponentFixture<UsuarioIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioIDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nometela } from './nometela';

describe('Nometela', () => {
  let component: Nometela;
  let fixture: ComponentFixture<Nometela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nometela]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nometela);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

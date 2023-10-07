import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoArtistaComponent } from './info-artista.component';

describe('InfoArtistaComponent', () => {
  let component: InfoArtistaComponent;
  let fixture: ComponentFixture<InfoArtistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoArtistaComponent]
    });
    fixture = TestBed.createComponent(InfoArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

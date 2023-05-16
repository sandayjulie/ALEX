import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeriesDetalhePage } from './series-detalhe.page';

describe('SeriesDetalhePage', () => {
  let component: SeriesDetalhePage;
  let fixture: ComponentFixture<SeriesDetalhePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeriesDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoImages } from './no-images';

describe('NoImages', () => {
  let component: NoImages;
  let fixture: ComponentFixture<NoImages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoImages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoImages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

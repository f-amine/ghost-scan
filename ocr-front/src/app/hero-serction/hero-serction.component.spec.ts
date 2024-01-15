import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSerctionComponent } from './hero-serction.component';

describe('HeroSerctionComponent', () => {
  let component: HeroSerctionComponent;
  let fixture: ComponentFixture<HeroSerctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroSerctionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroSerctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

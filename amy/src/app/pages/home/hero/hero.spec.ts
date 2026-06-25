import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeHero } from './hero';
import { provideRouter } from '@angular/router';

describe('HomeHero Component', () => {
  let component: HomeHero;
  let fixture: ComponentFixture<HomeHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHero],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeHero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

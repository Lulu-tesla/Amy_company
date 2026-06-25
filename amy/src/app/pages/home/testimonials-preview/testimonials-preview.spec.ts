import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeTestimonialsPreview } from './testimonials-preview';
import { provideRouter } from '@angular/router';

describe('HomeTestimonialsPreview Component', () => {
  let component: HomeTestimonialsPreview;
  let fixture: ComponentFixture<HomeTestimonialsPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTestimonialsPreview],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeTestimonialsPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

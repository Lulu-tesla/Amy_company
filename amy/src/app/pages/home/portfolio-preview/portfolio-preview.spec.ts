import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePortfolioPreview } from './portfolio-preview';
import { provideRouter } from '@angular/router';

describe('HomePortfolioPreview Component', () => {
  let component: HomePortfolioPreview;
  let fixture: ComponentFixture<HomePortfolioPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePortfolioPreview],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePortfolioPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

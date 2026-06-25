import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeStatsPreview } from './stats-preview';
import { provideRouter } from '@angular/router';

describe('HomeStatsPreview Component', () => {
  let component: HomeStatsPreview;
  let fixture: ComponentFixture<HomeStatsPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeStatsPreview],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeStatsPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeProcessPreview } from './process-preview';
import { provideRouter } from '@angular/router';

describe('HomeProcessPreview Component', () => {
  let component: HomeProcessPreview;
  let fixture: ComponentFixture<HomeProcessPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeProcessPreview],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeProcessPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

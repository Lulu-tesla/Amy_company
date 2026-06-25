import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeContactPreview } from './contact-preview';
import { provideRouter } from '@angular/router';

describe('HomeContactPreview Component', () => {
  let component: HomeContactPreview;
  let fixture: ComponentFixture<HomeContactPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeContactPreview],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeContactPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

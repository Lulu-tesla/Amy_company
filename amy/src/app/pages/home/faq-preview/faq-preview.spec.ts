import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeFaqPreview } from './faq-preview';
import { provideRouter } from '@angular/router';

describe('HomeFaqPreview Component', () => {
  let component: HomeFaqPreview;
  let fixture: ComponentFixture<HomeFaqPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFaqPreview],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeFaqPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

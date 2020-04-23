import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsujetsComponent } from './listsujets.component';

describe('ListsujetsComponent', () => {
  let component: ListsujetsComponent;
  let fixture: ComponentFixture<ListsujetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsujetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsujetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

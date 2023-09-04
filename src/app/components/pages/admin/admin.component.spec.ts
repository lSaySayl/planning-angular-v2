import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store'; // Importa Store y StoreModule
import { AdminComponent } from './admin.component';
import { cardReducer } from 'src/app/state/reducers/card.reducers';
import { TableHeaderComponent } from '../../organisms/table-header/table-header.component';
import { PokerTableComponent } from '../../atoms/table/poker-table.component';
import { LoadingCardsComponent } from '../../atoms/loading-cards/loading-cards.component';
import { FichaComponent } from '../../atoms/ficha/ficha.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminComponent, TableHeaderComponent,PokerTableComponent,LoadingCardsComponent, FichaComponent],
      imports: [
        // Agrega StoreModule.forRoot() aquí si aún no está importado en tu proyecto
        StoreModule.forRoot({ 'cardReducer':cardReducer }),
      ],
    });
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

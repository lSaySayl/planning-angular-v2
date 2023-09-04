import { TestBed } from '@angular/core/testing';
import { ShareDataService } from './share-data.service';

describe('ShareDataService', () => {
  let service: ShareDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get inputCreateGame', () => {
    const testValue = 'Test Game';
    service.setInputCreateGame(testValue);
    const result = service.getInputCreateGame();
    expect(result).toEqual(testValue);
  });

  it('should set and get inputCreatePlayer', () => {
    const testValue = 'Test Player';
    service.setInputCreatePlayer(testValue);
    const result = service.getInputCreatePlayer();
    expect(result).toEqual(testValue);
  });

  it('should set and get isPlayer', () => {
    const testValue = true;
    service.setIsPlayer(testValue);
    const result = service.getIsPlayer();
    expect(result).toEqual(testValue);
  });
});

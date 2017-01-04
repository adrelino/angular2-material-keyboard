/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MdKeyboardService } from './md-keyboard.service';

describe('MdKeyboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MdKeyboardService]
    });
  });

  it('should ...', inject([MdKeyboardService], (service: MdKeyboardService) => {
    expect(service).toBeTruthy();
  }));
});

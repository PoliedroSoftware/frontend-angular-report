import { TestBed } from '@angular/core/testing';

import { FileDownloadServiceTsService } from './file-download.service.ts.service';

describe('FileDownloadServiceTsService', () => {
  let service: FileDownloadServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileDownloadServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

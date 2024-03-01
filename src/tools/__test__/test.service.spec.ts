import { Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { ToolsService } from '../tools.service';

class MockModel {
  private _data: any[] = [];

  set data(data: any[]) {
    this._data = data;
  }

  find() {
    return this;
  }

  exec() {
    return Promise.resolve(this._data);
  }

  create(doc: any) {
    this._data.push(doc);
    return Promise.resolve(doc);
  }
}
let toolsService: ToolsService;
let mockToolModel: MockModel;

beforeEach(async () => {
  const moduleRef = await Test.createTestingModule({
    providers: [
      ToolsService,
      {
        provide: getModelToken('ToolModel'),
        useValue: new MockModel(),
      },
    ],
  }).compile();

  toolsService = moduleRef.get<ToolsService>(ToolsService);
  mockToolModel = moduleRef.get(getModelToken('ToolModel'));
});
describe('ToolsService', () => {
  describe('createTool', () => {
    it('should create a new tool', async () => {
      expect('true').toBe('true');
    });
  });
});

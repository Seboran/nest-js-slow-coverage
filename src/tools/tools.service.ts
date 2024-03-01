import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ToolData } from './tools.dto';
import { ToolModel } from '../schemas/tool.schema';

@Injectable()
export class ToolsService {
  constructor(
    @InjectModel(ToolModel.name) private toolModel: Model<ToolModel>,
  ) {}

  createTool(createToolDto: ToolData): Promise<ToolModel> {
    return this.toolModel.create(createToolDto);
  }

  findAllTools(): Promise<ToolModel[]> {
    return this.toolModel.find().exec();
  }
}

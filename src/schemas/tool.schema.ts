import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ToolDocument = HydratedDocument<ToolModel>;

@Schema()
export class ToolModel {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  prompt: string;

  @Prop({ required: false })
  sources: string[];
}

export const ToolSchema = SchemaFactory.createForClass(ToolModel);

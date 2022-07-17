import { getModelForClass, prop } from "@typegoose/typegoose";

class TaskClass {
  @prop({
    required: true,
    unique: true,
    trim: true,
  })
  public name!: string;

  @prop({
    trim: true,
  })
  public description?: string;

  @prop({
    default: false,
  })
  public done?: boolean;
}

const TaskModel = getModelForClass(TaskClass, {
  schemaOptions: {
    timestamps: true,
    versionKey: false,
  },
});

export default TaskModel;

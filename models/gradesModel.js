//criação do modelo
export default (mongoose) => {
  const accountSchema = mongoose.Schema({
    name: {
      type: String,
      require: true,
    },
    subject: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    value: {
      type: Number,
      require: true,
      min: 0,
    },
    lastModified: {
      type: Date,
      default: Date.now,
    },
  });
  const Grades = mongoose.model('grades', accountSchema);
  return Grades;
};

const { Schema, model, Types } = require("mongoose");
const reactionSchema = require('./Reaction.js');
// const dateFormat = require("../utils/dateFormat");

const ThoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
  
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => new Date(timestamp).toLocaleDateString(),
      },
  
      userId: {
        type: Types.ObjectId,
        required: true,
        ref: "User",
      },
  
      reactions: [reactionSchema],
    },
    {
      toJSON: {
        virtuals: true,
        getters: true,
      },
      id: false,
    }
  );






ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
import mongoose from "mongoose";

const urlsSchema = new mongoose.Schema(
    {
        id: {type: String},
        hash: {type: String, require: true},
        shortURL: {type: String, require: true},
        originURL: {type: String, require: true}
    }

)

const urlModel = mongoose.model("urls", urlsSchema);

export default urlModel;
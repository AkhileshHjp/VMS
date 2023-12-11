import mongoose, { Schema } from "mongoose";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {

        username: {
            String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        fullname: {
            String,
            required: true,
            trim: true,
            index: true,
        },

        avatar: {
            String,//cloudniary url
            required: true,
        },

        coverImage: {
            String,//cloudniary url
        },

        watchHistory: [
            {
                type: "Schema.Types.ObjectId",
                ref: "video"
            }
        ],

        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }

    },
    {
        timestamps: true
    }
)


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.genrateAccessToken = function () {
    return Jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        "scrtrtkey",
        { expiresIn: '2m' }

    )
}
userSchema.methods.refreshToken = function () {
    return Jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        "scrtrtkeyre",
        { expiresIn: '1d' }

    )
}

export const User = mongoose.model("User", userSchema)


// 7:18

import mongoose from 'mongoose'

// Interface that describes the properties when creating a new User
interface UserAttributes {
    email: string,
    password: string
}

// Interface that describes the properties of User Model
interface UserModel extends mongoose.Model<UserDoc>{
    build(attributes: UserAttributes): UserDoc
}

// Interface that describes the properties of a User Doc
interface UserDoc extends mongoose.Document {
    email: string,
    password: string 
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.build = (attributes: UserAttributes) => {
    return new User(attributes)
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema)

export { User }
import {GraphQLNonNull, GraphQLID} from 'graphql'
import {UserModel, UserType} from './models'

const user = {
    type: UserType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, args, options){
        return UserModel.findById(args.id).exec()
    }
}

export default {
    user: user
}
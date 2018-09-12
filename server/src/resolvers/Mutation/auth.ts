import * as bcrypt from 'bcryptjs'
import { AuthError, Context } from '../../utils'
import * as jwt from 'jsonwebtoken'

export const auth = {

    //signup mutation which return token and user 
    async signup(parent, args, context:Context, info) {
        const password = await bcrypt.hash(args.password, 10)
        const user = await context.db.mutation.createUser({
            data:{...args, password}
        })

        return {
            token: jwt.sign( {userId: user.id} , process.env.APP_SECRET),
            user,
        }
    },

    //loging mutation which returns token based on userid and user
    async login(parent, args, context: Context, info) {
        const user = await context.db.query.user({where: {email: args.email}})
        const valid = await bcrypt.compare(args.password, user? user.password: '')

        if (!valid || !user) {
            throw new AuthError()
            
        }

        return {
            token: jwt.sign({userId: user.id}, process.env.APP_SECRET),
            user
        }
    }

}


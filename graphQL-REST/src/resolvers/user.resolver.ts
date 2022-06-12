import {Query} from "type-graphql"
import { User } from "../schema/user.schema"


export default class UserResolver{
    @Query(()=>User)
    me(){
        return{
            _id:"123",
            name:"Mehrdad",
            email:"me@gmail.com"
        }
    }

}
import { Field } from "type-graphql";
import {
    getModelForClass,
    prop,
    pre,
    ReturnModelType,
    queryMethod,
    index,
  } from "@typegoose/typegoose";

export class User{
    @Field(()=>String)
    _id:string

    @Field(()=>String)
    @prop({ required: true })
    name: string;

    @Field(() => String)
    @prop({ required: true })
    email: string;
  
    @prop({ required: true })
    password: string;
}
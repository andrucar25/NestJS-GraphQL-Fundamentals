import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType({description: 'Todo quicl aggregations'})
export class AggregationsType {
  @Field(() => Int)
  total: number;
  
  @Field(() => Int)
  pending: number;

  @Field(() => Int)
  completed: number

  @Field(() => Int, {deprecationReason: 'Most use completed instead'})
  totalTodoscompleted: number
}
export interface IOrderCreate {
  [key: string]: string | undefined;
  order: string,
  restaurantId:string | undefined,
  userId:string
}

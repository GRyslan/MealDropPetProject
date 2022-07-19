import { rest } from 'msw'

let text={
  message:"SERVER",
  token:"TOKEN",
  user:{name:"SD",email:"DS@DSD.com"}
}
export const handlers = [
  rest.post(`${process.env.REACT_APP_MealDrop_Api + 'user'}/login`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(text))
  }),
  rest.get(`${process.env.REACT_APP_MealDrop_Api + 'user'}/`, (req, res, ctx) => {
    return res(ctx.status(403), ctx.json({data:{name:"SD",email:"DS@DSD.com"}}))
  }),
]

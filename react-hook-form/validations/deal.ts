import { z } from "zod";

export const DealSchema=z.object({
    name:z.string({ message:"Name is Required" }).min(5, 'Name should had at least 5 characters'),
    link:z.string({ message:'Link is required' }).url('Link must Valid Url'),
    couponCode:z.string({ message:'Coupon code is required' }).min(5, 'Name should had at least 5 characters'),
    discount:z.coerce
    .number({message:"Discount pencentage is required"})
    .min(1, 'Discont percentage must be greater than 1')
    .max(100, 'Discount percentage must be less than or equal to 100')
})
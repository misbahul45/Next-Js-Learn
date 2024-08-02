'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { DealSchema } from '@/validations/deal';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type DealFormType = z.infer<typeof DealSchema>;

const Page = () => {
  const form = useForm<DealFormType>({
    resolver: zodResolver(DealSchema),
    defaultValues: {
      name: '',
      link: '',
      couponCode: '',
      discount: 0
    }
  });

  const onSubmit = (data: DealFormType) => {
    console.log(data);
  };

  return (
    <div className='w-full max-w-xl mx-auto py-8'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text--xl font-semibold text-slate-100'>Username</FormLabel>
                <FormControl>
                  <Input placeholder="This is your public display name" {...field}  className='text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-800' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text--xl font-semibold text-slate-100'>Links</FormLabel>
                <FormControl>
                  <Input placeholder="Links...." {...field}  className='text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-800' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="couponCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text--xl font-semibold text-slate-100'>Coupon Code</FormLabel>
                <FormControl>
                  <Input placeholder="Coupon Code" {...field}  className='text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-800' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="discount"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text--xl font-semibold text-slate-100'>Discount</FormLabel>
                <FormControl>
                  <Input placeholder="This is your discount " {...field}  className='text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-800' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className='w-full bg-blue-800 zzzzz'>Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default Page;

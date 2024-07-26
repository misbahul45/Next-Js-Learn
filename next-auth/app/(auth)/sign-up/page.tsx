'use client'
import { signUpActions } from '@/actions/auth-action'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { SignUpInitialValues, SignUpSchema, TypeSignUpFields } from '@/schema/zod.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from "@/components/ui/input"
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import Loading from '@/components/auth/Loading'
import { useRouter } from 'next/navigation'
import AlertSignUp from '@/components/auth/AlertSignUp'
import Link from 'next/link'

const SignUpPage = () => {
    const router=useRouter()

    const [isError, setIsError]=React.useState(false)
    const [isLoading, setIsLoading]=React.useState(false)
    const [showPassword, setShowPassword] = React.useState(false)


    const form = useForm<TypeSignUpFields>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: SignUpInitialValues
    })

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev)
    }

    const onSubmit = async (values: TypeSignUpFields) => {
        setIsLoading(true)
        const{ error, user }=await signUpActions(values)
        if(error && !user){
            setIsError(error)
        }
        setIsLoading(false)
        form.reset({
            username:'',
            email:'',
            password:'',
            confirmPassword:''
        })
        if(!error){
            router.push('/sign-in')
        }
    }

    useEffect(()=>{
        if(isError){
            setTimeout(()=>{
                setIsError(false)
            }, 2000)
        }
    },[isError])

    return (
        <div className='mx-auto w-full max-w-lg py-4'>
            <h1 className='text-4xl text-center font-bold text-slate-800'>Welcome</h1>
            {/*Form Create User*/}
            <Form {...form}>
                <form onSubmit={form.handleSubmit((data) => onSubmit(data))} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username<span className='text-red-700 dark:text-pink-700'>*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Your username" {...field} aria-label="Username" />
                                </FormControl>
                                <FormMessage>{form.formState.errors.username?.message}</FormMessage>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email<span className='text-red-700 dark:text-pink-700'>*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Your email" {...field} aria-label="Email" />
                                </FormControl>
                                <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password<span className='text-red-700 dark:text-pink-700'>*</span></FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input 
                                            type={showPassword ? "text" : "password"} 
                                            placeholder="Password" 
                                            {...field} 
                                            aria-label="Password"
                                        />
                                        <button 
                                            type="button" 
                                            onClick={togglePasswordVisibility} 
                                            className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                </FormControl>
                                <FormMessage>{form.formState.errors.password?.message}</FormMessage>
                                <ul className="text-sm text-gray-600 mt-1">
                                    <li>Minimum 8 characters</li>
                                    <li>At least one uppercase letter</li>
                                </ul>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password<span className='text-red-700 dark:text-pink-700'>*</span></FormLabel>
                                <FormControl>
                                    <Input 
                                        type={showPassword ? "text" : "password"} 
                                        placeholder="Confirm password" 
                                        {...field} 
                                        aria-label="Confirm Password"
                                    />
                                </FormControl>
                                <FormMessage>
                                    {form.formState.errors.confirmPassword?.message || 
                                    (form.formState.errors.root?.message && "Passwords do not match")}
                                </FormMessage>
                            </FormItem>
                        )}
                    />
                    <Button type="submit" variant={'default'} className='block ml-auto'>{isLoading?
                        <div className='flex gap-2 items-center'>
                            <Loading size='small' />
                            <span>Loading...</span>
                        </div>
                        :
                        <span>Create Account</span>
                        }
                    </Button>
                </form>
            </Form>
            <h1 className='text-center mt-4'>Have an account? <Link href="/sign-in" className='text-blue-500 font-semibold border-b-2 hover:text-blue-700'>Sign In</Link></h1>
            {isError&&(
                <div className="absolute top-10 right-6">
                    <AlertSignUp isError={isError} />
                </div>
            )}
        </div>
    )
}

export default SignUpPage

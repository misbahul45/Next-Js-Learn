'use client'
import { signInActions } from '@/actions/auth-action'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from "@/components/ui/input"
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import Loading from '@/components/auth/Loading'
import { useRouter } from 'next/navigation'
import AlertSignUp from '@/components/auth/AlertSignUp'
import { SignInInitialValues, SignInSchema, TypeSignInFields } from '@/schema/zod.schema'
import Link from 'next/link'
import OauthButton from '@/components/auth/OauthButton'

const SignInPage = () => {
    const router=useRouter()

    const [isError, setIsError]=React.useState(false)
    const [isLoading, setIsLoading]=React.useState(false)
    const [showPassword, setShowPassword] = React.useState(false)

    const form = useForm<TypeSignInFields>({
        resolver: zodResolver(SignInSchema),
        defaultValues: SignInInitialValues
    })

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev)
    }

    const onSubmit = async (values: TypeSignInFields) => {
        setIsLoading(true)
        const{ user, error }=await signInActions(values)
        if(error && !user){
            setIsError(error)
        }
        setIsLoading(false)
        form.reset({
          emailOrUsername:'',
          password:''
        })
        if(!error){
            router.push('/')
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
            <OauthButton />
            {/*Form Create User*/}
            <Form {...form}>
                <form onSubmit={form.handleSubmit((data) => onSubmit(data))} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="emailOrUsername"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email or Username <span className='text-red-700 dark:text-pink-700'>*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="email or username" {...field} aria-label="Email" />
                                </FormControl>
                                <FormMessage>{form.formState.errors.emailOrUsername?.message}</FormMessage>
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
                            </FormItem>
                        )}
                    />
                    <Button type="submit" variant={'default'} className='w-full'>{isLoading?
                        <div className='flex gap-2 items-center'>
                            <Loading size='small' />
                            <span>SignIn...</span>
                        </div>
                        :
                        <span>Login</span>
                        }
                    </Button>
                </form>
            </Form>
            <h1 className='text-center mt-4'>Don&apos;t have an account? <Link href="/sign-up" className='text-blue-500 font-semibold border-b-2 hover:text-blue-700'>Sign Up</Link></h1>
            {isError&&(
                <div className="absolute top-10 right-6">
                    <AlertSignUp isError={isError} />
                </div>
            )}
        </div>
    )
}

export default SignInPage

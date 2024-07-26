import React from 'react'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { AlertCircle } from 'lucide-react'

interface Props{
    isError:boolean
}

const AlertSignUp = ({ isError }:Props) => {
  return (
    <Alert variant={isError?'destructive':'default'}>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{isError?"Error":"Successed"}</AlertTitle>
      <AlertDescription>
        {isError?"Try again, something is wrong":"Successfully created User"}
      </AlertDescription>
    </Alert>
  )
}

export default AlertSignUp

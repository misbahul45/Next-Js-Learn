interface Props{
    size:'small' | 'medium' | 'large'
}

const sizes={
    small:'size-5 border-t-2',
    medium:'size-12 border-t-4',
    large:'size-20 border-t-8'
}
const Loading = ({ size }:Props) => {
  return (
    <div className={`${sizes[size]} border-t-slate-500 dark:border-t-slate-900 rounded-full animate-spin`}  />
  )
}

export default Loading

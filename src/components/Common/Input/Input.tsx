import { IInput } from './Input.interface'

const Input = ({children, ...props}: IInput) => {
  return (
	<input {...props}>{children}</input>
  )
}


export default Input
import React, { FC, PropsWithChildren } from "react"

type Props = PropsWithChildren<{
  onClick: () => void
}>

const Button: FC<Props> = ({ onClick, children }) => (
  <button onClick={onClick} type="button">{children}</button>
)

export default Button

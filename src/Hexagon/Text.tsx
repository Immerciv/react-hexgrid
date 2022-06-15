import * as React from "react"

export type TextProps = {
  children: string | React.ReactNode | React.ReactNode[]
  x?: string | number
  y?: string | number
  className?: string
}

// TODO Text is a separate component so that it could wrap the given text inside the surrounding hexagon
export function Text(props: TextProps) {
  const { children, x, y, className } = props
  return (
    <text
      x={x || 0}
      y={y ? y : "0.3em"}
      className={className}
      textAnchor="middle"
    >
      {children}
    </text>
  )
}

export default Text

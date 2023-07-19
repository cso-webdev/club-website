"use client"

import * as React from "react"
import { useDencrypt } from "use-dencrypt-effect"

type Props = {}

export default function Title({}: Props) {
  const [value, setValue] = useDencrypt("____________", {
    chars: "_13njfwe",
    interval: 50,
  })

  React.useEffect(() => {
    setValue("TAMS WEB DEV")
  }, [])

  return <div>{value}</div>
}

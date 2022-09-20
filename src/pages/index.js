import * as React from "react"
import useGet from "../../hook/useGet"

const IndexPage = () => {

  const { data, loading } = useGet(() => {
    return "Hello"
  }, [])

  console.log(data, loading, "*****")

  return <h1>{data.toString()}</h1>
}

export default IndexPage

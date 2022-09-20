import * as React from "react"
import useGet from "../../hook/useGet"

const NotFoundPage = () => {
  // const { data, loading } = useGet(() => {
  //   return "Books"
  //   }, [])
 

  const { data, loading } = useGet( () => {
    return "Hello"
  }, [])

  return <h1>{data}</h1>
}

export default NotFoundPage

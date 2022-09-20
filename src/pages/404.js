import * as React from "react"
// import useGet from "../../hook/useGet"

const NotFoundPage = () => {
  const { data, loading } = useGet(() => {
    return "Books"
    }, [])
}

export default NotFoundPage

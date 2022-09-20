import * as React from "react"
// import useGet from "../../hook/useGet"

const IndexPage = () => {

  const { data, loading } = useGet(() => {
    return "Hello"
    }, [])

}

export default IndexPage

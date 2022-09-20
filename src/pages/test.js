import * as React from "react"
import useGet from "../../hook/useGet"
import axios from "axios";

const IndexPage = () => {

    const fetch = async () =>  {

        const result = (await axios.get('./api/gatsby-func'));
        return result

    }
    async function myFunction(){
        var feed = await fetch();
        return feed
     }
     const result = myFunction()
   console.log(result)
  const { data, loading } = useGet(() => {
    return "Book"
  }, [])

  console.log(data, loading, "*****")

  return <h1>{data}</h1>
}

export default IndexPage

export default function handler(req, res) {
    if (req.method === `GET`) {
    res.setHeader("Access-Control-Allow-Origin", "*")
      res.send(`Hello, I work!`)
    } else {
        res.send(`Hello, I am not a get request!`)
    }
  }
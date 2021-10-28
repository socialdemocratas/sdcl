import { useEffect  } from "react"
import { Typography } from "@mui/material"


export default function Home({ setTitle }) {

  setTitle('Socialdemócratas de Chile')

  return (
    <div >
      <Typography variant="h1">Socialdemócratas de Chile</Typography>
      
    </div>
  )
}

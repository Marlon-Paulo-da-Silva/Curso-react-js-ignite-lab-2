import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { Event } from "./Pages/Event";

import { client } from "./lib/apollo"
import { Sidebar } from "./Components/Sidebar";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title

      teacher {
        name
        bio
        avatarURL
      }
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {

  return (
    <>
      <Event></Event>
      
    </>
  )
}

export default App

import { useState } from 'react'
import { Button } from "@/components/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center h-screen'>
      <Button onClick={() => setCount(count + 1)}>Count is {count}</Button>
    </div>
  )
}

export default App

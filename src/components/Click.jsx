import React from 'react'
import ClickSpark from './React-bits-Components/ClickSpark'

function Click() {
  return (
    <div className='absolute h-full w-full'>
        <ClickSpark
  sparkColor='#fff'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>
    </ClickSpark>
    </div>
  )
}

export default Click
import React from 'react'
import FlickeringGrid from '../components/aceternityUi/FlickeringGrid'

const Home = () => {
  return (
    <FlickeringGrid
    className="z-0 absolute inset-0 size-full"
    squareSize={8}
    gridGap={6}
    color="#6B7280"
    maxOpacity={0.2}
    flickerChance={0.1}
    height={800}
    width={800}
  />
  )
}

export default Home
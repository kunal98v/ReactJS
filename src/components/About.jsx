import React from 'react'
import { useParams } from 'react-router-dom';


export const About = () => {

    const {name} = useParams();
    console.log(name)
  return (
    <div>About</div>
  )
}

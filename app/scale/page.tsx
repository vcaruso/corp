import React from 'react'
import scaleImg from 'public/images/scale.jpg';
import Hero from '@/components/Hero';

export default function ScalePage() {
  return (
    <Hero imgData={scaleImg} imgAlt='steel factory' title='Scale your app to infinity.' />
  )
}

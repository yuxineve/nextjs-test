"use client"
import React from 'react'
import useSWR from 'swr'

export default function Test() {
  const fetcher = () => fetch('https://api.gugudata.com/location/chinaregions/demo').then(r => r.json())
  const {data, isLoading, isValidating} = useSWR('/anita', fetcher)
  console.log(data, isLoading, isValidating);
  return (
    <div>
      ttt
    </div>
  )
}

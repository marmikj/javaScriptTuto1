import React from 'react'
import useSWR from 'swr'

const fetcher = async () => {
    const response = await fetch('http://localhost:4000/dashboard')
    const data = response.json()
    return data
}
function DashboardSwr(){
   const {data,error}= useSWR('dashboard',fetcher)
   if(error) return 'an error occurred'
   if(!data) return 'Loading...'


   return (
    <div>
      <h2>dashboard</h2>
      <h2>Posts:{data.post}</h2>
      <h2>Likes:{data.likes}</h2>
      <h2>Followers:{data.followers}</h2>
      <h2>Following:{data.following}</h2>
    </div>
  );
}

export default DashboardSwr
import axios from 'axios';

async function getData(){
  const res=await fetch('http://localhost:3001/api/data')

  return res.json()
}

export default async function TestPage() {

  const tickets=await getData()
  console.log(tickets)
  return (
    <div>
      <h1 className='text-white'>Next.js API Data</h1>
      <p className='text-white'>{tickets.message}</p>
    </div>
  );
}



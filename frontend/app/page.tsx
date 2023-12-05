"use client"

import { GreetingRequest, GreetingResponse } from '@/generated'
import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';

export default function Home() {

  const [name, setName] = useState<string>("")
  const [greeting, SetGreeting] = useState<string>("")

  function handleClick(){

    const postData : GreetingRequest = {name: name};

    try {
      axios.post("http://localhost:1323/greeting", 
      postData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response: AxiosResponse<GreetingResponse>) => {
        const responseData: GreetingResponse = response.data;
        SetGreeting(responseData.greeting ?? '');
      });

    } catch (error) {
      console.error('POSTエラー:', error);
      throw error;
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>){
    setName(event.target.value);
  }



  return (
    <>

      <label>名前<input type='text' onChange={handleChange}></input></label>
      <button onClick={handleClick}>送信</button>
      <span>{greeting}</span>
    </>
  )
}

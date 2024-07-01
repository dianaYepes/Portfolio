import React from 'react'
import { useState,useRef } from 'react'
import emailjs from '@emailjs/browser'

import {styles} from "../styles"
import {slideIn} from "../utils/motion"

const Contact = () => {
  const formRef = useRef()
  const [form,setForm] = useState({
    name:'',
    email:'',
    message:''
  })
  const [loading,setLoading] = useState(false)

  const handleChange = (e)=> {
    const {name,value} = e.target
    setForm({...form,[name]:value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    setLoading(true);
    
    emailjs.send('service_d5fw5as','template_2uyiuof',
      {from_name: form.name,
        to_name: 'Diana Yepes',
        from_email: form.email,
        to_email:'dianayepes181345@gmail.com',
        message:form.message
      },
      'XnutzLgwzED8rbv2a')
      .then(()=>{
        setLoading(false)
        alert('Thank you. I will get back to you as soon as possible.');
        setForm({
          name:'',
          email:'',
          message:''
        })
      },(error)=>{
          setLoading(false)
          console.log(error)
          alert('Something went wrong')
      })
  }


  return (
    
<div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden mb-32 '>
      <div className='contact'>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <form ref={formRef}
                onSubmit={handleSubmit}
                className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-secondary  font-medium mb-4 font-mono'>Your Name</span>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?" 
                  className='bg-black py-4 px-6 placeholder:text-amber-100 placeholder:text-opacity-60 text-amber-100 text-opacity-60 rounded-lg outlined-none border-none font-medium'
                >
                </input>
            </label>
            <label className='flex flex-col'>
              <span className='text-secondary  font-medium mb-4 font-mono'>Your Email</span>
                <input
                  type='text'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?" 
                  className='bg-black py-4 px-6 placeholder:text-amber-100 placeholder:text-opacity-60 text-amber-100 text-opacity-60 rounded-lg outlined-none border-none font-medium'
                >
                </input>
              
            </label>
            <label className='flex flex-col'>
              <span className='text-secondary font-medium mb-4 font-mono'>Your Message</span>
                <textarea
                  rows="7"
                  type='text'
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What would you like to tell me?" 
                  className='bg-black py-4 px-6 placeholder:text-amber-100 placeholder:text-opacity-60 text-amber-100 text-opacity-60 rounded-lg outlined-none border-none font-medium'
                >
                </textarea>
              
            </label>
            <button type='submit' className='bg-black py-3 px-8 outline-none w-fit   text-amber-100 text-opacity-60 font-mono shadow-md shadow-primary '>
              {loading ? 'Sending...': 'Send'}
            </button>

          </form>

      </div>
      

    </div>


  )
}

export default Contact


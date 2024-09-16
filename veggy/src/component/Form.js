import React from 'react'

const Form = () => {
  return (
    <div>
      <div className="form">
      <form>
        {/* <lable className= " lable ">Your Name</lable> */}
        <input type="text" placeholder="Your name"/>
        {/* <lable className= " lable ">Email</lable> */}
        <input type="email" placeholder="Email"/>
        {/* <lable className= " lable ">Subject</lable> */}
        <input type="text" placeholder="Your subject"/>
        {/* <lable className= " lable ">Your Name</lable> */}
        <textarea rows={6} placeholder="Type your message / Complaint"></textarea>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>
  ) 
}

export default Form

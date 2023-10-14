"use client"
import './UserProfileCard.css'
import Image from 'next/image'

export default function UserProfileCard({Data}) {

    console.log(Data);

  return (

    <div className='randomuser-card'>
        <div className='image-container'>
            <img src={Data[0].picture.large} />
        </div>

        <div className='randomuser-details'>
        <div >
            <h1>Name</h1>
            <h3>Title : {Data[0].name.title}</h3>
            <h3>First Name : {Data[0].name.first}</h3>
            <h3>Last Name : {Data[0].name.last}</h3>
        </div>

        <div>
            <h1>Gender</h1>
            <h3>{Data[0].gender}</h3>
        </div>

        <div>
            <h1>Phone</h1>
            <h3>{Data[0].phone}</h3>
        </div>

        <div>
            <h1>Image Sourse</h1>
            <h3><a>{Data[0].picture.large}</a></h3>
        </div>

        <div>
            <h1>Email</h1>
            <h3>{Data[0].email}</h3>
        </div>

        <div>
            <h1>Date of Birth</h1>
            <h3>{Data[0].dob.date}</h3>
            <h3>Age : {Data[0].dob.age}</h3>
        </div>

        <div>
            <h1>Login Credientials</h1>
            <h3>Username : {Data[0].login.username}</h3>
            <h3>Password : {Data[0].login.password}</h3>
        </div>

        <div>
            <h1>Location</h1>
            <h3>City : {Data[0].location.city}</h3>
            <h3>Country : {Data[0].location.country}</h3>
            <h3>State : {Data[0].location.state}</h3>
        </div>

        <div>
            <h1>Address</h1>
            <h3>Street Name :  {Data[0].location.street.name}</h3>
            <h3>Street Number : {Data[0].location.street.number}</h3>
            <h3>Postcode : {Data[0].location.postcode}</h3>
            <h3>Timezone : {Data[0].location.timezone.offset}</h3>
        </div>

        </div>


       
                
    </div>
  )
}
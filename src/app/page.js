import "./page.css"

import Card from "../components/Cards/Card"

export default function MainPage() {
  
  return (
    <div className="mainpage">

      <div className="mainpage-header">
        <h1>Feeling Bored ? </h1>
        <p>Here are some Fun APIs to play with</p>
      </div>

      <div className='card-container'>
    
          <Card
            title={'Get Random Activities'}
            Description={'Get Random Activities from Bored API. You can also filter the activities by type and price.'}
            link={"/boredapi"}
          />

          <Card
            title={'Make Random User'}
            Description={'Make Random User from RandomUser.me API. You will get a dummy user with a name, profile , email, phone number, and address.'}
            link={"/randomuser"}
          />

          <Card
            title={'Get Random Dog Images'}
            Description={'Get Random Dog Images from Dog.Ceo API. You can make a gallery of these Cute images.'}
            link={"/dogapi"}
          />

          <Card
            title={'Get Random Cat Facts'}
            Description={'Get Random Cat Facts from CatFact.Ninja API. You can make a List os these Fun facts.'}
            link={"/catapi"}
          />

          <Card
            title={'Scan Your Name'}
            Description={'Get Information Related your Name using API from genderize.io and nationalize.io.'}
            link={"/nameapi"}
          />

          <Card
            title={'Create Memes'}
            Description={'Get Random Memes from ImgFlip API. You can also make your own memes.'}
            link={"/memeapi"}
          />

      </div>
    </div>
    
  )
}

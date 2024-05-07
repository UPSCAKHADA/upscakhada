
import AboutUs from './homepage/about'
import AppFeatures from './homepage/appfeature'
import Banner from './homepage/banner'
import ContactUs from './homepage/contact'
//import Courses from './homepage/courses'
import NewlyAdded from './homepage/newlyAdded'
import Services from './homepage/services'
import WhyChooseUs from './homepage/whychoose'

export default function Home() {
  return (
   <div className='inner_body'>
    <Banner/>
    <AboutUs/>
    <NewlyAdded/>
    <Services/>
    <AppFeatures/>
    <WhyChooseUs/>
    {/*<Courses/>*/}
    <ContactUs/>
   </div>
  )
}

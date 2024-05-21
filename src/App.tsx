import Carousel from './components/Carousel'
import image1 from './assets/img/img1.jpg'
import image2 from './assets/img/img2.jpg'
import image3 from './assets/img/img3.jpg'
import image4 from './assets/img/img4.jpg'
import image5 from './assets/img/img5.jpg'
import image6 from './assets/img/img6.jpg'


const imgs = [image1, image2, image3, image4, image5, image6]

const App = () => {
  return <Carousel slides={imgs} />
}

export default App
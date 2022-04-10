import { motion } from 'framer-motion'
import React, {useState, useEffect} from 'react'
import { images } from '../../constants'
import './About.scss'

import { client, urlFor } from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper'

// const aboutItems = [
//   {title: 'Web Development', description: 'Web Development Description', imgUrl: images.about02},
//   {title: 'Web Animations', description: 'Web Animations Description', imgUrl: images.about01},
//   {title: 'Digital Marketing', description: 'Digital Marketing Description', imgUrl: images.about03},
//   {title: 'SEO', description: 'SEO Description', imgUrl: images.about04},


// ];

const About = () => {

  const [aboutItems, setAboutItems] = useState([]);

  useEffect(() => {
    const query = '*[_type == "aboutUs"]'

    client.fetch(query).then( (data) => {
      // console.log(data)
      setAboutItems(data)
    })
      
  }, [])
  
  return (
    <>
      <h2 className='head-text'>
        We know that
        <span>Good Design</span>
        <br />
        means
        <span>Good Business</span>
      </h2>

      <div className="app__profile">
        {aboutItems.map( (item, index) => (
            <motion.div
              whileInView={{opacity: 1}}
              whileHover={{scale: 1.1}}
              transition={{duration: 0.5, type: "tween"}}
              className="app__profile-item"
              key={item.title + index}

            >
              <img src={urlFor(item.imgUrl)} alt={item.title} />
              <h2 className='bold-text' style={{marginTop: 20}}>
                {item.title}
              </h2>

              <p className='p-text' style={{marginTop: 10}}>
                {item.description}
              </p>

            </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
 'about', 'app__whitebg'
 ) 
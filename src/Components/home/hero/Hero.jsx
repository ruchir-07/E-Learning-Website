import React from 'react'
import Title from '../../common/title/Title'
import './hero.css'

const Hero = () => {
  return (
    <>
        <section className="hero">
          <div className="container">
            <div className="row">
              <Title subtitle="WELCOME TO ACADMIA" title="Best Onlione Education" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero similique quis quod impedit asperiores corporis tempore corrupti! Voluptate, earum eius. Voluptates praesentium molestiae corporis aut quasi quisquam sapiente hic veritatis libero rem harum amet vero nemo, id provident qui ut quam vel ea distinctio. Cumque dolores suscipit eos dolorum? Quaerat?</p>
              <div className="button">
                <button className="primary-btn">GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i></button>
                <button>VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i></button>
              </div>
            </div>
          </div>
        </section>

        <div className="margin">

        </div>
    </>
  )
}

export default Hero
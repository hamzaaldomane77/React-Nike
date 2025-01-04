import React from 'react'
import { services } from '../constants';
import ServicesCard from '../components/ServicesCard';
const Services = () => {
  return (
<section className='max-container flex flex-wrap  justify-center gap-9'>
 {services.map((service )=>(
  <ServicesCard key={service.label} {...service}/>
))}
</section>
  )
}

export default Services
import React from 'react'
import SecurityFirst from '../components/securitiesComponents/SecurityFirst'
import SecuritySecond from '../components/securitiesComponents/SecuritySecond'
import SecurityThird from '../components/securitiesComponents/SecurityThird'
import SecurityFourth from '../components/securitiesComponents/SecurityFourth'

const Security = () => {
  return (
    <main>
      <section>
        <SecurityFirst/>
      </section>

      <section className='lg:mt-[10vh] mt-[16vh]'>
        <SecuritySecond/>
      </section>

      <section className='lg:mt-[16vh] mt-[16vh]'>
        <SecurityThird/>
      </section>

      <section className='lg:mt-[16vh] mt-[16vh]'>
        <SecurityFourth/>
      </section>
    </main>
  )
}

export default Security
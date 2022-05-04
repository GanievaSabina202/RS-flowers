import React from 'react'
import AboutUs from '../../features/about-us';
import { db } from '../../config/firebase';
import { collection, doc, getDocs } from 'firebase/firestore';

const aboutus = ({ data }) => {
  return (
    <AboutUs data={data} />
  )
}
export async function getServerSideProps() {
  const product = await getDocs(collection(db, "aboutUs"));
  const data = product.docs.map(doc => {
    return {
      ...doc.data(),
      id: doc.id
    }
  })
  return {
    props: {
      data
    }
  }
}
export default aboutus

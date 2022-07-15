import React from "react";
import OurTeam from "../../features/our-team/OurTeam";
import { db } from "../../config/firebase";
import { collection, doc, getDocs } from "firebase/firestore";

const ourteam = ({ data }) => {
  return <OurTeam data={data} />;
};
export async function getServerSideProps() {
  const product = await getDocs(collection(db, "ourteam"));
  const data = product.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return {
    props: {
      data,
    },
  };
}
export default ourteam;

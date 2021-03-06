import React, { useEffect, useState } from "react";
// FIREBASE START
import { db } from "../../config/firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";

import BackgroundImg from "../../share/components/BackgroundImg";
import { Container, Grid, TextField } from "@mui/material";
import {
  Content,
  Img,
  Wrapper,
} from "../../features/gallerycard/GalleryCard.styled";
import Paginations from "../../share/components/Paginations/Paginations";

const Gallery = ({ data }) => {
  // PAGINATION
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const postsPerPage = Math.ceil(9);
  const last_page = Math.ceil(data.length / postsPerPage);
  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const router = useRouter();
  return (
    <>
      <BackgroundImg
        title="Gallery"
        bgImg="https://www.legacy.com/wp-content/uploads/2020/01/Sympathy-flowers-orange-1000-shutterstock_694680475.jpg"
      />

      <Container fluid="true">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          mt={3}
        >
          <TextField
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            size="small"
            label="Search..."
            id="fullWidth"
          />
        </Grid>

        <Grid container pt={2} pb={2}>
          {currentPosts
            .filter((user) => user.name.toLowerCase().includes(query))
            .map((item) => (
              <>
                <Grid p={1} lg={4} md={6} sm={6} xs={12}>
                  <Wrapper onClick={() => router.push(`/gallery/${item.name}`)}>
                    <Img src={item.img} alt={item.name} />
                    <Content>{item.name}</Content>
                  </Wrapper>
                </Grid>
              </>
            ))}
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          m={5}
        >
          <Paginations
            postsPerPage={last_page}
            page={page}
            handleChange={handleChange}
          />
        </Grid>
      </Container>
    </>
  );
};

export async function getServerSideProps() {
  const product = await getDocs(collection(db, "gallery"));
  const data = product.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return {
    props: {
      data: data,
    },
  };
}

export default Gallery;

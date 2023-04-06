import { useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from "./images";
import Layout from "../../components/layout";
import { Container } from "@chakra-ui/layout";
import { SectionTitle } from "../../components/SectionTitle";

const slides = photos.map(({ src, width, height, images }) => ({
  src,
  width,
  height,
  srcSet: images.map((image) => ({
    src: image.src,
    width: image.width,
    height: image.height,
  })),
}));

export default function App() {
  const [index, setIndex] = useState(-1);

  return (
    <Layout>
      <Container maxW={"5xl"} my={[10, 20]}>
        <SectionTitle as={"h1"} mb={6}>
          H1 Gallery
        </SectionTitle>
        <PhotoAlbum
          photos={photos}
          layout="rows"
          targetRowHeight={150}
          onClick={({ index }) => setIndex(index)}
        />

        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </Container>
    </Layout>
  );
}

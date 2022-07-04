import { useEffect, useState } from "react";
import Header from "../../components/header/header";
import ProductCard from "../../components/productCard/productCard";
import { getRecentProperties } from "../../contexts/properties/propertiesActions";
import {
  Container,
  Pan,
  Frame,
  Heading,
  ProductsWrapper,
  NotFoundImage,
} from "./styledSearchResults";
import MoonLoader from "react-spinners/MoonLoader";
import { useProperty } from "../../contexts/properties/propertiesContext";
import notFoundImgUrl from "../../assets/images/notfound.jpg";
import Footer from "../../components/footer/footer";
export default function SearchResults() {
  let [properties, setProperties] = useState([]);
  let [place, setPlace] = useState("");
  let [loading, setLoading] = useState(true);

  const { searchResults, resultsPlace } = useProperty();
  useEffect(() => {
    setProperties(searchResults);
    setPlace(resultsPlace);
    setLoading(false);
  }, []);
  return (
    <Container>
      <Header />
      {loading && (
        <Pan>
          <MoonLoader loading={loading} color="red" size={40} />
        </Pan>
      )}
      {properties.length > 0 && (
        <Frame>
          <Heading>
            {properties.length} Properites avaiable in {place}
          </Heading>
          {properties.length > 0 && (
            <ProductsWrapper>
              {properties.map((p, i) => (
                <ProductCard key={i} product={p} />
              ))}
            </ProductsWrapper>
          )}
        </Frame>
      )}
      {properties.length === 0 && (
        <Pan>
          <Heading style={{ width: "60%", margin: "0 auto" }}>
            No properties found in area, {place}
          </Heading>
          <NotFoundImage src={notFoundImgUrl} alt="not found" />
        </Pan>
      )}
      <Footer />
    </Container>
  );
}

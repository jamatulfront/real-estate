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
} from "./styledNewHomes";
import MoonLoader from "react-spinners/MoonLoader";
import { ErrorMessage } from "../signin/styledSignIn";
export default function NewHomes() {
  let [properties, setProperties] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState("");
  useEffect(() => {
    async function fetchProperties() {
      try {
        let { data } = await getRecentProperties();
        setProperties(data.data.data);
        setLoading(false);
        setError("");
      } catch (e) {
        setLoading(false);
        setError("Something went wrong! Please try again.");
      }
    }
    fetchProperties();
  }, [properties]);
  return (
    <Container>
      <Header />
      {(error || loading) && (
        <Pan>
          <MoonLoader loading={loading} color="red" size={40} />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Pan>
      )}
      {properties.length > 0 && (
        <Frame>
          <Heading>Fresh Homes Ready For You !</Heading>
          <ProductsWrapper>
            {properties.map((p, i) => (
              <ProductCard key={i} product={p} />
            ))}
          </ProductsWrapper>
        </Frame>
      )}
    </Container>
  );
}
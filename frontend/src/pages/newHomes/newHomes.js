import { useEffect, useMemo, useState } from "react";
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
import Footer from "../../components/footer/footer";
import PropertyFilter from "../../components/propertyFilter/propertyFilter";
import { getTotalPagesSize, paginate } from "../../utils/paginate";
import Paginate from "../../components/paginate/paginate";
import { getFilteredArray } from "../../utils/filter";
export default function NewHomes({ title = "Fresh Homes For You -" }) {
  let [properties, setProperties] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState("");
  let [currentPage, setCurrentPage] = useState(1);
  let [pageItemsSize, setPageItemsSize] = useState(4);
  let [filterProp, setFilterProp] = useState({ propertyTypes: "all" });
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
  }, []);
  useEffect(() => {}, [filterProp]);
  return (
    <Container>
      <Header />
      <PropertyFilter filterProp={filterProp} setFilterProp={setFilterProp} />
      {(error || loading) && (
        <Pan>
          <MoonLoader loading={loading} color="red" size={40} />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Pan>
      )}
      {properties.length > 0 && (
        <Frame>
          <Heading>{title}</Heading>
          <ProductsWrapper>
            {paginate(
              currentPage,
              pageItemsSize,
              getFilteredArray(properties, filterProp)
            ).map((p, i) => (
              <ProductCard key={i} product={p} />
            ))}
          </ProductsWrapper>
        </Frame>
      )}
      {}
      <Paginate
        total={getTotalPagesSize(
          pageItemsSize,
          getFilteredArray(properties, filterProp).length
        )}
        currentPage={currentPage}
        setPage={setCurrentPage}
      />
      <Footer />
    </Container>
  );
}

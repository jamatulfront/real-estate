import React, { useState } from "react";
import {
  Bottom,
  Top,
  Container,
  SearchButton,
  TopButton,
  BottomButton,
  Icon,
} from "./styledPropertySearch";
import search from "../../assets/icons/search.png";
import SearchPopUp from "./searchPopUp";

export default function PropertySearch({ isBuy = true, isRent = false }) {
  const [btnValue, setBtnValue] = useState("Search by locations...");
  const [buy, setBuy] = useState(isBuy);
  const [rent, setRent] = useState(isRent);
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <Container>
      <Top>
        <TopButton
          onClick={() => {
            setBuy(true);
            setRent(false);
          }}
          active={buy ? true : false}
        >
          Buy
        </TopButton>
        <TopButton
          onClick={() => {
            setRent(true);
            setBuy(false);
          }}
          active={rent ? true : false}
        >
          Rent
        </TopButton>
      </Top>
      <Bottom>
        <BottomButton
          onClick={() => {
            setShowPopUp((value) => !value);
          }}
        >
          <Icon style={{ marginRight: ".5rem" }} alt="icon" src={search} />
          {btnValue}
        </BottomButton>
        <SearchButton>Search</SearchButton>
      </Bottom>
      {showPopUp && <SearchPopUp setShowPopUp={setShowPopUp} />}
    </Container>
  );
}

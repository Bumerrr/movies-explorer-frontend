import React from "react";
import Header from "../Header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Footer from "../../components/Footer/Footer";
import Container from "../Container/Container";

function Movies() {
  return (
    <>
      <Header isLogined={true} />
      <Container>
        <SearchForm />
        <MoviesCardList />
      </Container>
      <Footer />
    </>
  );
}

export default Movies;
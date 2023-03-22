import React from "react";
import Header from "../Header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Footer from "../../components/Footer/Footer";
import { withRouter } from "react-router-dom";
import Container from "../Container/Container";

function SavedMovies() {
  return (
    <>
      <Header isLogined={true} />
      <Container>
      <SearchForm />
      <MoviesCardList saved={true} />
      </Container>
      <Footer />
    </>
  );
}

export default withRouter(SavedMovies);
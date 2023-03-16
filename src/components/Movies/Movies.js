import React from "react";
import Header from "../Header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Footer from "../../components/Footer/Footer";

function Movies() {
  return (
    <>
      <Header isLogined={true} />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  );
}

export default Movies;
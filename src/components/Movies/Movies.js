import React from "react";
import Header from "../Header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Footer from "../../components/Footer/Footer";

function Movies() {
  return (
    <>
      <Header isLogined={true} />
      <main>
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
      </>
  );
}

export default Movies;
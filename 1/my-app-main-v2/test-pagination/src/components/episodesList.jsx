import React, { useState } from "react";
import { episodes } from "../fakeStorage/episodes.js";
import Episode from "./episode"; // Импорт компонента
import Pagination from "./pagination.jsx";

const EpisodesList = () => {
  const count = episodes.length; // кол-во записей
  const pageSize = 8; // количество записей на странице, которое хотим выводить

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="container">
      <div className="row">
        {episodes.map((episode) => (
          <Episode key={episode.id} {...episode} />
        ))}
      </div>
      <div className="row">
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default EpisodesList;

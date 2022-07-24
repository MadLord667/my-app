import React, { useState } from "react";
import { episodes } from "../fakeStorage/episodes.js";
import Episode from "./episode"; // Импорт компонента
import Pagination from "./pagination.jsx";
import { paginate } from "../utils/paginate.js";

const EpisodesList = () => {
    const count = episodes.length; // кол-во записей
    const pageSize = 8; // количество записей на странице, которое хотим выводить

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    // const paginate = (items, pageNumber, pageSize) => {
    //   const startIndex = (pageNumber - 1) * pageSize;
    //   return [...items].splice(startIndex, pageSize);
    // }; // перенесли в paginate.js

    const pageEpisodes = paginate(episodes, currentPage, pageSize);

    return (
        <div className="container">
            <div className="row">
                {pageEpisodes.map((episode) => (
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

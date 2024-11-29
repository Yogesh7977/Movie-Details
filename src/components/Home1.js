import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Home1 = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [totalPages, setTotalPages] = useState(1); // State for total pages
  const navigate = useNavigate();

  const { email } = useParams();
  if (!email) {
    navigate("/login");
  }

  useEffect(() => {
    const updateFetch = async () => {
      try {
        const url = `https://api.themoviedb.org/3/trending/all/day?api_key=1c73b7ec29758bddd86f467b15df25fb&page=${currentPage}`;
        let response = await fetch(url);

        if (response.ok) {
          let data = await response.json();
          console.log(data);

          if (data.results) {
            setFetchedData(data.results);
            setTotalPages(data.total_pages); // Update total pages
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    updateFetch();
  }, [currentPage]); // Refetch data whenever the page changes

  const sendPropId = (id1, media1) => {
    const id = id1;
    const media = media1;
    console.log(id);
    navigate(`/moviedetails/${media}/${id}`);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="background" style={{ backgroundColor: "#CDEFE2" }}>
      <div
        className="flexBox"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {fetchedData.map((item) => (
          <div
            className="card"
            key={item.id}
            onClick={() => sendPropId(item.id, item.media_type)}
            style={{
              margin: "2em",
              position: "relative",
              height: "max-content",
              width: "auto",
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              className="card-img-top"
              alt={item.title || item.name}
              style={{ width: "15em" }}
            />
            <div
              className="card-body"
              style={{
                position: "absolute",
                bottom: "0",
                color: "white",
                width: "14em",
              }}
            >
              <h5
                className="card-title"
                style={{ width: "auto", margin: "2px" }}
              >
                {item.name || item.title}
              </h5>
              <p className="card-text" style={{ width: "auto", margin: "2px" }}>
                Rating : {item.vote_average}
              </p>
              <p className="card-text" style={{ width: "auto", margin: "2px" }}>
                Original Language : {item.original_language}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="pagination"
        style={{ display: "flex", justifyContent: "center", margin: "2em 0" }}
      >
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          style={{
            margin: "0 1em",
            padding: "0.5em 1em",
            borderRadius: "8px",
            backgroundColor: "#59ddfb",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
          }}
        >
          Previous
        </button>
        <span style={{ margin: "0 1em" }}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          style={{
            margin: "0 1em",
            padding: "0.5em 1em",
            borderRadius: "8px",
            backgroundColor: "#59ddfb",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home1;

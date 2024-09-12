"use client";

import { useState, useEffect } from "react";
import Pagination from "@/component/pagination/pagination";
import Search from "@/component/search/search"; // Importing the Search component
import styles from "./hospitalList.module.css";
import Image from "next/image";

const getHospitals = async () => {
  try {
    const response = await fetch("/api/hospitals/");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching hospitals:", error.message);
    throw new Error("Failed to fetch hospitals");
  }
};

const HospitalList = () => {
  const [hospitals, setHospitals] = useState([]);
  const [filteredHospitals, setFilteredHospitals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const hospitalsPerPage = 15;

  useEffect(() => {
    const fetchHospitals = async () => {
      setLoading(true); // Set loading state to true before fetching data
      try {
        const data = await getHospitals(); // Use the getHospitals function
        setHospitals(data);
        setFilteredHospitals(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchHospitals();
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filtered = hospitals.filter((hospital) =>
      hospital.address.toLowerCase().includes(searchTerm)
    );

    setFilteredHospitals(filtered);
    setCurrentPage(1);
  };

  const indexOfLastHospital = currentPage * hospitalsPerPage;
  const indexOfFirstHospital = indexOfLastHospital - hospitalsPerPage;
  const currentHospitals = filteredHospitals.slice(
    indexOfFirstHospital,
    indexOfLastHospital
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className={styles.filter}>
        <h2>List of Available Hospitals</h2>
        <Search searchTerm={searchTerm} onSearchChange={handleSearch} />
      </div>
      {loading ? (
        <div className={styles.loadingContainer}>
          <Image
            src="/Logo.png"
            alt="Logo-loading..."
            width={50}
            height={50}
            className={styles.loadImage}
          />
          <p>Loading Hospitals</p>
        </div>
      ) : error ? (
        <div className={styles.error}>Error: {error}</div>
      ) : (
        <>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Hospital Name</th>
                <th>Address</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {currentHospitals.map((hospital) => {
                return (
                  <tr className={styles.tr} key={crypto.randomUUID()}>
                    <td>{hospital.hospitalName}</td>
                    <td>{hospital.address}</td>
                    <td>{hospital.contact}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination
            hospitalsPerPage={hospitalsPerPage}
            totalHospitals={filteredHospitals.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default HospitalList;

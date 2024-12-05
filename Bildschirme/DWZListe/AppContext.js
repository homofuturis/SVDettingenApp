import React, { createContext, useState, useEffect } from 'react';
import Papa from 'papaparse';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [dwzData, setDwzData] = useState([]);
  
  useEffect(() => {
    fetch("https://www.schachbund.de/php/dewis/verein.php?zps=C0336&format=csv")
      .then((response) => response.text())
      .then((csvString) => {
        Papa.parse(csvString, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            const filteredData = result.data.map(row => [
              row.id || "-",
              row.nachname || "Unbekannt",
              row.vorname || "Unbekannt",
              row.dwz || "-", // Zeigt die DWZ als String, falls vorhanden
              row.fideelo || "-", // FIDE Elo
            ]);

            const sortedData = filteredData.sort((a, b) => {
              const dwzA = a[3] === "-" ? 0 : parseInt(a[3]);
              const dwzB = b[3] === "-" ? 0 : parseInt(b[3]);
              return dwzB - dwzA;
            });

            setDwzData(sortedData);
          },
        });
      });
  }, []);

  return (
    <AppContext.Provider value={{ dwzData }}>
      {children}
    </AppContext.Provider>
  );
};

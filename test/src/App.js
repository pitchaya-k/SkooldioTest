import "./App.css";
import TcasCard from "./components/TcasCard";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(
        "https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json"
      );
      const data = await response.json();
      console.log(data);
      // set state
      if (data) {
        setData(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        justifyItems: "center",
        backgroundColor: "white",
        padding: "16px",
        placeSelf: "center",
      }}
    >
      {data && Array.isArray(data) && data.length > 0 ? (
        data.map((item, index) => <TcasCard key={index} cardData={item} />)
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default App;

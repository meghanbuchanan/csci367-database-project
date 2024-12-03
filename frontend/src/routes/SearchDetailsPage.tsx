import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DetailsFilter from '../components/DetailsFilter';

/**
 * The SearchDetailsPage component allows users to filter hikes based on various criteria such as 
 * park, trail length, elevation, time, pet-friendly status, and camping availability.
 * It handles the user's input, constructs a query string, and performs a search request to retrieve 
 * relevant trail details from the backend.
 */
const SearchDetailsPage = () => {
  const navigate = useNavigate();
  const [selectedPark, setSelectedPark] = useState<string>('all');
  const [lengthRange, setLengthRange] = useState([0, 45]);
  const [elevationRange, setElevationRange] = useState([0, 12000]);
  const [timeRange, setTimeRange] = useState([0, 48]);
  const [pets, setPets] = useState<string>('all'); 
  const [camping, setCamping] = useState<string>('all'); 

  /**
   * Handles the search functionality by constructing a query string from the selected filters
   * and sending a request to the backend. After the search results are retrieved, it navigates
   * to the results page with the data.
   */
  const handleSearch = async () => {
    const queryParams = new URLSearchParams();

    if (selectedPark !== 'all') {
      queryParams.append("park", selectedPark);
    }

    if (lengthRange) {
      queryParams.append("lengthMin", lengthRange[0].toString());
      queryParams.append("lengthMax", lengthRange[1].toString());
    }
    
    if (elevationRange) {
      queryParams.append("elevationMin", elevationRange[0].toString());
      queryParams.append("elevationMax", elevationRange[1].toString());
    }

    if (timeRange) {
      queryParams.append("timeMin", timeRange[0].toString());
      queryParams.append("timeMax", timeRange[1].toString());
    }

    if (pets !== 'all') {
      queryParams.append("pets", pets);
    }

    if (camping !== 'all') {
      queryParams.append("camping", camping);
    }

    const response = await fetch(`http://localhost:5001/details/search?${queryParams.toString()}`);
    const data = await response.json();
    navigate('/selection', { state: { results: data, searchType: 'details' } });
  
  };

  return (
    <div>
        <DetailsFilter
          selectedPark={selectedPark}
          setSelectedPark={setSelectedPark}
          lengthRange={lengthRange}
          setLengthRange={setLengthRange}
          elevationRange={elevationRange}
          setElevationRange={setElevationRange}
          timeRange={timeRange}
          setTimeRange={setTimeRange}
          pets={pets}
          setPets={setPets}
          camping={camping}
          setCamping={setCamping}
          onSearch={handleSearch}
        />
    </div>
  );
};

export default SearchDetailsPage;

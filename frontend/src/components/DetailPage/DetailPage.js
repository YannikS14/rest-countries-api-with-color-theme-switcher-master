import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { StyledDetailPage } from './DetailPage.styled';
import Button from '../Button/Button';
import CountryDetails from '../CountryDetails/CountryDetails';
import Loading from '../Loading/Loading';

function DetailPage({ match }) {
  const {
    params: { countryId },
  } = match;

  const [country, setCountry] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCountry = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await axios.get(
          `https://restcountries.eu/rest/v2/alpha/${countryId}`,
        );
        setCountry(response.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    getCountry();
  }, [countryId]);

  return (
    <StyledDetailPage>
      {loading && <Loading />}
      {error && <div>Some error occured while fetching data</div>}
      {country && (
        <>
          <Link to={`/`}>
            <Button text="Back"></Button>
          </Link>{' '}
          <CountryDetails country={country} />
        </>
      )}
    </StyledDetailPage>
  );
}

export default DetailPage;

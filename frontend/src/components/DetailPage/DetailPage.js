import { StyledDetailPage } from './DetailPage.styled';

function DetailPage({ match }) {
  const {
    params: { countryId },
  } = match;

  return <div>Detail Page: {countryId}</div>;
}

export default DetailPage;

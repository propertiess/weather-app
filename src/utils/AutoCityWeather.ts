import { useContext, useEffect } from 'react';

import DetailsContext from '../context/DetailsContext';
import { usePosition } from '../hooks/usePosition';
import { useAppDispatch } from '../store/hooks';
import { fetchCurrentWeather } from '../store/reducers/CurrentWeather';
import { fetchFiveDaysWeather } from '../store/reducers/FiveDaysWeather';

const AutoCityWeather = () => {
  const { latitude, longitude, isLoading } = usePosition();
  const dispatch = useAppDispatch();
  const { details, setOpenDetails } = useContext(DetailsContext);

  const openDetails = () => {
    dispatch(fetchCurrentWeather({ lat: latitude, lon: longitude }));
    dispatch(fetchFiveDaysWeather({ lat: latitude, lon: longitude }));
    if (!details) {
      setOpenDetails(true);
    }
  };

  useEffect(() => {
    if (!isLoading) {
      openDetails();
    }
  }, [isLoading]);
};
export default AutoCityWeather;

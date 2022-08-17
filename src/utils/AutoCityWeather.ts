import {useContext, useEffect} from "react";
import {usePosition} from "../hooks/usePosition";
import {useAppDispatch} from "../app/hooks";
import DetailsContext from "../context/DetailsContext";
import {fetchCurrentWeather} from "../features/CurrentWeather";
import {fetchFiveDaysWeather} from "../features/FiveDaysWeather";


const AutoCityWeather = () => {
    const {latitude, longitude, isLoading} = usePosition()
    const dispatch = useAppDispatch()
    const {details, setOpenDetails} = useContext(DetailsContext)

    const openDetails = () => {
        dispatch(fetchCurrentWeather(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=ru&appid=b4753d97985882ce8169158916a467ec`))
        dispatch(fetchFiveDaysWeather(`https://api.openweathermap.org/data/2.5/forecast?lat=${Math.floor(latitude!)}&lon=${Math.floor(longitude!)}&units=metric&lang=ru&appid=b4753d97985882ce8169158916a467ec`))
        if (!details) {
            setOpenDetails(true)
        }
    }
    useEffect(() => {

        if (!isLoading) {
            openDetails()
        }
    }, [isLoading])


}
export default AutoCityWeather
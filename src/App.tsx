import { City } from './components/City';
import { WeatherItems } from './components/WeatherItems';
import { Layout } from './layout/Layout';

export const App = () => {
  return (
    <Layout>
      <City />
      <WeatherItems />
    </Layout>
  );
};

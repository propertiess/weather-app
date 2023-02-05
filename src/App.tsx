import { Place, WeatherContainer } from '@/features/weather/components';
import { Layout } from '@/layout';

export const App = () => {
  return (
    <Layout>
      <Place />
      <WeatherContainer />
    </Layout>
  );
};

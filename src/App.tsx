import { Place, WeatherList } from '@/features/weather/components';
import { Layout } from '@/layout';

export const App = () => {
  return (
    <Layout>
      <Place />
      <WeatherList />
    </Layout>
  );
};

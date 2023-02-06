import { WeatherContainer } from '@/features/weather/components';
import { DetailsContextProvider } from '@/features/weather/context';
import { Layout } from '@/layout';

export const App = () => {
  return (
    <Layout>
      <DetailsContextProvider>
        <WeatherContainer />
      </DetailsContextProvider>
    </Layout>
  );
};

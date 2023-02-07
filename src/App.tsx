import { WeatherContainer } from '@/features/home/components';
import { DetailsContextProvider } from '@/features/home/context';
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

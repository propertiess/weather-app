import { useQuery } from '@tanstack/react-query';

import { ICurrentData } from '@/types';

import styles from './Place.module.css';

export const Place = () => {
  const { data } = useQuery<ICurrentData>({
    queryKey: ['current-day']
  });

  return <div className={styles.place}>{data?.name && <p>{data.name}</p>}</div>;
};

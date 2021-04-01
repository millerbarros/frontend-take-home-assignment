import { useEffect, useState } from 'react';

// HOOKS
import { useFetch } from './useFetch';

// TYPES
import { Goal } from '~/shared/types/goal';

export const useGetGoal = (slug: string) => {
  const { data, isFetching: isGoalsFetching } = useFetch<Goal[]>('/goals');
  const [isFetching, setFetching] = useState<boolean>(isGoalsFetching);
  const [goal, setGoal] = useState<Goal | null>(null);

  useEffect(() => {
    if (isGoalsFetching) setFetching(true);
  }, [isGoalsFetching]);

  useEffect(() => {
    const foundGoal = (data || []).find(goal => goal.slug === slug) || null;
    setGoal(foundGoal);
    setFetching(false);
  }, [data, slug]);

  return {
    isFetching,
    goal
  };
};

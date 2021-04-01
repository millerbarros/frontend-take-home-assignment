import { useEffect, useState } from 'react';

// HOOKS
import { useFetch } from './useFetch';
import { useSave } from './useSave';

// TYPES
import { Goal } from '~/shared/types/goal';

export const useSaveGoal = (slug: string, goal: Goal) => {
  const { data, fetchData } = useFetch<Goal[]>('/goals', false);
  const { isSaving: isSavingGoal, save: saveGoal } = useSave<Goal[]>('/goals');

  const [isSaving, setSaving] = useState(false);

  const save = () => {
    setSaving(true);

    fetchData();

    const foundGoalIndex = (data || []).findIndex(goal => goal.slug === slug);
    if (foundGoalIndex === -1) {
      setSaving(false);
      return;
    }

    const prevGoal = data || [];
    const goals = [...prevGoal].splice(foundGoalIndex, 1, goal);
    saveGoal(goals);
  };

  useEffect(() => {
    setSaving(false);
  }, [isSavingGoal]);

  return {
    isSaving,
    goal,
    save
  };
};

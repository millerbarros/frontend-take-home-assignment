import { useFetch } from './useFetch';

// TYPES
import { Goal } from '../types/goal';

export const useListGoals = () => useFetch<Goal[]>('/goals');

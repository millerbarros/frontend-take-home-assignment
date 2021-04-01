const STORAGE_KEY = '/goals';
const DEFAULT_GOALS = [
  { slug: 'college', title: 'Go to college' },
  { slug: 'vacation', title: 'Take a vacation' },
  { slug: 'car', title: 'Buy a car' },
  { slug: 'wedding-party', title: 'Throw a wedding party' },
  { slug: 'emergency-found', title: 'Build and emergency found' },
  { slug: 'baby', title: 'Have a babe' }
];

export const pupulateGoals = () => {
  if (!localStorage) return;

  const storageData = localStorage.getItem(STORAGE_KEY);

  if (!storageData) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_GOALS));
  }
};

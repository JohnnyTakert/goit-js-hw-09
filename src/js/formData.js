export const formData = {
  email: '',
  message: '',
};

export function saveToLocalStorage(data) {
  try {
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage', error);
  }
}

export function loadFromLocalStorage() {
  try {
    const savedData = localStorage.getItem('feedback-form-state');
    return savedData ? JSON.parse(savedData) : null;
  } catch (error) {
    console.error('Error loading from localStorage', error);
    return null;
  }
}

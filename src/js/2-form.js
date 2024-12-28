import {
  formData,
  saveToLocalStorage,
  loadFromLocalStorage,
} from './formData.js';
import { updateFormFields, resetForm } from './domUtils.js';

document.querySelector('.feedback-form').addEventListener('input', event => {
  try {
    const { name, value } = event.target;
    formData[name] = value;
    saveToLocalStorage(formData);
  } catch (error) {
    console.error('Error handling input event', error);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  try {
    const savedData = loadFromLocalStorage();
    if (savedData) {
      Object.assign(formData, savedData);
      updateFormFields(formData);
    }
  } catch (error) {
    console.error('Error on DOMContentLoaded', error);
  }
});

document.querySelector('.feedback-form').addEventListener('submit', event => {
  event.preventDefault();
  try {
    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
    }
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    resetForm(event.target);
  } catch (error) {
    console.error('Error handling form submission', error);
  }
});

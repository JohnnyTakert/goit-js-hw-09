export function updateFormFields(data) {
  try {
    document.querySelector('input[name="email"]').value = data.email;
    document.querySelector('textarea[name="message"]').value = data.message;
  } catch (error) {
    console.error('Error updating form fields', error);
  }
}

export function resetForm(target) {
  try {
    target.reset();
  } catch (error) {
    console.error('Error resetting form', error);
  }
}

function calculateAge(birthDate) {
    const today = new Date();
    const diffInMilliseconds = today.getTime() - birthDate.getTime();
    const ageDate = new Date(diffInMilliseconds);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
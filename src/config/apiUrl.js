export const apiUrl = "https://api.themoviedb.org"; // live-staging
export const imageUrl = 'https://image.tmdb.org/t/p/original';
export const BaseURL = (link) => {
  return `${apiUrl}/3/${link}`;
};

export const apiHeader = (token, isFormData) => {
  if (token && !isFormData) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
  }
  if (token && isFormData) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        // Accept: 'application/json',
        "Content-Type": "multipart/form-data",
      },
    };
  }
  if (!token && !isFormData) {
    return {
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  if (!token && isFormData) {
    return {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
  }
};

export const firebaseVapidObject = {
  vapidKey: "",
};

export const stripe_public_key = "";

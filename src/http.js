export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Falied to fetch places");
  }
  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-type": "application/json",
    },
  });

  const resData = await response.json();
  if (!response.ok) {
    throw new Error("failed to update data");
  }
  return resData.message;
}

export async function fetchUserPlace() {
  const response = await fetch("http://localhost:3000/user-places");
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Falied to fetch User Place");
  }
  return resData.places;
}

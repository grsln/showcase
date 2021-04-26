const API_URL = "https://krapipl.imumk.ru:8443/api/mobilev1/update";

class ApiService {
  async request() {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify({ data: "" }),
    };
    const response = fetch(API_URL, requestOptions)
      .then((res) => res.json())
      .then(
        (result) => result,
        (error) => error
      );
    return response;
  }
}

export default new ApiService();

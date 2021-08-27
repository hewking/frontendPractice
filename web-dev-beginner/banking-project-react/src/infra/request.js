const apiPreFix = "api";
const baseUrl = "http://localhost:5000/" + apiPreFix;

export async function sendRequest(api, method, body) {
  try {
    const response = await fetch(baseUrl + api, {
      method: method || "GET",
      headers: body ? { "Content-type": "application/json" } : undefined,
      body,
    });
    return await response.json();
  } catch (error) {
    return { error: error.message || "unknown message" };
  }
}


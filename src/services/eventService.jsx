import authApi from "./authApi";

export const fetchEvents = async () => {
    const response = await authApi.get("/events");
    return response.data;
};
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const getMenuData = createAsyncThunk("menu/getData", async () => {
    try {
        const response = await api.get("/data");
        return response.data;
    } catch (error) {
        console.log(error)
        throw error
    }
});

import { createSlice } from "@reduxjs/toolkit"
import { getMenuData } from "../thunks/menuThunks";

const initialState = {
    categories: [],
    menuItems: [],
    status: 'idle',
    error: null,
    activeCategory: "All",
    selectedProduct: null,
    isModalOpen: false
}


const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload;
            if (state.activeCategory === 'All') {
                state.menuItems = state.categories;
            } else {
                const selectedCategory = state.categories.find((category) => category.name[0].value === state.activeCategory);
                state.menuItems = selectedCategory ? [selectedCategory] : [];
            }
        },
        openProductModal: (state, action) => {
            state.selectedProduct = action.payload;
            state.isModalOpen = true;
        },
        closeProductModal: (state) => {
            state.selectedProduct = null;
            state.isModalOpen = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMenuData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getMenuData.fulfilled, (state, action) => {
                const filterCategories = action.payload.categories.filter(
                    (category) => !category.isArchived
                );

                state.categories = filterCategories.map((category) => ({
                    ...category,
                    menuItems: category.menuItems.filter((item) => !item.isArchived),
                }));
                state.status = "succeeded";
                state.menuItems = state.categories;
            })
            .addCase(getMenuData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
})

export const { setActiveCategory, openProductModal, closeProductModal } = menuSlice.actions;

export default menuSlice.reducer;
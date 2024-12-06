import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FavoriteItem {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
    
}

interface FavoritesState {
    items: FavoriteItem[];
}

const initialState: FavoritesState = {
    items: [],
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<FavoriteItem>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (!existingItem) {
                state.items.push(action.payload);
            }
        },
        removeFavorite: (state, action: PayloadAction<{ id: number }>) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        clearFavorites: (state) => {
            state.items = [];
        },
    },
});

export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;

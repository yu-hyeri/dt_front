// 실습
import { createSlice } from '@reduxjs/toolkit';

// 1. 슬라이스 정의
const isVisibleSlice = createSlice({
    name: 'isVisible',
    initialState: true,
    reducers: {
        changeVisibility: (state) => {
            return !state; // 상태를 반전시킴
        },
    },
});

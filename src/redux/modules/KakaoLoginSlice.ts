import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "./instance";

export interface KakaoState {
  userLogin: string[];
  isLoading: boolean;
  error: string[];
}
export interface actionState {
  arg: void;
  requestId: string;
  requestStatus: "fulfilled";
}

const initialState: KakaoState = {
  userLogin: [],
  isLoading: false,
  error: [],
};

// 로그인 요청 및 유저 정보 가져오기
export const kakaoLogin = createAsyncThunk("KakaoSlice/socialLogin", async (code: String | any, thunkAPI) => {
  try {
    const response = await instance.get(`kakao`, code.code);
    const provider = response.data.user.provider;
    const token = response.data.user.token; // accessToken
    const nickname = response.data.user.userInfo.nickname; // 닉네임
    const profileImage = response.data.user.userInfo.profile_image; // 프로필 이미지
    localStorage.setItem("provider", provider);
    localStorage.setItem("jwtToken", token);
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("image", profileImage);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const KakaoSlice = createSlice({
  name: "socialLogin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(kakaoLogin.pending, (state: KakaoState) => {
      state.isLoading = true;
    });
    builder.addCase(kakaoLogin.fulfilled, (state: KakaoState, action) => {
      console.log(action);
    });
  },
});

export default KakaoSlice.reducer;

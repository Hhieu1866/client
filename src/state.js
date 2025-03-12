import { atom } from "jotai";
import { authorize, getPhoneNumber } from "zmp-sdk";
import { getAccessToken, getSetting, getUserInfo } from "zmp-sdk/apis";

export const userState = atom(() =>
  getUserInfo({
    avatarType: "normal",
  }),
);

export const displayNameState = atom("");

export const handleAuthorization = async () => {
  try {
    // 1. getSetting
    const { authSetting } = await getSetting({});
    const grantedUserLocation = authSetting["scope.userLocation"] || false;
    const grantedPhoneNumber = authSetting["scope.userPhonenumber"] || false;

    // 2. Authorize
    if (!grantedUserLocation || !grantedPhoneNumber) {
      await authorize({
        scopes: ["scope.userLocation", "scope.userPhonenumber"],
      });
      console.log("Đã cấp quyền userLocation, userPhonenumber");
    } else {
      console.log("Người dùng đã cấp quyền đầy đủ.");
    }

    // 3. getAccessToken
    const accessToken = await getAccessToken({});
    console.log("Access Token:", accessToken);

    // 4. getPhoneNumber
    getPhoneNumber({
      success: async (data) => {
        const { token } = data;
        console.log("Phone Token:", token);
        fetchZaloPhoneNumber(token, accessToken);
      },
      fail: (error) => {
        console.log("Lỗi bước 4: ", error);
      },
    });
  } catch (error) {
    console.error("Lỗi khi xin quyền:", error);
  }
};

# Zalo Mini App

## Development

### Using Zalo Mini App Extension

1. Install [Visual Studio Code](https://code.visualstudio.com/download) and [Zalo Mini App Extension](https://mini.zalo.me/docs/dev-tools).
1. In the **Home** tab, process **Config App ID** and **Install Dependencies**.
1. Navigate to the **Run** tab, select the suitable launcher, and click **Start**.

### Using Zalo Mini App CLI

1. [Install Node JS](https://nodejs.org/en/download/).
1. [Install Zalo Mini App CLI](https://mini.zalo.me/docs/dev-tools/cli/intro/).
1. **Install dependencies**:
   ```bash
   npm install
   ```
1. **Start** the dev server:
   ```bash
   zmp start
   ```
1. **Open** `localhost:3000` in your browser.

## Deployment

1. **Create** a mini program. For instructions on how to create a mini program, please refer to the [Coffee Shop Tutorial](https://mini.zalo.me/tutorial/coffee-shop/step-1/)

1. **Deploy** your mini program to Zalo using the mini app ID created.

   - **Using Zalo Mini App Extension**: navigate to the **Deploy** panel > **Login** > **Deploy**.
   - **Using Zalo Mini App CLI**:
     ```bash
     zmp login
     zmp deploy
     ```

1. Open the mini app in Zalo by scanning the QR code.

## Resources

- [Zalo Mini App Official Website](https://mini.zalo.me/)
- [ZaUI Documentation](https://mini.zalo.me/documents/zaui/)
- [ZMP SDK Documentation](https://mini.zalo.me/documents/api/)
- [DevTools Documentation](https://mini.zalo.me/docs/dev-tools/)
- [Ready-made Mini App Templates](https://mini.zalo.me/zaui-templates)
- [Community Support](https://mini.zalo.me/community)

import React, { Suspense, useState } from "react";
import { List, Page, Icon, useNavigate, BottomNavigation } from "zmp-ui";
import { CalendarDays, Users } from "lucide-react";
import UserCard from "../components/user-card";
import { handleAuthorization } from "../state";

const HomePage = () => {
const [activeTab, setActiveTab] = useState("chat");
const notifications = [
{
action: "Nguyễn Văn B đã thêm nhân sự mới Trần Thị C",
timeAgo: "30 phút trước",
},
{
action: "Lê Thị D đã cập nhật lịch làm việc tuần 24/06 - 30/06",
timeAgo: "2 giờ trước",
},
{
action: "Phạm Văn E đã tạo công việc mới Phát triển tính năng ABC",
timeAgo: "2 giờ trước",
},
{
action: "Hệ thống đã gửi thông báo Cập nhật lịch làm việc",
timeAgo: "6 giờ trước",
},
];

const navigate = useNavigate();
return (
<Page className="page">
<Suspense>
<div className="section-container">
<UserCard />
</div>
</Suspense>
{/_ <div className="section-container">
<List>
<List.Item
onClick={() => navigate("/about")}
suffix={<Icon icon="zi-arrow-right" />} >
<div>About</div>
</List.Item>
<List.Item
onClick={() => navigate("/user")}
suffix={<Icon icon="zi-arrow-right" />} >
<div>User</div>
</List.Item>
</List>
</div> _/}
<div className="mt-5">
<p className="font-black text-2xl">Dashboard</p>
<p className="mt-1">Xin chào, chúc bạn một ngày làm việc hiệu quả</p>
<div className="mt-8">
<div className="grid grid-cols-2 gap-4">
<div
className="bg-white rounded-lg px-3 py-5 flex flex-col gap-5"
onClick={() => {
navigate("/employees");
}} >
<div>
<div className="flex items-center justify-between">
<div className="bg-[#DBEAFE] p-2 text-blue-700 rounded-lg">
<Users className="size-6" />
</div>
<p className="bg-[#DCFCE7] text-xs px-3 py-1 rounded-full text-[#186636] font-semibold">
+2 tuần này
</p>
</div>
</div>
<div className="flex flex-col gap-1">
<p className="font-bold text-2xl">24</p>
<p className="text-base text-gray-500 font-semibold">
Tổng nhân sự
</p>
</div>
</div>

            <div className="bg-white rounded-lg px-3 py-5 flex flex-col gap-5">
              <div>
                <div className="flex items-center justify-between">
                  <div className="bg-[#FFEDD5] p-2 text-[#EA580C] rounded-lg">
                    <CalendarDays className="size-6" />
                  </div>
                  <p className="bg-[#FEE2E2] text-xs px-3 py-1 rounded-full text-[#A73636] font-semibold">
                    -2 tuần này
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-2xl">15</p>
                <p className="text-base text-gray-500 font-semibold">
                  Ca làm hôm nay
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-5 mt-4">
            <div>
              <p className="font-bold text-xl">Hoạt động gần đây</p>
              <span className="text-base text-gray-500 font-medium">
                Các hoạt động mới nhất trong hệ thống
              </span>
            </div>

            <div>
              {notifications.map((notification, index) => (
                <div key={index} className="flex gap-3 mt-3 items-center">
                  <Icon icon="zi-clock-1" size={18} />
                  <div className="text-xs">
                    <div className="flex gap-1">
                      <p className="font-bold">{notification.action}</p>
                    </div>
                    <div>
                      <p>{notification.timeAgo}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation
        fixed
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
      >
        <BottomNavigation.Item
          key="employees"
          label="Nhân sự"
          icon={<Icon icon="zi-members-solid" />}
          onClick={() => navigate("/employees")}
        />
        <BottomNavigation.Item
          key="employees"
          label="Nhân sự"
          icon={<Icon icon="zi-members-solid" />}
          onClick={() => navigate("/employees")}
        />
        <BottomNavigation.Item
          key="employees"
          label="Đăng nhập"
          icon={<Icon icon="zi-members-solid" />}
          onClick={handleAuthorization}
        />
        <BottomNavigation.Item
          key="profile"
          label="Cá nhân"
          icon={<Icon icon="zi-members-solid" />}
          onClick={() => navigate("/user")}
        />
      </BottomNavigation>
    </Page>

);
};

export default HomePage;

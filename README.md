# Meowu · React Native App

> Expo Router + Gluestack UI + animated cat themes 🐾

## 开发

```bash
npm install
npm run start   # 选择 iOS / Android / Web
npm run ios     # 启动 iOS 模拟器
npm run android # 启动 Android 模拟器
```

## 功能亮点

- **猫屋仪表盘**：暖色奶油风入口模块与互动提醒。
- **设置页**：通知开关、主题入口、Gluestack UI 卡片。
- **主题布景**：切换不同 GIF 动画，首页实时更新。
- **资源同步**：Flutter 时代的图标、主题 GIF 已迁移至 `assets/`。

## 目录速览

- `app/`：Expo Router 页面（`index`, `settings`, `theme-gallery`）。
- `components/`：仪表盘、设置、主题卡片等复用组件。
- `constants/`：模块列表、主题选项。
- `context/`：`ThemeProvider`，共享当前主题状态。
- `assets/`：统一的图标、动画、应用图标。

## 技术栈

- Expo 54 / React Native 0.81
- Gluestack UI（`GluestackUIProvider + config`）
- Expo Image、Vector Icons

欢迎在 `app/` 中继续扩展更多喵屋能力！

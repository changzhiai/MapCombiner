# Mobile Deployment Guide for MapCombiner

This guide details the steps to build, sync, and deploy **MapCombiner** as a native mobile application for iOS and Android using Capacitor.

---

## 🛠 Prerequisites

Before starting, ensure you have the following installed on your development machine:

### 🌐 All Platforms
- **Node.js**: v18+ (latest LTS recommended).
- **Core Dependencies**: Run `npm install` in the project root.

### 🍎 iOS Requirements (macOS only)
- **Xcode**: Latest stable version from the Mac App Store.
- **CocoaPods**: Install via Homebrew: `brew install cocoapods`.
- **Apple Developer Account**: Required for on-device testing and App Store distribution.

### 🤖 Android Requirements
- **Android Studio**: Latest stable version.
- **Android SDK**: Install API level 33+ and Android SDK Build-Tools via Android Studio SDK Manager.

---

## 🏗 Build & Sync

Whenever you change the web application code (React/JS), you must rebuild the static assets and sync them with the native projects.

### 1. Build the Web App
```bash
npm run build
```

### 2. Sync with Capacitor
This command copies the `dist` folder into the `ios` and `android` directories and updates native plugins.
```bash
npx cap sync
```

---

## 🍎 iOS Deployment (Xcode)

1. **Open the project in Xcode**:
   ```bash
   npx cap open ios
   ```

2. **Configure Signing**:
   - In the project navigator, select the `App` project.
   - Go to **Signing & Capabilities**.
   - Ensure a **Team** is selected and the **Bundle Identifier** matches your Apple developer settings (`org.traveltracker.mapcombiner`).

3. **Run on Emulator/Device**:
   - Select your target device (iPhone/Simulator) in the top toolbar.
   - Click the **Play** button (or `Cmd + R`).

4. **Production Build (Archive)**:
   - Select **Product > Archive** from the top menu.
   - Once archived, use the **Distribute App** wizard to upload to TestFlight or the App Store.

---

## 🤖 Android Deployment (Android Studio)

1. **Open the project in Android Studio**:
   ```bash
   npx cap open android
   ```

2. **Run on Emulator/Device**:
   - Wait for Gradle to finish indexing.
   - Select your device/emulator and click the **Run** button (green arrow).

3. **Generate Release Build (APK/AAB)**:
   - Go to **Build > Generate Signed Bundle / APK...**.
   - Choose **Android App Bundle** (preferred for Play Store) or **APK**.
   - Create or select your keystore and follow the wizard to build the release binary.

---

## 🎨 Asset Management (Icons & Splash)

MapCombiner uses `@capacitor/assets` to manage native branding.

1. **Prepare Sources**:
   - Ensure high-resolution `icon.png` and `splash.png` are present in the `assets/` directory.

2. **Generate Assets**:
   - Use the CLI to automatically generate all required sizes for both platforms:
   ```bash
   npx capacitor-assets generate --ios --android
   ```

---

## 📋 Common Capacitor Commands

| Command | Description |
| :--- | :--- |
| `npx cap sync` | Syncs web assets and installs native plugins. |
| `npx cap copy` | Copies web assets only (faster than sync if no plugin changes). |
| `npx cap update` | Updates native project dependencies (cocoapods/gradle). |
| `npx cap add [ios/android]` | Adds a new platform to the project. |

---

## ⚠️ Troubleshooting

- **Build Errors after Plugin Change**: Run `npx cap sync` followed by `npx cap update`.
- **Xcode CocoaPods Issues**:
  ```bash
  cd ios/App && pod repo update && pod install && cd ../..
  ```
- **Android Gradle Sync Issues**: In Android Studio, go to **File > Invalidate Caches / Restart**.
- **Env Variables**: Ensure `VITE_PARSER_URL` in `.env.local` points to a reachable production URL for production builds.

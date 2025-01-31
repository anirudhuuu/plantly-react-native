# Plantly

<img src="./screenshots/plantly.png" alt="Plantly" width="100" height="100" />

Plantly is an intuitive React Native application built with Expo, designed to help you keep your plants healthy and hydrated. It features a user-friendly interface for adding and managing plants, complete with watering schedules and reminders. With seamless image integration and quick actions, Plantly ensures that your plant care routine is both efficient and enjoyable.

## Features

### Plant Management

- Add new plants with names, watering frequency, and images.
- View detailed information about each plant.
- Delete plants from the list.
- Water plants and track the last watered date.

### Reminders

- Set watering schedules for each plant.
- Receive reminders to water your plants.

### Quick Actions

- Use quick actions to add new plants directly from the home screen.

### Image Integration

- Choose images for your plants from the device's gallery.
- Display plant images in the app.

### Onboarding

- Onboarding screen to guide new users through the app setup.

### Data Persistence

- Plant data is persisted using local storage with zustand and AsyncStorage.

## Screenshots

| Custom Icon                                                      | Splash Screen                                                      | Onboarding                                                      |
| ---------------------------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------- |
| <img src="./screenshots/01.png" alt="Custom Icon" width="200" /> | <img src="./screenshots/02.png" alt="Splash Screen" width="200" /> | <img src="./screenshots/03.png" alt="Onboarding" width="200" /> |

| Home Screen                                                      | Add Plant                                                      | Pick Plant Image                                                      |
| ---------------------------------------------------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------- |
| <img src="./screenshots/04.png" alt="Home Screen" width="200" /> | <img src="./screenshots/05.png" alt="Add Plant" width="200" /> | <img src="./screenshots/06.png" alt="Pick Plant Image" width="200" /> |

| Crop Picked Image                                                      | Empty Form State                                                      | Filled Form State                                                      |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| <img src="./screenshots/07.png" alt="Crop picked image" width="200" /> | <img src="./screenshots/08.png" alt="Empty Form State" width="200" /> | <img src="./screenshots/09.png" alt="Filled Form State" width="200" /> |

| Filled Form State Full                                                      | Home Screen with Plants                                                      | Plant Details                                                      |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| <img src="./screenshots/10.png" alt="Filled Form State full" width="200" /> | <img src="./screenshots/11.png" alt="Home Screen with Plants" width="200" /> | <img src="./screenshots/12.png" alt="Plant Details" width="200" /> |

| Water Plant                                                      | Delete Plant                                                      | Quick Actions                                                      |
| ---------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------ |
| <img src="./screenshots/13.png" alt="Water Plant" width="200" /> | <img src="./screenshots/14.png" alt="Delete Plant" width="200" /> | <img src="./screenshots/15.png" alt="Quick Actions" width="200" /> |

| Deep Linking                                                      |
| ----------------------------------------------------------------- |
| <img src="./screenshots/16.png" alt="Deep Linking" width="200" /> |

## Development Commands

### Install

```bash
bunx expo install <package_name>
```

### Prebuild

```bash
bunx expo prebuild --platform android
```

### Run Android

```bash
bunx expo run:android
```

### Deep Link

#### Open plant detail screen

```bash
bunx uri-scheme open plantly://plants/<plantId> --android
```

#### Open plant detail screen with query params

```bash
bunx uri-scheme open plantly://plants/<plantId>\?action=water --android
```

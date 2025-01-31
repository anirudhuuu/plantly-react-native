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

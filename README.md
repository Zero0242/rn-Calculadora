# Generar llaves de android

```bash
keytool -genkey -v -keystore calculadora-key.keystore -alias calculadora-key -keyalg RSA -keysize 2048 -validity 10000
```

# Configuracion del gradle

1. En el archivo gradle.properties

```gradle
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****
```

2. En el archivo de app/build.gradle

```gradle
signingConfigs{
    // EL RESTO DE LA CONFIG
    ....
    ....
    ....
    // Firma para builds de produccion
    release {
        if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
            storeFile file(MYAPP_UPLOAD_STORE_FILE)
            storePassword MYAPP_UPLOAD_STORE_PASSWORD
            keyAlias MYAPP_UPLOAD_KEY_ALIAS
            keyPassword MYAPP_UPLOAD_KEY_PASSWORD
        }
    }
}    
buildTypes {
    // EL RESTO DE LA CONFIG
    ....
    ....
    ....
    // Configuraciones de release
    release {        
        // * Firma para release
        signingConfig signingConfigs.release
        // EL RESTO DE LA CONFIG
        ....
        ....
        ....        
    }
}
```


# Scripts de React Native

Importante: los comandos de android requieren tener los **node_modules** instalados en el proyecto

1.  **ANDROID**
    - **build:apk**
      > crea el apk release
    - **build:android**
      > crea el app bundle para la tienda
    - **clean:android**
      > limpia los archivos generados x builds
2.  **node**
    - **clean:node**
      > limpia los archivos de node

```json
"scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "lint": "eslint .",
    "start": "react-native start",
    "test": "jest",
    "build:apk": "cd android && ./gradlew assembleRelease && cd - && echo 'App generada en:' && echo $(pwd)'/android/app/build/outputs/apk/release/app-release.apk'",
    "build:android": "npx react-native build-android --mode=release && echo 'App generada en:' && echo $(pwd)'/android/app/build/outputs/bundle/release/app-release.aab'",
    "clean:android": "cd android && ./gradlew clean && cd -",
    "clean:node": "rm -rf node_modules"
}
```

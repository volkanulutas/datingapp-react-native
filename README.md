# datingapp-react-native

# Kurulum

1. Repoyu bilgisayara alalım:

```sh
git clone https://github.com/volkanulutas/datingapp-react-native.git
```

2. Aşağıdaki dependency'leri kuralım:

```sh
cd datingapp-react-native
npm install
cd ios
pod install 
```
3. Ek olarak "navigation" modülü için kurulum yapalım. İşletim sistemleri için: [Ref:](https://reactnavigation.org/docs/getting-started)

Ana dizine gelelim.

1.)

```sh
yarn add @react-navigation/native
```

veya
```sh
npm install @react-navigation/native
```

2.)

```sh
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```
veya
```sh
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```
3.)

```sh
yarn add react-native-gesture-handler
```
veya
```sh
npm install react-native-gesture-handler
```
4.) 

```sh
cd ios
pod install
cd ..
react-native link
```
5.)
react-native run-ios
react-native run-android
```


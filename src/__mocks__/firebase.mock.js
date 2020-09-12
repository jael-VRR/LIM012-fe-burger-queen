import firebasemock from "firebase-mock";
const mockfirestore = new firebasemock.MockFirestore();
//Esto es necesario para refrescar
mockfirestore.autoFlush();
//Aqui reemplazamos mediante el objeto global a todos los objetos firebase por el mock
global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockfirestore,
  );
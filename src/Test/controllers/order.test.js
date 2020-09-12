//import '../../__mocks__/firebase.mock'
import { addOrder, getOrders } from '../../controllers/order'
import MockFirebase from 'mock-cloud-firestore';


const fixtureData = {
  __collection__: {
    Orders: {
      __doc__: {
        order001: {
          client:'meliodas',
          Products: [],
          Total: 0,
          Fecha: '',
          Status: 'Pendiente',
          Timer: 0,
        },
         
        
        order002: {
          client:'samy',
          Products: [],
          Total: 0,
          Fecha: '',
          Status: 'Pendiente',
          Timer: 0,
        },
      },
    },
    
  },
};



global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });


const listOrder = {
    client:'jael',
    Products: [],
    Total: 0,
    Fecha: '',
    Status: 'Pendiente',
    Timer: 0
  };
  
 
  
  describe.only('addOrder', () => {
    it('Deberia de poder agregar una pedido en tiempo real a firebase', (done) =>addOrder(listOrder)
      .then(() => {
        const callback = (order) => { 
         // console.log(order)
         const result = order.find((element) => element.client === 'jael');
         expect(result.client).toBe('jael');
         done()
        };
        getOrders(callback);
        // console.log(callback);
     
      }));
  });
  
import axiosBase from '@/service/api';
import { vuexModule } from '@/store';

export class DataService {


  sendDataAutorization(data: string, succes: (logData: any) => void, err: (error: any) => void) {
    console.log(vuexModule.store.token);
    axiosBase.post('api/auth/login', data)
    .then((response) => {
      vuexModule.store.token = response.data.access_token;
      vuexModule.store.expiresDate = response.data.expires_at;
      succes(response);
    }).catch((error) => {
      err(error);
    });
  }
  
  public getUserProfile(succes: (logData: any) => void) {
    axiosBase.get('api/auth/user', {
     
    })
      .then((response) => {
        succes(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public logOut(succes: () => void) {
    axiosBase.get('api/auth/logout')
      .then((response) => {
        console.log(response);
        vuexModule.store.token = '';
        vuexModule.store.expiresDate = '';
        vuexModule.store.authStatus = '';
        delete axiosBase.defaults.headers.common['Authorization'];
        succes();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public getPatients() {
    axiosBase.get('api/operator/patients')
      .then((response) => {
        vuexModule.store.listOfPatients = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}



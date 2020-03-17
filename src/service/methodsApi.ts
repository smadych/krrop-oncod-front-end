import ax from '@/service/api';
import { vuexModule } from '@/store';

export class DataService {
  axs = ax;
  
  public sendDataAutorization(data: any, succes: (logData: any) => void, err: (error: any) => void) {
    this.axs.post('api/auth/login', data, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer {token}',
        'X-localization': 'uk',
      },
    }).then((response) => {
      console.log(response);
      const respData: any = response;
      vuexModule.store.token = response.data.access_token;
      vuexModule.store.expiresDate = response.data.expires_at;
      this.getPatients();
      // console.log(vuexModule.store.expiresDate);
      // console.log(response.data.access_token);
      succes(respData);
    }).catch((error) => {
      err(error);
      // console.log(error);
    });
  }

  public getUserProfile(succes: (logData: any) => void, err: (error: any) => void) {
    this.axs.get('/api/auth/user', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${vuexModule.store.token}`,
        'X-localization': 'uk',
      }
    })
      .then((response) => {
        // handle success
        const result: any = response;
        succes(result);
      })
      .catch((error) => {
        // handle error
        err(error);
      });
  }

  public logOut() {
    this.axs.get('/api/auth/logout', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${vuexModule.store.token}`,
        'X-localization': 'uk',
      }
    })
      .then((response) => {
       console.log(response);
       vuexModule.store.token = '';
       vuexModule.store.expiresDate = ''
      })
      .catch((error) => {
       console.log(error);
      });
  }

  getPatients() {
    this.axs.get('/api/operator/patients', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${vuexModule.store.token}`,
        'X-localization': 'uk',
      }
    })
    .then((response) => {
      console.log(response);
      vuexModule.store.listOfPatients = response;
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

export default { DataService };

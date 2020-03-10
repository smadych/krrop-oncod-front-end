import ax from '@/service/api';
import { SingInInterface } from '@/interfaces'
import { UserLogInData } from '@/store/logIn';

export class DataService {
  axs = ax;

  public tokens = '';
  
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
      this.tokens = response.data.access_token;
      console.log(this.tokens);
      succes(respData);
    }).catch((error) => {
      err(error);
      // console.log(error);
    });
  }

  public getUserProfile(succes: (logData: any) => void, err: (error: any) => void) {
    console.log(this.tokens);
    this.axs.get('/api/operator/patients', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${this.tokens}`,
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
}

export default { DataService };

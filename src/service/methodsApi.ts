import ax from '@/service/api';
import { SingInInterface } from '@/interfaces'
import { UserLogInData } from '@/store/logIn';

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
      succes(respData);
    }).catch((error) => {
      err(error);
      console.log(error);
    });
  }
}

export default { DataService };

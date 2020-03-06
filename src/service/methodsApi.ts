import ax from '@/service/api';
import { SingInInterface } from '@/interfaces'
import { UserLogInData } from '@/store/logIn';

export class DataService {
  axs = ax;

  // // Make a request for a user with a given ID
  // public getDataStore(succes: (todos: any) => void, err: (error: any) => void) {
  //   this.axs.get('/todo')
  //     .then((response) => {
  //       // handle success
  //       const result = response.data;
  //       succes(result);
  //     })
  //     .catch((error) => {
  //       // handle error
  //       err(error);
  //     });
  // }

  public sendDataAutorization(data: any, succes: (logData: any) => void, err: (error: any) => void) {
    this.axs.post('api/auth/login', data).then((response) => {
      console.log(response);
      const respData: any = response.data;
      succes(respData);
    }).catch((error) => {
      err(error);
      console.log(error.response.data.errors);
    });
  }
}

export default { DataService };

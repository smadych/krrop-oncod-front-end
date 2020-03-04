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

  public sendDataAutorization(data: UserLogInData, succes: (logData: UserLogInData) => void, err: (error: any) => void) {
    this.axs.post('api/auth/login', data).then((response) => {
      console.log(response);
      const respData: UserLogInData = response.data;
      succes(respData);
    }).catch((error) => {
      err(error);
      console.log(error);
    });
  }
}

export default { DataService };

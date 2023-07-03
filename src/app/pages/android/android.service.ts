import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, QueryFn } from '@angular/fire/compat/database';
import { Observable, catchError, from, map, switchMap, take, throwError } from 'rxjs';
import { AppData } from 'src/app/models/app-data.model';

@Injectable({
  providedIn: 'root'
})
export class AndroidService {

  private dbPath = '/android-app-list';

  appDataList: AngularFireList<AppData>;

  constructor(private db: AngularFireDatabase) {
    this.appDataList = this.db.list(this.dbPath);
  }

  getAllAppData(): Observable<AppData[]> {
    return this.appDataList.valueChanges();
  }

  getAll(): AngularFireList<AppData> {
    return this.appDataList;
  }

  deleteAppData(obj: any): Observable<void> {
    return from(this.appDataList.remove(obj.appId.toString())).pipe(
      map(() => {}),
      catchError((error) => {
        console.error('Error deleting AppData:', error);
        return throwError(() => new Error('Error deleting AppData'));
      })
    );
  }

  getSelectedAppData(obj: any): Observable<AppData[]> {
    return this.appDataList.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((action) => ({
          key: action.key,
          ...action.payload.val()
        })) as AppData[];
      }),
      map((appDataList) => {
        if (!obj.platform && !obj.choice) {
          return appDataList;
        }

        return appDataList.filter((appData) => {
          return (!obj.platform || appData.platform === obj.platform) && (!obj.choice || appData.choice === obj.choice);
        });
      })
    );
  }
}

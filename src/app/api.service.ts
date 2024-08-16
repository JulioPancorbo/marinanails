import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  public httpOptions: any;

  constructor(private http: HttpClient, ) {}

  getUsers() {
    return this.http.get(`${this.apiUrl}users2`);
  }

  // Otros métodos para manejar las llamadas a la API
  // ====================== Obtener entidades ================================

  public getEntity(entity: string, id?: number): any {
    if (id)
      return this.http.get(environment.apiUrl + entity + '/' + id, this.httpOptions);
    else
      return this.http.get(environment.apiUrl + entity, this.httpOptions);
  }

  public getSubEntity(entity: string, idEntity: number, subEntity: string, idSubEntity?: number): any {
    if (idSubEntity)
      return this.http.get(environment.apiUrl + entity + '/' + idEntity + '/' + subEntity + '/' + idSubEntity, this.httpOptions);
    else
      return this.http.get(environment.apiUrl + entity + '/' + idEntity + '/' + subEntity, this.httpOptions);
  }

  public getSubSubEntity(entity: string, idEntity: number, subEntity: string, idSubEntity: number, subSubEntity: string, idSubSubEntity?: number): any {
    if (idSubSubEntity)
      return this.http.get(environment.apiUrl + entity + '/' + idEntity + '/' + subEntity + '/' + idSubEntity + '/' + subSubEntity + '/' + idSubSubEntity, this.httpOptions);
    else
      return this.http.get(environment.apiUrl + entity + '/' + idEntity + '/' + subEntity + '/' + idSubEntity + '/' + subSubEntity, this.httpOptions);
  }


  // ====================== Añadir entidades ================================


  public addEntity(entity: string, params: any): any {
    return this.http.post(environment.apiUrl + entity, params, this.httpOptions);
  }

  public addSubEntity(entity: string, idEntity: number, subEntity: string, params?: any): any {
    return this.http.post(environment.apiUrl + entity + '/' + idEntity + '/' + subEntity, params, this.httpOptions);
  }

  public addSubSubEntity(entity: string, idEntity: number, subEntity: string, idSubEntity: number, subSubEntity: string, params?: any): any {
    return this.http.post(environment.apiUrl + entity + '/' + idEntity + '/' + subEntity + '/' + idSubEntity + '/' + subSubEntity, params, this.httpOptions);
  }


  // ====================== Borrar entidades ================================


  public deleteEntity(entity: string, id: number): any {
    return this.http.delete(environment.apiUrl + entity + '/' + id, this.httpOptions);
  }

  public deleteSubEntity(entity: string, idEntity: number, subEntity: string, idSubEntity: number): any {
    return this.http.delete(environment.apiUrl + entity + '/' + idEntity + '/' + subEntity + '/' + idSubEntity, this.httpOptions);
  }

  public deleteSubSubEntity(entity: string, idEntity: number, subEntity: string, idSubEntity: number, subSubEntity: string, idSubSubEntity: number): any {
    return this.http.delete(environment.apiUrl + entity + '/' + idEntity + '/' + subEntity + '/' + idSubEntity + '/' + subSubEntity + '/' + idSubSubEntity, this.httpOptions);
  }


  // ====================== Actualizar entidades ================================


  public updateEntity(entity: string, id: number, params: any): any {
    return this.http.put(environment.apiUrl + entity + '/' + id, params, this.httpOptions);
  }

  public updateSubEntity(entity: string, idEntity: number, subEntity: string, idSubEntity: number, params: any): any {
    return this.http.put(environment.apiUrl + entity + '/' + idEntity + '/' + subEntity + '/' + idSubEntity, params, this.httpOptions);
  }

  public updateSubSubEntity(entity: string, idEntity: number, subEntity: string, idSubEntity: number, subSubEntity: string, params: any): any {
    return this.http.put(environment.apiUrl + entity + '/' + idEntity + '/' + subEntity + '/' + idSubEntity + '/' + subSubEntity, params, this.httpOptions);
  }
}

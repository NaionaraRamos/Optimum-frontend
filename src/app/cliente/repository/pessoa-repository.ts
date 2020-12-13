import { BaseHttpService } from '../../services/http/base-http.service';
import { environment } from '../../../environments/environment';
import { PessoaMapper } from '../mapper/pessoa-mapper';
import { PessoaEntity } from '../entity/pessoa-entity';
import { PessoaModel } from '../model/pessoa-model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})

export class PessoaRepository {

    mapper = new PessoaMapper();

    constructor(public http: BaseHttpService) { }

    get(): Promise<PessoaModel[]> {
        return this.http
            .get<PessoaEntity[]>(`${environment.URLSERVIDOR}pessoas`)
            .toPromise().then(x => {
                return x.data.map(this.mapper.mapFrom);
           })
    }

    post(param: PessoaModel) {
        return this.http
            .post<PessoaEntity>(`${environment.URLSERVIDOR}pessoas`, this.mapper.mapTo(param))
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }
}
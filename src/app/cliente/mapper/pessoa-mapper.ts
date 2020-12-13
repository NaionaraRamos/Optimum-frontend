import { PessoaModel } from '../model/pessoa-model';
import { PessoaEntity } from '../entity/pessoa-entity';
import { Mapper } from '../../base/mapper';

export class PessoaMapper extends Mapper<PessoaEntity, PessoaModel> {

    mapFrom(param: PessoaEntity): PessoaModel {
        return {
            id: param.id,
            nome: param.nome ? param.nome : '',
            telefone: param.telefone,
            skype: param.skype,
            dataNascimento: param.dataNascimento,
            cpf: param.cpf,
            email: param.email,
            cep: param.cep,
            estado: param.estado,
            cidade: param.cidade
        };
    }

    mapTo(param: PessoaModel): PessoaEntity {
        return {
            id: param.id,
            nome: param.nome,
            telefone: param.telefone,
            skype: param.skype,
            dataNascimento: param.dataNascimento,
            cpf: param.cpf,
            email: param.email,
            cep: param.cep,
            estado: param.estado,
            cidade: param.cidade
        };
    }
}
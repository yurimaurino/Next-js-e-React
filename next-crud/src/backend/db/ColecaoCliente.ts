import firebase from "../config";
import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio {
  #conversor = {
    toFirestore(cliente: Cliente) {
      return {
        nome: cliente.nome,
        idade: cliente.idade,
      };
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot | firebase.firestore.DocumentSnapshot,
      options: firebase.firestore.SnapshotOptions
    ): Cliente {
      const dados = snapshot.data(options);
      if (!dados) {
        throw new Error("Dados não encontrados!");
      }
      return new Cliente(dados.nome, dados.idade, snapshot.id);
    },
  };

  async salvar(cliente: Cliente): Promise<Cliente> {
    if (cliente?.id) {
      await this.colecao().doc(cliente.id).set(cliente);
      return cliente;
    } else {
      const docRef = await this.colecao().add(cliente);
      const doc = await docRef.get();
      return this.#conversor.fromFirestore(doc, {}); // Certifique-se de que os dados não são 'undefined'
    }
  }

  async excluir(cliente: Cliente): Promise<Cliente> {
    const id = cliente?.id ?? undefined;
    await this.colecao().doc(id).delete();
    return cliente;
  }

  async obterTodos(): Promise<Cliente[]> {
    const query = await this.colecao().get();
    return query.docs.map(doc => this.#conversor.fromFirestore(doc, {})); // Converte todos os docs para Cliente
  }

  private colecao() {
    return firebase
      .firestore()
      .collection("clientes")
      .withConverter(this.#conversor);
  }
}

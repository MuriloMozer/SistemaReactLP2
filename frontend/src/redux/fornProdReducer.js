import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ESTADO from '../recursos/estado';

const urlBase = 'http://localhost:4000/fornecedor_produto';

// Thunks
export const buscarFornecedoresProdutos = createAsyncThunk('fornecedor_produto/buscarFornecedoresProdutos', async () => {
  try {
    const resposta = await fetch(urlBase, { method: 'GET' });
    const dados = await resposta.json();
    if (dados.status) {
      return {
        status: true,
        listaFornecedoresProdutos: dados.listaFornecedoresProdutos,
        mensagem: '',
      };
    } else {
      return {
        status: false,
        listaFornecedoresProdutos: [],
        mensagem: 'Ocorreu um erro ao recuperar os fornecedores de produtos da base de dados.',
      };
    }
  } catch (erro) {
    return {
      status: false,
      listaFornecedoresProdutos: [],
      mensagem: 'Ocorreu um erro ao recuperar os fornecedores de produtos da base de dados:' + erro.message,
    };
  }
});

export const associarFornecedorProduto = createAsyncThunk('fornecedor_produto/associar', async (fornecedorProduto) => {
    try {
      const resposta = await fetch(urlBase, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fornecedorProduto),
      });
      if (resposta.ok) {
        const dados = await resposta.json();
        return {
          status: dados.status,
          mensagem: dados.mensagem,
          fornecedorProduto,
        };
      } else {
        return {
          status: false,
          mensagem: 'Ocorreu um erro ao associar o fornecedor ao produto.',
          fornecedorProduto,
        };
      }
    } catch (erro) {
      return {
        status: false,
        mensagem: 'Ocorreu um erro ao associar o fornecedor ao produto:' + erro.message,
        fornecedorProduto,
      };
    }
});

export const atualizarAssociacaoFornecedorProduto = createAsyncThunk(
  'fornecedor_produto/atualizar',
  async (fornecedorProduto) => {
    try {
      const resposta = await fetch(urlBase, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fornecedorProduto),
      });
      if (resposta.ok) {
        const dados = await resposta.json();
        return {
          status: dados.status,
          mensagem: dados.mensagem,
          fornecedorProduto,
        };
      } else {
        return {
          status: false,
          mensagem: 'Ocorreu um erro ao atualizar a associação do fornecedor ao produto.',
          fornecedorProduto,
        };
      }
    } catch (erro) {
      return {
        status: false,
        mensagem: 'Ocorreu um erro ao atualizar a associação do fornecedor ao produto:' + erro.message,
        fornecedorProduto,
      };
    }
  }
);

  
export const removerAssociacaoFornecedorProduto = createAsyncThunk('fornecedor_produto/remover', async (fornecedorProduto) => {
    try {
        const resposta = await fetch(urlBase, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(fornecedorProduto),
        });
        if (resposta.ok) {
        const dados = await resposta.json();
        return {
            status: dados.status,
            mensagem: dados.mensagem,
            fornecedorProduto,
        };
        } else {
        return {
            status: false,
            mensagem: 'Ocorreu um erro ao remover a associação do fornecedor ao produto.',
            fornecedorProduto,
        };
        }
    } catch (erro) {
        return {
        status: false,
        mensagem: 'Ocorreu um erro ao remover a associação do fornecedor ao produto:' + erro.message,
        fornecedorProduto,
        };
    }
});
  
const initialState = {
    estado: ESTADO.OCIOSO,
    mensagem: '',
};

const fornProdSlice = createSlice({
  name: 'fornecedor_produto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(buscarFornecedoresProdutos.pending, (state, action) => {
        state.estado = ESTADO.PENDENTE;
        state.mensagem = 'Buscando fornecedores de produtos...';
      })
      .addCase(buscarFornecedoresProdutos.fulfilled, (state, action) => {
        if (action.payload.status) {
          state.estado = ESTADO.OCIOSO;
          state.mensagem = action.payload.mensagem;
          state.fornecedoresProdutos = action.payload.listaFornecedoresProdutos;
        } else {
          state.estado = ESTADO.ERRO;
          state.mensagem = action.payload.mensagem;
        }
      })
      .addCase(buscarFornecedoresProdutos.rejected, (state, action) => {
        state.estado = ESTADO.ERRO;
        state.mensagem = action.error.message;
      })
      .addCase(associarFornecedorProduto.fulfilled, (state, action) => {
        state.estado = ESTADO.OCIOSO;
        state.mensagem = action.payload.mensagem;
      })
      .addCase(associarFornecedorProduto.pending, (state, action) => {
        state.estado = ESTADO.PENDENTE;
        state.mensagem = 'Associando fornecedor ao produto...';
      })
      .addCase(associarFornecedorProduto.rejected, (state, action) => {
        state.mensagem = 'Erro ao associar o fornecedor ao produto: ' + action.error.message;
        state.estado = ESTADO.ERRO;
      })
      .addCase(atualizarAssociacaoFornecedorProduto.fulfilled, (state, action) => {
        state.estado = ESTADO.OCIOSO;
        const indice = state.fornecedoresProdutos.findIndex(
          fornecedorProduto =>
            fornecedorProduto.forn_cnpj === action.payload.fornecedorProduto.forn_cnpj &&
            fornecedorProduto.prod_codigo === action.payload.fornecedorProduto.prod_codigo
        );
        state.fornecedoresProdutos[indice] = action.payload.fornecedorProduto;
        state.mensagem = action.payload.mensagem;
      })
      .addCase(atualizarAssociacaoFornecedorProduto.pending, (state, action) => {
        state.estado = ESTADO.PENDENTE;
        state.mensagem = 'Atualizando associação do fornecedor ao produto...';
      })
      .addCase(atualizarAssociacaoFornecedorProduto.rejected, (state, action) => {
        state.mensagem =
          'Erro ao atualizar a associação do fornecedor ao produto: ' + action.error.message;
        state.estado = ESTADO.ERRO;
      })
      .addCase(removerAssociacaoFornecedorProduto.fulfilled, (state, action) => {
        state.estado = ESTADO.OCIOSO;
        state.mensagem = action.payload.mensagem;
      })
      .addCase(removerAssociacaoFornecedorProduto.pending, (state, action) => {
        state.estado = ESTADO.PENDENTE;
        state.mensagem = 'Removendo associação do fornecedor ao produto...';
      })
      .addCase(removerAssociacaoFornecedorProduto.rejected, (state, action) => {
        state.mensagem = 'Erro ao remover a associação do fornecedor ao produto: ' + action.error.message;
        state.estado = ESTADO.ERRO;
      });
  },
});

export default fornProdSlice.reducer;
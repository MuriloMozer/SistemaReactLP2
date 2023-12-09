import {configureStore} from '@reduxjs/toolkit';
import clienteSlice from './clienteReducer';
import categoriaSlice from './categoriaReducer';
import produtoSlice from './produtoReducer';

const store = configureStore({
    reducer:{
        cliente: clienteSlice,
        categoria: categoriaSlice,
        produto: produtoSlice,
        fornecedor: fornecedorSlice,
        fornProd: fornProdSlice
    }
});

export default store;
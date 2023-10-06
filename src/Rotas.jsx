import React from 'react';
import { Route, Routes } from "react-router-dom";
import FormCliente from './views/cliente/FormCliente';
import FormEntregador from './views/Entregador/FormEntregador';
import Home from './views/home/Home';
import FormProduto from './views/produto/Formproduto';
import ListCliente from './views/cliente/ListCliente';
import ListProduto from './views/produto/ListProduto';
import ListEntregador from './views/Entregador/ListEntregador';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="form-entregador" element={ <FormEntregador/> } />
                <Route path="list-cliente" element={ <ListCliente/> } />
                <Route path="list-produto" element={ <ListProduto/> } />
                <Route path="list-entregador" element={ <ListEntregador/> } />
            </Routes>
        </>
    )
}

export default Rotas

import React, { useState } from 'react';
import ProdutoList from './components/ProdutoList';

const App = () => {

    return (
        <div>
            <h1>Gerenciamento de Produtos</h1>
            <ProdutoList />
        </div>
    );
};

export default App;
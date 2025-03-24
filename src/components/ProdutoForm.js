import React, { useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

const ProdutoForm = ({ produto, onSave }) => {
    const [nome, setNome] = useState(produto ? produto.nome : '');
    const [codigo, setCodigo] = useState(produto ? produto.codigo : '');
    const [descricao, setDescricao] = useState(produto ? produto.descricao : '');
    const [preco, setPreco] = useState(produto ? produto.preco : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const novoProduto = { nome, codigo, descricao, preco };
        if (produto) {
            axios.put(`http://localhost:5000/api/produtos/${produto.id}`, novoProduto)
                .then(() => {
                    onSave(); 
                });

        } else {
            axios.post('http://localhost:5000/api/produtos', novoProduto)
                .then(() => {
                    onSave();
                });
        }
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Cadastro de Produtos 
            </Typography>
            <form onSubmit={handleSubmit}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome</TableCell>
                                <TableCell>Código</TableCell>
                                <TableCell>Descrição</TableCell>
                                <TableCell>Preço</TableCell>
                                <TableCell>Ações</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell><input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" required /></TableCell>
                                <TableCell><input type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} placeholder="Código" required /></TableCell>
                                <TableCell><input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição" required /></TableCell>
                                <TableCell><input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} placeholder="Preço" required /></TableCell>
                                <IconButton type="submit" color="primary">
                                    <SaveIcon/>
                                </IconButton>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </form>
        </div>
    );
};

export default ProdutoForm;
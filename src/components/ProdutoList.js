import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ProdutoForm from './ProdutoForm';

const ProdutoList = () => {
    const [produtos, setProdutos] = useState([]);
    const [produtoEditando, setProdutoEditando] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        carregarProdutos();
    }, []);

    const carregarProdutos = () => {
        axios.get('http://localhost:5000/api/produtos')
            .then(response => {
                console.log('Produtos carregados:', response.data);
                setProdutos(response.data);
            })
            .catch(error => {
                console.error('Erro ao carregar produtos:', error);
            });
    };

    const deletarProduto = (id) => {
        if (window.confirm('Tem certeza que deseja excluir este produto?')) {
            axios.delete(`http://localhost:5000/api/produtos/${id}`)
                .then(() => {
                    alert('Produto excluído com sucesso!');
                    carregarProdutos();
                })
                .catch(error => {
                    console.error('Erro ao excluir produto:', error);
                });
        }
    };

    const abrirDialogEdicao = (produto) => {
        setProdutoEditando(produto);
        setOpenDialog(true);
    };

    const fecharDialogEdicao = () => {
        setOpenDialog(false);
        setProdutoEditando(null);
    };

    const salvarEdicao = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/produtos/${produtoEditando.id}`, produtoEditando)
            .then(() => {
                alert('Produto atualizado com sucesso!');
                fecharDialogEdicao();
                carregarProdutos();
            })
            .catch(error => {
                console.error('Erro ao atualizar produto:', error);
            });
    };

    return (
        <div style={{ padding: '20px' }}>
            <ProdutoForm onSave={carregarProdutos} />
            <Typography variant="h4" gutterBottom>
                Lista de Produtos
            </Typography>
            

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
                        {produtos.length > 0 ? (
                            produtos.map(produto => (
                                <TableRow key={produto.id}>
                                    <TableCell>{produto.nome}</TableCell>
                                    <TableCell>{produto.codigo}</TableCell>
                                    <TableCell>{produto.descricao}</TableCell>
                                    <TableCell>R$ {produto.preco}</TableCell>
                                    <TableCell>
                                        <IconButton color="primary" onClick={() => abrirDialogEdicao(produto)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton color="error" onClick={() => deletarProduto(produto.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} align="center">
                                    Nenhum produto cadastrado.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={openDialog} onClose={fecharDialogEdicao}>
                <DialogTitle>Editar Produto</DialogTitle>
                <DialogContent>
                    <form onSubmit={salvarEdicao}>
                        <TextField
                            margin="dense"
                            label="Nome"
                            type="text"
                            fullWidth
                            value={produtoEditando?.nome || ''}
                            onChange={(e) => setProdutoEditando({ ...produtoEditando, nome: e.target.value })}
                            
                        />
                        <TextField
                            margin="dense"
                            label="Código"
                            type="text"
                            fullWidth
                            value={produtoEditando?.codigo || ''}
                            onChange={(e) => setProdutoEditando({ ...produtoEditando, codigo: e.target.value })}
                            
                        />
                        <TextField
                            margin="dense"
                            label="Descrição"
                            type="text"
                            fullWidth
                            multiline
                            value={produtoEditando?.descricao || ''}
                            onChange={(e) => setProdutoEditando({ ...produtoEditando, descricao: e.target.value })}
                            
                        />
                        <TextField
                            margin="dense"
                            label="Preço"
                            type="number"
                            fullWidth
                            value={produtoEditando?.preco || ''}
                            onChange={(e) => setProdutoEditando({ ...produtoEditando, preco: parseFloat(e.target.value) })}
                            
                        />
                        <DialogActions>
                            <Button type="submit" color="primary">Salvar</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
            
        </div>
    );
};

export default ProdutoList;
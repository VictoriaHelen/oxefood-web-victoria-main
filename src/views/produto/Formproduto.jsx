import React, { useEffect,useState } from "react";
//import InputMask from 'react-input-mask';
import axios from "axios";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistemas';
import { Link,useLocation } from "react-router-dom";

export default function Formproduto () {


    const { state } = useLocation();
    const [idProduto, setIdProduto] = useState();

    const [titulo, setTitulo] = useState();
    const [codigoProduto, setCodigoProduto] = useState();
    const [descricao, setDescricao] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [tempMin, setTempMin] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8082/api/cliente/" + state.id)
        .then((response) => {
            setIdProduto(response.data.id)
            setTitulo(response.data.titulo)
            setCodigoProduto(response.data.codigoProduto)
            setDescricao(response.data.descricao)
            setValorUnitario(response.data.valorUnitario)
            setTempMin(response.data.tempMin)
            })
        }
}, [state])
 
	function salvar() {

        let produtoRequest = {
            titulo: titulo,
            codigoProduto: codigoProduto,
            descricao: descricao,
            valorUnitario:valorUnitario,
            tempMin:tempMin
        }
    
        if (idProduto != null) { //Alteração:
            axios.put("http://localhost:8082/api/produto/" + idProduto, produtoRequest)
            .then((response) => { console.log('Cliente alterado com sucesso.')
         })
            .catch((error) => { console.log('Erro ao alter um cliente.') })
        } else { //Cadastro:
            axios.post("http://localhost:8082/api/produto", produtoRequest)
            .then((response) => { console.log('Produto cadastrado com sucesso.')
         })
            .catch((error) => { console.log('Erro ao incluir o produto.') })
        }
    }


    return (

        <div>
            <MenuSistema />
            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                { idProduto === undefined &&
                <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
            }
                { idProduto != undefined &&
         <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
              }

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Titulo'
                                    maxLength="100"
                                    value={titulo}
                                    onChange={e => setTitulo(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do produto'
                                    maxLength="100"
                                    value={codigoProduto}
                                    onChange={e => setCodigoProduto(e.target.value)}
                                    >
                                    
                                </Form.Input>
                            </Form.Group>
                            
                            <Form.Group >
                                <Form.TextArea 
                                    
                                    label='Descrição'
                                    placeholder="Descreva o produto"
                                    value={descricao}
                                    onChange={e => setDescricao(e.target.value)}
                                    >
                                </Form.TextArea>
                                </Form.Group>
                                
                            <Form.Group >
                                <Form.Input
                                    
                                    label='Valor unitário'
                                    maxLength="100"
                                    value={valorUnitario}
                                    onChange={e => setValorUnitario(e.target.value)}
                                    
                                    >

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de entrega minimo em minutos'
                                    value={tempMin}
                                    onChange={e => setTempMin(e.target.value)}
                                    
                                >
                                
                                </Form.Input>

                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                <Link to={'/list-produto'}>Voltar</Link>
                                Voltar
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={()=> salvar()}
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}

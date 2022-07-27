import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Head from './Head';
import styles from './Product.module.css';

const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function fetchData(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);
      } catch (err) {
        setError('The communication with the API has failed');
      } finally {
        setLoading(false)
      }
    }
    fetchData(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);
  
  if (loading) return <div>Carregando...</div>
  if (error) return <p>{error}</p>
  if (product === null) return null;

  return (
    <section className={`${styles.product} animeLeft`}>
      <Head title={`Ranek | ${product.nome}`} description="Detail about product" />
      {product.fotos.map( photo => <img key={photo.src} src={photo.src} alt={photo.titulo} />)}
      <div>
        <h1>{product.nome}</h1>
        <p className={styles.price}>{product.preco}</p>
        <p className={styles.description}>{product.descricao}</p>
      </div>
    </section>
  )
}

export default Product;
import { Component } from 'react';
import { products, backButton } from './cms-data/products-data';
import { Link } from 'react-router-dom';



const prod = products.reduce((a, { image, alt, name, category, type, desc, features, vendors, pageID }) => ({ ...a, [pageID]: { image, alt, name, category, type, desc, features, vendors } }), {});
let windowPathname = window.location.pathname;
let currentProduct = prod[windowPathname];

export class ProductPage extends Component {
  render() {
    return (
      <section className="product">
        <div className="container">

          <ProductImage />
          <ProductInfo />

        </div>
      </section>
    )
  }
}

class BackButton extends Component {
  render() {
    return (
      <Link to={backButton.link} className="button small-button back">{backButton.name}</Link>
    )
  }
}

class ProductInfo extends Component {

  render() {
    return (

      <div className="product-info">
        <h2>{currentProduct.name}</h2>
        <span className="category">{currentProduct.category}</span>
        <Description />
        <Features />
        <Vendors />
        <BackButton />
      </div>
    )
  }
}

class Description extends Component {
  render() {
    if (currentProduct.desc !== "") {
      return (<p>{currentProduct.desc}</p>)
    } else {
      return null
    }
  }
}

class Vendors extends Component {
  render() {
    return (
      <div className="vendors">
        <h3>Producenci:</h3>

        { (currentProduct.vendors).map((element, index) => {
          return <span key={`vendor-${index}`}>{element}</span>
        })}
      </div>
    )
  }
}

class Features extends Component {
  render() {
    return (
      <ul className="features">
        {(currentProduct.features).map((element, index) => {
          return <li key={`feature-${index}`}>{element}</li>
        })}
      </ul>
    )
  }
}

class ProductImage extends Component {
  render() {
    return (
      <div className="product-image">
        <img src={currentProduct.image} alt={currentProduct.alt} />
      </div>
    )
  }
}

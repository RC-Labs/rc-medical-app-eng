
import { Component } from 'react';
import { products, categories, catHeading } from './cms-data/products-data';


export class ProductsSection extends Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this)
    this.state = {
      cat: 'Wszystkie produkty'
    };
  }
  handler(event) {
    this.setState({
      cat: event.target.innerHTML
    }, () => {
      localStorage.setItem("currentCat", this.state);
    })

  }

  render() {

    return (
      <section className="products">
        <div className="container">
          <Categories handler={this.handler} passCat={this.state.cat} />
          <ProductsList passCat={this.state.cat} />
        </div>
      </section>
    )
  }
}

class Categories extends Component {
  render() {
    return (
      <div className="categories" data-aos='fade-right'>
        <div className="cat-sticky">
          <span className="cat-heading">{catHeading}</span>
          <CategoryList click={this.props.handler} />
        </div>
      </div>
    )
  }
}

class CategoryList extends Component {

  render() {
    return (
      categories.map((element, index) =>
        <span onClick={this.props.click} key={`cat-${index}`} className="cat">{element.name}</span>
      )
    )
  }
}

class ListedProduct extends Component {

  render() {
    return (
      <a href={this.props.link} className="listed-product">
        <div className="image">
          <img src={this.props.src} alt={this.props.alt} /></div>
        <div className="product-info">
          <span className="product-name">{this.props.name}</span>
          <span className="product-detail">{this.props.detail}</span>
        </div>
      </a>
    )
  }
}

class ProductsList extends Component {

  render() {
    return (
      <div className="product-list">
        <h2>{this.props.passCat}</h2>
        {  products.filter(product => product.category === this.props.passCat || this.props.passCat === "Wszystkie produkty").map((filteredProduct, index) => (
          <ListedProduct link={window.location.origin + filteredProduct.pageID} key={index} src={filteredProduct.image} alt={filteredProduct.alt} name={filteredProduct.name} detail={filteredProduct.category} />
        ))}
      </div>
    )
  }
}
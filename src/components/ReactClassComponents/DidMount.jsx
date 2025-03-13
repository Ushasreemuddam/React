import React from "react";

export class DidMount extends React.Component {
    constructor() {
        super();
        this.state = {
            Product: []
        };
    }

    componentDidMount() {
        fetch("http://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    Product: data
                });
            })
    }

    render() {
        return (
            <div>
                <h2>FakeStore Products</h2>
                <ol>
                    {this.state.Product.map(product => (
                        <li key={product.id}>{product.title}</li>
                    ))}
                </ol>
            </div>
        );
    }
}

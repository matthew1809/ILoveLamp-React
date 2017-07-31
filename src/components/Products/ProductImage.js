import React, { Component } from 'react';

class ProductImage extends Component {

  render() {
    var placeholder = 'https://placeholdit.imgix.net/~text?txtsize=69&txt=824%C3%971050&w=824&h=1050';
  
    let file;
    let fileId;

    try {
      fileId = this.props.product.relationships.main_image.data.id;
      file = this.props.products.included.main_images.find(function (el) {
        return fileId === el.id
      })

      return <img alt={'product name:' + this.props.product.name + ', product description:' + this.props.product.description} src={file.link.href} style={{"background": this.props.background}}/> || <img alt="placeholder" src={placeholder}/>

    } catch (e) {
      
      try {
        fileId = this.props.product.relationships.files.data[0].id;
        file = this.props.products.included.files.find(function (el) {
          return fileId === el.id
        })
        
          return <img alt={'product name:' + this.props.product.name + ', product description:' + this.props.product.description} src={file.link.href} style={{"background": this.props.background}}/> || <img alt="placeholder" src={placeholder}/>
      
      } catch (e) {
      
         return <img alt="placeholder" src={placeholder}/>
         
      }     
    }
  };
};

export default ProductImage;

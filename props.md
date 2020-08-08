PROPS

Son propiedades que se pasan como argumentos a las funciones
{this.props.logo}
Atributos de nuestro componente

1. En badge.js
Vamos a crear una variable llamada const burger="Hamburguesa"
y esto lo voy a llamar en dentro de las llaves src={burger}

2. ¿De dónde sale props? sale de:
eso no va funcionar xxxxxxxxxxxxxxxxxx

this.props

src={this.props.burger}

3. Veamos a index.js
En la parte de index.js definamos algunas propiedades y su valor para luego llamar en la parte de Badge.js burger="hamburguesa"
desde afuera le estamos pasando burger
y en nuestro archivo leemos con this.props.burger
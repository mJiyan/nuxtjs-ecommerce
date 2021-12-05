<template>
  <div>
    <Header />
    <div class="container mt-8 mx-auto px-4 sm:px-0">
      <div class="rounded-xl p-8 bg-blue-100">
        <h1 class="font-bold mb-6">
          List of Products
        </h1>
        <ProductList
          :products="filteredProducts"
          :productCount="productCount"
          :filters="filters"
          @set-filters="filtersChanged($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import ProductList from '../components/ProductList'

export default {
  name: 'index',
  components: {
    Header,
    ProductList
  },
  data () {
    return {
      products: [],
      filteredProducts: [],
      filters: {
        s: '',
        f: []
      },
      productCount: 0
    }
  },
  async mounted () {
    const response = await fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .catch(e => console.log(e))
    this.products = this.filteredProducts = response
    this.productCount = response.length
    response.forEach(e => {
      if (!this.filters.f.includes(e.category)) {
        this.filters.f.push(e.category)
      }
    })
    
  },
  methods: {
    filtersChanged (f) {
      this.filters.s = f.s
      this.filters.f = f.categories ?? this.filters.f;

      let products = this.products.filter(
        p =>
          p.title.toLowerCase().indexOf(this.filters.s.toLowerCase()) >= 0 ||
          p.description.toLowerCase().indexOf(this.filters.s.toLowerCase()) >= 0
      )

      products = products.filter(p => this.filters.f.includes(p.category))

      this.filteredProducts = products
      this.productCount = products.length

    }
  }
}
</script>

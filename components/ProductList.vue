<template>
  <div>
    <input
      type="search"
      placeholder="Search products..."
      class="border border-blue-200 bg-white mb-4 p-4 rounded-xl w-full"
      v-model="searchInput"
      @keyup="search($event.target.value)"
    />

    <div class="border border-gray-200 rounded-xl flex mb-4">
      <ul>
        <li class="text-xs">
          <label>
            <input
              id="0"
              name="electronics"
              type="checkbox"
              value="electronics"
              checked=""
              @click="filter($event.target.value)"
            />
            electronics
          </label>
        </li>
        <li class="text-xs">
          <label>
            <input
              id="1"
              name="jewelery"
              type="checkbox"
              value="jewelery"
              checked=""
              @click="filter($event.target.value)"
            />
            jewelery
          </label>
        </li>
        <li class="text-xs">
          <label>
            <input
              id="2"
              name="men's clothing"
              type="checkbox"
              value="men's clothing"
              checked=""
              @click="filter($event.target.value)"
            />
            men's clothing
          </label>
        </li>
        <li class="text-xs">
          <label>
            <input
              id="3"
              name="women's clothing"
              type="checkbox"
              value="women's clothing"
              checked=""
              @click="filter($event.target.value)"
            />
            women's clothing
          </label>
        </li>
      </ul>
    </div>
    <p class="mb-4 text-blue-500 text-xs">
      Showing <strong>{{ productCount }}</strong> results. in categories
      <strong>{{ filters.f.join(', ') }}</strong>
    </p>
    <ul class="grid grid-cols-1 sm:grid-cols-3 gap-8">
      <li v-for="product in products" :key="product.id">
        <div
          class="bg-white rounded-md p-4 flex flex-col items-center justify-center overflow-hidden"
        >
          <h2
            class="w-full font-bold mb-6 pb-4 border-b border-blue-200 flex flex-row items-center justify-between"
          >
            <span>
              <span class="block">
                {{ product.title }}
              </span>
              <span class="text-xs text-blue-300">
                {{ product.category }}
              </span>
            </span>
            <span class="border rounded-full py-2 px-4 text-sm">
              ${{ product.price }}
            </span>
          </h2>
          <p class="text-sm mb-4">
            {{ product.description }}
          </p>
          <img
            :src="product.image"
            :alt="product.title"
            class="block max-w-xs p-8"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "ProductList",
    props: ["products", "filters", "productCount", "filters"],
    methods: {
        search(s) {
            this.$emit("set-filters", {
                ...this.filters,
                s
            });
        },
        filter(f) {
            let categories = this.filters.f;
            if (categories.includes(f)) {
                categories = categories.filter(category => category !== f);
            }
            else {
                categories.push(f);
            }
            this.$emit("set-filters", {
                ...this.filters,
                categories
            });
        }
    },
}
</script>

<style></style>

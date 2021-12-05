import { mount, shallowMount } from "@vue/test-utils";
import ProductList from "../components/ProductList";

describe("ProductList", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(ProductList, {
      propsData: {
        filters: {
          f: [],
          s: "",
        },
      },
    });
    expect(wrapper.vm).toBeTruthy();
  });

  test("search function is works", () => {
    const wrapper = mount(ProductList, {
      propsData: {
        filters: {
          f: [],
          s: "",
        },
      },
    });
    expect(wrapper.vm.search).not.toBe(undefined);
  });

  test("filter function is works", () => {
    const wrapper = mount(ProductList, {
      propsData: {
        filters: {
          f: ["electronics"],
          s: "",
        },
      },
    });
    expect(wrapper.vm.filter).not.toBe(undefined);
  });

  test("pushing a value to the search component", () => {
    const wrapper = mount(ProductList, {
      propsData: {
        filters: {
          f: [""],
          s: "",
        },
      },
    });
    const input = wrapper.find("input");
    input.element.value = "laptop";
    input.trigger('input');
    expect(wrapper.vm.searchInput).toBe("laptop");
  });

  test("pushing a value to the filter component", () => {
    const wrapper = mount(ProductList, {
      propsData: {
        filters: {
          f: [],
          s: "",
        },
      },
    });

    const input = wrapper.find('[name="jewelery"]');
    input.trigger('click');
    expect(wrapper.vm.filters.f.includes('jewelery')).toBe(true);
    expect(wrapper.findAll('li').length).toBe(4);
  });


});

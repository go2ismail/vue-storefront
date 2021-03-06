import onEscapePress from '@vue-storefront/core/mixins/onEscapePress'
import { loadWishlist, productsInWishlist, closeWishlist, isWishlistOpen } from '@vue-storefront/core/modules/wishlist/features'

export default {
  name: 'Wishlist',
  props: {
    product: {
      type: Object,
      required: false,
      default: () => { }
    }
  },
  methods: {
    onEscapePress () {
      this.closeWishlist()
    }
  },
  mixins: [ onEscapePress, loadWishlist, productsInWishlist, closeWishlist, isWishlistOpen ]
}

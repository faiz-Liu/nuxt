<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-hidden="true" ref="modalRef">
    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
      <span class="icofont icofont-close" aria-hidden="true"></span>
    </button>
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <div class="qwick-view-left">
            <div class="quick-view-learg-img">
              <div class="quick-view-tab-content tab-content">
                <div class="tab-pane active show fade" id="modal1" role="tabpanel">
                  <img src="/img/quick-view/l1.jpg" alt="">
                </div>
                <div class="tab-pane fade" id="modal2" role="tabpanel">
                  <img src="/img/quick-view/l2.jpg" alt="">
                </div>
                <div class="tab-pane fade" id="modal3" role="tabpanel">
                  <img src="/img/quick-view/l3.jpg" alt="">
                </div>
              </div>
            </div>
            <div class="quick-view-list nav" role="tablist">
              <a class="active" href="#modal1" data-bs-toggle="tab" role="tab">
                <img src="/img/quick-view/s1.jpg" alt="">
              </a>
              <a href="#modal2" data-bs-toggle="tab" role="tab">
                <img src="/img/quick-view/s2.jpg" alt="">
              </a>
              <a href="#modal3" data-bs-toggle="tab" role="tab">
                <img src="/img/quick-view/s3.jpg" alt="">
              </a>
            </div>
          </div>
          <div class="qwick-view-right">
            <div class="qwick-view-content">
              <h3>Aerion Carbon Helmet</h3>
              <div class="price">
                <span class="new">$90.00</span>
                <span class="old">$120.00</span>
              </div>
              <div class="rating-number">
                <div class="quick-view-rating">
                  <i class="fa fa-star reting-color"></i>
                  <i class="fa fa-star reting-color"></i>
                  <i class="fa fa-star reting-color"></i>
                  <i class="fa fa-star reting-color"></i>
                  <i class="fa fa-star reting-color"></i>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do tempor incididun ut labore et dolore magna aliqua.</p>
              <div class="quick-view-select">
                <div class="select-option-part">
                  <label>Size*</label>
                  <select class="select">
                    <option value="">- Please Select -</option>
                    <option value="">900</option>
                    <option value="">700</option>
                  </select>
                </div>
                <div class="select-option-part">
                  <label>Color*</label>
                  <select class="select">
                    <option value="">- Please Select -</option>
                    <option value="">orange</option>
                    <option value="">pink</option>
                    <option value="">yellow</option>
                  </select>
                </div>
              </div>
              <div class="quickview-plus-minus">
                <div class="cart-plus-minus">
                  <div class="dec qtybutton" @click="decreaseQty">-</div>
                  <input type="text" :value="quantity" name="qtybutton" class="cart-plus-minus-box" readonly>
                  <div class="inc qtybutton" @click="increaseQty">+</div>
                </div>
                <div class="quickview-btn-cart">
                  <a class="btn-style" href="#">add to cart</a>
                </div>
                <div class="quickview-btn-wishlist">
                  <a class="btn-hover" href="#"><i class="icofont icofont-heart-alt"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const quantity = ref(1)

function increaseQty() {
  quantity.value++
}

function decreaseQty() {
  if (quantity.value > 1) {
    quantity.value--
  }
}
</script>

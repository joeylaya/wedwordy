<script setup lang="ts">
</script>

<template>
<div class="p-12 flex flex-wrap gap-8">
  <section id="buttons" class="outline">
    <h2 class="mb-4 header-2">Buttons</h2>
    <div class="flex flex-wrap gap-4">
      <div class="flex flex-col gap-2 text-center place-items-center">
        <p class="text-sm">Button 1</p>
        <button class="btn btn-1 group">
          <i class="icon icon-btn fi fi-br-plus"></i>
          <h5>Button</h5>
        </button>
      </div>
      <div class="flex flex-col gap-2 text-center place-items-center">
        <p class="text-sm">Button 2</p>
        <button class="btn btn-2">Button</button>
      </div>
      <div class="flex flex-col gap-2 text-center place-items-center">
        <p class="text-sm">Filter</p>
        <button class="btn btn-filter">Filter</button>
      </div>
      <div class="flex flex-col gap-2 text-center place-items-center">
        <p class="text-sm">Filter Selected</p>
        <button class="btn btn-filter-selected group">
          <i class="icon icon-filter fi fi-br-check"></i>
          <p>Filter</p>
        </button>
      </div>
      <div class="flex flex-col gap-2 text-center place-items-center">
        <p class="text-sm">Selector</p>
        <button class="btn btn-selector">Iaculis hac augue</button>
      </div>
      <div class="flex flex-col gap-2 text-center place-items-center">
        <p class="text-sm">Selector Selected</p>
        <button class="btn btn-selector-selected">
          <i class="icon icon-selector fi fi-br-check"></i>
          <p class="gradient-text">Iaculis hac augue</p>
        </button>
      </div>
    </div>
  </section>
  <section id="icons" class="outline">
    <h2 class="mb-4 header-2">Icons</h2>
    <div class="flex flex-wrap gap-4">
      <div class="flex flex-col gap-2 text-center place-items-center">
        <p class="text-sm">Icon Btn</p>
        <div class="icon icon-btn">
          <i class="fi fi-br-plus"></i>
        </div>
      </div>
      <div class="flex flex-col gap-2 text-center place-items-center">
        <p class="text-sm">Icon Filter</p>
        <div class="icon icon-filter">
          <i class="fi fi-br-plus"></i>
        </div>
      </div>
      <div class="flex flex-col gap-2 text-center place-items-center">
        <p class="text-sm">Icon Selector</p>
        <div class="icon icon-selector">
          <i class="fi fi-br-plus"></i>
        </div>
      </div>
      <div class="flex flex-col gap-2 text-center place-items-center">
        <p class="text-sm">Icon Nav</p>
        <div class="icon icon-nav">
          <i class="fi fi-br-plus h-7"></i>
        </div>
      </div>
      <div class="flex flex-col gap-2 text-center place-items-center">
        <p class="text-sm">Icon Add Card</p>
        <div class="icon icon-card-add">
          <i class="fi fi-br-plus h-16"></i>
        </div>
      </div>
    </div>
  </section>
  <section id="cards" class="outline">
    <h2 class="mb-4 header-2">Cards</h2>
    <div class="flex flex-wrap gap-4">
      <div class="flex flex-col gap-2 text-center place-items-center">
        <p class="text-sm">Script Card</p>
        <div class="card w-64 h-40 md:(h-80) p-6 gradient-300 hover:(gradient-500) active:(gradient-100) text-gray-100 text-left">
          <i class="fi fi-br-menu-dots text-right"></i>
          <div class="h-full flex flex-col gap-4 md:(gap-6) justify-end">
            <h3 class="header-3">Etiam vestibulum morbi eleifend congue</h3>
            <div class="flex gap-1 md:(flex-col gap-0)">
              <p class="text-sm">Last Edited</p>
              <p class="text-sm">Jan 17, 2022</p>               
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2 text-center place-items-center">
        <p class="text-sm">Script Card Add</p>
        <div class="card w-64 h-40 md:(h-80) p-6 bg-gray-100 flex justify-center place-items-center group">
          <div class="icon icon-card-add">
            <i class="fi fi-br-plus h-16"></i>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2 text-center place-items-center">
        <p class="text-sm">Script Card Skeleton</p>
        <div class="card w-64 h-40 md:(h-80) p-6 bg-gray-100 text-left">
          <div class="h-full flex flex-col gap-6 md:(gap-10) justify-end">
            <div class="flex flex-wrap gap-1.5 md:(gap-3)">
              <div class="w-20 h-4 md:(h-5) bg-gray-300 rounded-lg"></div>
              <div class="w-6 h-4 md:(h-5) bg-gray-300 rounded-lg"></div>
              <div class="w-37 h-4 md:(h-5) bg-gray-300 rounded-lg"></div>
              <div class="w-16 h-4 md:(h-5) bg-gray-300 rounded-lg"></div>
              <div class="w-27 h-4 md:(h-5) bg-gray-300 rounded-lg"></div>
            </div>
            <div class="flex md:(flex-col) gap-2">
              <div class="w-18 h-2.5 bg-gray-200 rounded-lg"></div>
              <div class="w-20 h-2.5 bg-gray-200 rounded-lg"></div>               
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2 text-center place-items-center">
        <p class="text-sm">Ceremony Card</p>
        <div class="card w-64 h-80 md:(w-128 h-96) bg-gray-100 hover:(gradient-300) active:(gradient-100) text-center group">
          <img src="../assets/images/test.jpg" class="h-7/10 rounded-t-3xl object-cover" />
          <div class="h-3/10 flex flex-col gap-2 justify-center">
            <h3 class="header-3 text-gray-700 group-hover:(text-gray-100)">Pharetra & Faucibus</h3>
            <h4 class="header-4 text-secondary-500 group-hover:(text-secondary-100)">January 21, 2024</h4>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2 text-center place-items-center">
        <p class="text-sm">Ceremony Card Add</p>
        <div class="card w-64 h-80 md:(w-128 h-96) bg-gray-100 flex justify-center place-items-center group">
          <div class="icon icon-card-add">
            <i class="fi fi-br-plus h-16"></i>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2 text-center place-items-center">
        <p class="text-sm">Ceremony Card Skeleton</p>
        <div class="card w-64 h-80 md:(w-128 h-96) bg-gray-100">
          <div class="h-7/10 rounded-t-3xl bg-gray-300"></div>
          <div class="h-3/10 flex flex-col gap-4 justify-center place-items-center">
            <div class="flex gap-1.5">
              <div class="w-16 h-4 md:(h-5) bg-gray-300 rounded-lg"></div>
              <div class="w-6 h-4 md:(h-5) bg-gray-300 rounded-lg"></div>
              <div class="w-28 h-4 md:(h-5) bg-gray-300 rounded-lg"></div>
            </div>
            <div class="w-27 h-3 md:(h-4) bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2 text-center place-items-center">
        <p class="text-sm">Choice Card</p>
        <div class="card h-14 p-6 flex flex-col justify-center place-items-center gradient-300 hover:(gradient-500) md:(h-20)">
          <h4 class="header-4 text-gray-100">Iaculis hac augue</h4>
        </div>
      </div>
      <div class="flex flex-col gap-2 text-center place-items-center">
        <p class="text-sm">Choice Card Expanded</p>
        <div class="card p-6 flex flex-col gap-2 justify-center bg-gray-100">
          <h4 class="header-4 gradient-text text-left">Iaculis hac augue</h4>
          <p class="text-sm text-left">Sit volutpat risus vulputate gravida condimentum commodo. Placerat habitant id penatibus mattis odio consectetur fames. Donec fusce nam a massa id sit. Enim duis rutrum mus urna bibendum. In dolor massa vivamus interdum purus lectus euismod.</p>
        </div>
      </div>
    </div>
  </section>
  <div class="w-full flex flex-col gap-2 text-center place-items-center">
    <p class="text-sm">Header</p>
    <div class="page-header">
      <h1>Et id quis</h1>
    </div>
  </div>
  <div class="w-full flex flex-col gap-2 text-center place-items-center">
    <p class="text-sm">Header Center</p>
    <div class="page-header-center">
      <h1>Et id quis</h1>
    </div>
  </div>
</div>
</template>

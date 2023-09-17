/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollCat = () => {
  const category = document.getElementById("category");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 100
    ? category.classList.add("scroll-category")
    : category.classList.remove("scroll-category");
};
window.addEventListener("scroll", scrollCat);

/*=============== SLIDER ===============*/
const category = document.getElementById("category");
const carousel = document.getElementById("carousel");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

const categoryData = [
  {
    img: "https://a0.muscache.com/pictures/48b55f09-f51c-4ff5-b2c6-7f6bd4d1e049.jpg",
    title: "台灣民宿",
  },
  {
    img: "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
    title: "房間",
  },
  {
    img: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
    title: "絕美景致",
  },
  {
    img: "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
    title: "熱帶",
  },
  {
    img: "https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg",
    title: "湖泊",
  },
  {
    img: "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
    title: "海邊",
  },
  {
    img: "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg",
    title: "Luxe",
  },
  {
    img: "https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b1bb15f.jpg",
    title: "專業廚房",
  },
  {
    img: "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg",
    title: "露營",
  },
  {
    img: "https://a0.muscache.com/pictures/8eccb972-4bd6-43c5-ac83-27822c0d3dcd.jpg",
    title: "三角鋼琴",
  },
  {
    img: "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
    title: "著名城市",
  },
  {
    img: "https://a0.muscache.com/pictures/0ff9740e-52a2-4cd5-ae5a-94e1bfb560d6.jpg",
    title: "貨櫃屋",
  },
  {
    img: "https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg",
    title: "兒童樂園",
  },
  {
    img: "https://a0.muscache.com/pictures/d721318f-4752-417d-b4fa-77da3cbc3269.jpg",
    title: "塔樓",
  },
  {
    img: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
    title: "小木屋",
  },
  {
    img: "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
    title: "搶手房源",
  },
  {
    img: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
    title: "驚豔泳池",
  },
  {
    img: "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg",
    title: "國家公園",
  },
  {
    img: "https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg",
    title: "北極圈",
  },
  {
    img: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
    title: "濱海",
  },
  {
    img: "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
    title: "生態屋",
  },
  {
    img: "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg",
    title: "迷你屋",
  },
  {
    img: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
    title: "前衛風格",
  },
  {
    img: "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
    title: "城堡",
  },
  {
    img: "https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg",
    title: "家庭式旅館",
  },
  {
    img: "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
    title: "莊園",
  },
  {
    img: "https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg",
    title: "傳統韓屋",
  },
  {
    img: "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
    title: "島嶼",
  },
  {
    img: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
    title: "湖景",
  },
  {
    img: "https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg",
    title: "滑雪",
  },
  {
    img: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
    title: "鄉村",
  },
  {
    img: "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
    title: "精心設計",
  },
  {
    img: "https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg",
    title: "三角屋",
  },
  {
    img: "https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg",
    title: "衝浪",
  },
  {
    img: "https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg",
    title: "全新推出",
  },
  {
    img: "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg",
    title: "歷史悠久",
  },
  {
    img: "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg",
    title: "洞穴",
  },
  {
    img: "https://a0.muscache.com/pictures/e22b0816-f0f3-42a0-a5db-e0f1fa93292b.jpg",
    title: "無障礙",
  },
  {
    img: "https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg",
    title: "遠離塵囂",
  },
  {
    img: "https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg",
    title: "船屋",
  },
  {
    img: "https://a0.muscache.com/pictures/4759a0a7-96a8-4dcd-9490-ed785af6df14.jpg",
    title: "蒙古包",
  },
  {
    img: "https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg",
    title: "帆船遊艇",
  },
  {
    img: "https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg",
    title: "葡萄園",
  },
  {
    img: "https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg",
    title: "創意空間",
  },
  {
    img: "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg",
    title: "樹屋",
  },
  {
    img: "https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg",
    title: "沙漠",
  },
  {
    img: "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
    title: "休閒農場",
  },
  {
    img: "https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg",
    title: "世界頂端",
  },
  {
    img: "https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg",
    title: "露營車",
  },
  {
    img: "https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg",
    title: "高爾夫球場",
  },
  {
    img: "https://a0.muscache.com/pictures/e4b12c1b-409b-4cb6-a674-7c1284449f6e.jpg",
    title: "基克拉澤斯屋",
  },
  {
    img: "https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg",
    title: "風車",
  },
  {
    img: "https://a0.muscache.com/pictures/747b326c-cb8f-41cf-a7f9-809ab646e10c.jpg",
    title: "牧羊人小屋",
  },
  {
    img: "https://a0.muscache.com/pictures/251c0635-cc91-4ef7-bb13-1084d5229446.jpg",
    title: "古巴式家庭旅館",
  },
  {
    img: "https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg",
    title: "日式旅館",
  },
  {
    img: "https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg",
    title: "穀倉",
  },
  {
    img: "https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg",
    title: "圓頂屋",
  },
  {
    img: "https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg",
    title: "直達滑雪場",
  },
  {
    img: "https://a0.muscache.com/pictures/c9157d0a-98fe-4516-af81-44022118fbc7.jpg",
    title: "義式傳統石屋",
  },
  {
    img: "https://a0.muscache.com/pictures/7ff6e4a1-51b4-4671-bc9a-6f523f196c61.jpg",
    title: "摩洛哥式傳統庭園",
  },
  {
    img: "https://a0.muscache.com/pictures/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg",
    title: "普利亞斗普利亞斗笠屋",
  },
];

// 生成輪播圖
categoryData.forEach((data) => {
  const sliderItem = document.createElement("div");
  sliderItem.classList.add("slider__item");

  const img = document.createElement("img");
  img.src = data.img;
  img.classList.add("slider__img");
  img.draggable = false;

  const sliderTitle = document.createElement("div");
  sliderTitle.classList.add("slider__title");

  const span = document.createElement("span");
  span.textContent = data.title;

  sliderTitle.appendChild(span);
  sliderItem.appendChild(img);
  sliderItem.appendChild(sliderTitle);
  carousel.appendChild(sliderItem);
});

// 輪播功能
let currentIndex = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

rightArrow.addEventListener("click", () => {
  if (currentIndex < imageUrls.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

leftArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

// 初始化轮播
updateCarousel();

// 以下是添加的拖动和自动滚动功能
let isDragStart = false,
  isDragging = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;

const showHideIcons = () => {
  // showing and hiding prev/next icon according to carousel scroll left value
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
  leftArrow.style.color = carousel.scrollLeft === 0 ? "#F0F0F0" : "black";
  rightArrow.style.color =
    carousel.scrollLeft >= scrollWidth ? "#F0F0F0" : "black";
};

leftArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

rightArrow.addEventListener("click", () => {
  if (currentIndex < imageUrls.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

const autoSlide = () => {
  // if there is no image left to scroll then return from here
  if (
    carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 ||
    carousel.scrollLeft <= 0
  ) {
    return;
  }
  positionDiff = Math.abs(positionDiff); // making positionDiff value positive
  let firstImgWidth = firstImg.clientWidth + 14;
  // getting the difference value that needs to be added or reduced from carousel left to take the middle img center
  let valDifference = firstImgWidth - positionDiff;
  if (carousel.scrollLeft > prevScrollLeft) {
    // if user is scrolling to the right
    return (carousel.scrollLeft +=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
  }
  // if user is scrolling to the left
  carousel.scrollLeft -=
    positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};

const dragStart = (e) => {
  // updating global variables value on mouse down event
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  // scrolling images/carousel to the left according to the mouse pointer
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

//OLD
// const carousel = document.querySelector(".carousel");
// firstImg = carousel.querySelectorAll("img")[0];
// arrowIcons = document.querySelectorAll(".slider-icon");

// let isDragStart = false,
//   isDragging = false,
//   prevPageX,
//   preScrollLeft,
//   positionDiff;

// const showHideIcons = () => {
//   // showing and hiding prev/next icon according to carousel scroll left value
//   let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
//   arrowIcons[0].style.color = carousel.scrollLeft == 0 ? "#F0F0F0" : "black";
//   arrowIcons[1].style.color =
//     carousel.scrollLeft >= scrollWidth ? "#F0F0F0" : "black";
// };

// arrowIcons.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
//     // if clicked icon is left, reduce width value from the carousel scroll left else add to it
//     carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
//     setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
//   });
// });
// const autoSlide = () => {
//   // if there is no image left to scroll then return from here
//   if (
//     carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 ||
//     carousel.scrollLeft <= 0
//   )
//     return;
//   positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
//   let firstImgWidth = firstImg.clientWidth + 14;
//   // getting difference value that needs to add or reduce from carousel left to take middle img center
//   let valDifference = firstImgWidth - positionDiff;
//   if (carousel.scrollLeft > prevScrollLeft) {
//     // if user is scrolling to the right
//     return (carousel.scrollLeft +=
//       positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
//   }
//   // if user is scrolling to the left
//   carousel.scrollLeft -=
//     positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
// };
// const dragStart = (e) => {
//   // updatating global variables value on mouse down event
//   isDragStart = true;
//   prevPageX = e.pageX || e.touches[0].pageX;
//   prevScrollLeft = carousel.scrollLeft;
// };
// const dragging = (e) => {
//   // scrolling images/carousel to left according to mouse pointer
//   if (!isDragStart) return;
//   e.preventDefault();
//   isDragging = true;
//   carousel.classList.add("dragging");
//   positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
//   carousel.scrollLeft = prevScrollLeft - positionDiff;
//   showHideIcons();
// };
// const dragStop = () => {
//   isDragStart = false;
//   carousel.classList.remove("dragging");
//   if (!isDragging) return;
//   isDragging = false;
//   autoSlide();
// };
// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("touchstart", dragStart);
// document.addEventListener("mousemove", dragging);
// carousel.addEventListener("touchmove", dragging);
// document.addEventListener("mouseup", dragStop);
// carousel.addEventListener("touchend", dragStop);

/*=============== IMAGE SWIPER ===============*/
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

/*=============== FOOTER TABS ===============*/
const tabButtons = document.querySelectorAll(".tab-button");
const tabs = document.querySelectorAll(".tab");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // 隱藏所有選項卡內容
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    // 獲取要顯示的選項卡的 ID
    const targetId = button.getAttribute("data-target");

    // 顯示對應選項卡的內容
    const targetTab = document.getElementById(targetId);
    targetTab.classList.add("active");
  });
});

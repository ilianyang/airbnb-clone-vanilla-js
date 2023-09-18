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

/*=============== IMAGE SWIPER ===============*/
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  mousewheel: true,
  keyboard: true,
});

/*=============== FOOTER TABS ===============*/
const popularData = [
    { title: "坎莫爾", subtitle: "度假小木屋" },
    { title: "貝納爾馬德納", subtitle: "獨棟房屋" },
    { title: "馬貝拉", subtitle: "度假屋" },
    { title: "米納斯", subtitle: "公寓" },
    { title: "普雷斯科特", subtitle: "寵物友善房源" },
    { title: "斯科茨代爾", subtitle: "獨棟房屋" },
    { title: "圖森", subtitle: "豪宅" },
    { title: "賈斯珀", subtitle: "小木屋" },
    { title: "山景城", subtitle: "小木屋" },
    { title: "Devonport", subtitle: "度假屋" },
    { title: "Mallacoota", subtitle: "海邊獨棟房屋" },
    { title: "伊比薩", subtitle: "度假屋" },
    { title: "阿納海姆", subtitle: "適合家庭入住的房源" },
    { title: "蒙特雷", subtitle: "私有公寓" },
    { title: "百索羅布", subtitle: "度假屋" },
    { title: "聖巴巴拉", subtitle: "度假屋" },
    { title: "索諾瑪", subtitle: "度假屋" },
    { title: "拉塞雷納", subtitle: "海景房源" },
    { title: "杜拜", subtitle: "適合家庭入住的房源" },
    { title: "伯明翰", subtitle: "鄉村小屋" },
    { title: "布萊頓", subtitle: "適合家庭入住的房源" },
    { title: "布德", subtitle: "度假屋" },
    { title: "泰恩河畔紐卡斯爾", subtitle: "度假屋" },
    { title: "Padstow", subtitle: "小木屋" },
    { title: "South West England", subtitle: "度假屋" },
    { title: "惠特比", subtitle: "公寓" },
    { title: "Fort Myers", subtitle: "私有公寓" },
    { title: "傑克遜維爾", subtitle: "私有公寓" },
    { title: "基西米", subtitle: "海景房源" },
    { title: "長船礁", subtitle: "別墅" },
    { title: "奧蘭多", subtitle: "獨棟房屋" },
    { title: "聖彼得堡", subtitle: "私有公寓" },
    { title: "聖奧古斯丁", subtitle: "海邊獨棟房屋" },
    { title: "村群市", subtitle: "度假屋" },
    { title: "Dahlonega", subtitle: "小木屋" },
    { title: "克里特島", subtitle: "公寓" },
    { title: "米克諾斯", subtitle: "海景房源" },
    { title: "聖托里尼", subtitle: "海邊獨棟房屋" },
    { title: "歐胡島", subtitle: "海景房源" },
    { title: "卡普里", subtitle: "獨棟房屋" },
    { title: "Bar Harbor", subtitle: "小木屋" },
    { title: "Mackinac Island", subtitle: "湖畔房源" },
    { title: "St. Joseph", subtitle: "私有公寓" },
    { title: "Larsmont", subtitle: "度假屋" },
    { title: "拉斯維加斯", subtitle: "度假屋" },
    { title: "Madrid", subtitle: "度假屋" },
    { title: "聖菲", subtitle: "獨棟房屋" },
    { title: "Bermagui", subtitle: "海邊獨棟房屋" },
    { title: "Evans Head", subtitle: "度假屋" },
    { title: "薩維特爾", subtitle: "度假屋" },
    { title: "Young", subtitle: "度假屋" },
    { title: "Ocracoke", subtitle: "寵物友善房源" },
    { title: "佛羅倫斯", subtitle: "鄉村小屋" },
    { title: "湖畔", subtitle: "度假屋" },
    { title: "Lincoln City", subtitle: "度假屋" },
    { title: "Paphos", subtitle: "度假屋" },
    { title: "墨蘭莉", subtitle: "度假屋" },
    { title: "Stanthorpe", subtitle: "度假屋" },
    { title: "紐波特", subtitle: "海邊獨棟房屋" },
    { title: "格拉斯哥", subtitle: "公寓" },
    { title: "Scottish Highlands", subtitle: "度假屋" },
    { title: "St Andrews", subtitle: "獨棟房屋" },
    { title: "McLaren Vale", subtitle: "獨棟房屋" },
    { title: "Wallaroo", subtitle: "度假屋" },
    { title: "查爾斯頓", subtitle: "海邊私有公寓" },
    { title: "Hvar", subtitle: "度假屋" },
    { title: "Saint John", subtitle: "度假屋" },
    { title: "查特怒加", subtitle: "度假屋" },
    { title: "Concan", subtitle: "小木屋" },
    { title: "Fredericksburg", subtitle: "度假屋" },
    { title: "新布勞恩費爾斯", subtitle: "公寓" },
    { title: "Rockport", subtitle: "海景房源" },
    { title: "韋科", subtitle: "度假屋" },
    { title: "Forest of Dean District", subtitle: "度假屋" },
    { title: "澤西島", subtitle: "海邊獨棟房屋" },
    { title: "萊姆里杰斯", subtitle: "獨棟房屋" },
    { title: "曼徹斯特", subtitle: "公寓" },
    { title: "Seaview", subtitle: "度假屋" },
    { title: "Southwold", subtitle: "度假屋" },
    { title: "Staithes", subtitle: "度假屋" },
    { title: "Wells-next-the-Sea", subtitle: "度假屋" },
    { title: "聖佐治", subtitle: "私有公寓" },
    { title: "貝尼多姆", subtitle: "度假屋" },
    { title: "巴望頭", subtitle: "適合家庭入住的房源" },
    { title: "卡索曼", subtitle: "度假屋" },
    { title: "海利斯費德", subtitle: "獨棟房屋" },
    { title: "Marysville", subtitle: "鄉村小屋" },
    { title: "索倫托", subtitle: "度假屋" },
    { title: "Chincoteague", subtitle: "鄉村小屋" },
    { title: "威廉斯堡", subtitle: "度假屋" },
    { title: "海伊鎮", subtitle: "度假屋" },
    { title: "Llandudno", subtitle: "鄉村小屋" },
    { title: "滕比", subtitle: "小木屋" },
  ];
  
  const artcultureData = [
    { title: "鳳凰城", subtitle: "獨棟房屋" },
    { title: "溫泉", subtitle: "湖畔房源" },
    { title: "洛杉磯", subtitle: "豪宅" },
    { title: "聖地牙哥", subtitle: "適合家庭入住的房源" },
    { title: "舊金山", subtitle: "度假屋" },
    { title: "巴塞隆納", subtitle: "度假屋" },
    { title: "Prague", subtitle: "度假屋" },
    { title: "華盛頓", subtitle: "公寓" },
    { title: "凱西克", subtitle: "公寓" },
    { title: "倫敦", subtitle: "豪宅" },
    { title: "士嘉堡", subtitle: "度假屋" },
    { title: "Sherwood Forest", subtitle: "小木屋" },
    { title: "約克", subtitle: "度假屋" },
    { title: "巴黎", subtitle: "獨棟房屋" },
    { title: "羅德", subtitle: "配備泳池的房源" },
    { title: "那什維爾", subtitle: "度假屋" },
    { title: "都柏林", subtitle: "鄉村小屋" },
    { title: "佛羅倫斯", subtitle: "獨棟房屋" },
    { title: "羅馬", subtitle: "海邊獨棟房屋" },
    { title: "里斯本", subtitle: "海景房源" },
    { title: "Grand Isle", subtitle: "寵物友善房源" },
    { title: "紐奧良", subtitle: "私有公寓" },
    { title: "瑪莎葡萄園島", subtitle: "度假屋" },
    { title: "南黑文", subtitle: "獨棟房屋" },
    { title: "杜魯司", subtitle: "度假屋" },
    { title: "阿姆斯特丹", subtitle: "公寓" },
    { title: "紐約", subtitle: "度假屋" },
    { title: "尼斯", subtitle: "配備泳池的房源" },
    { title: "因弗內斯", subtitle: "公寓" },
    { title: "馬拉加", subtitle: "度假屋" },
    { title: "瓦倫西亞", subtitle: "海景房源" },
    { title: "斯普利特", subtitle: "度假屋" },
    { title: "那什維爾", subtitle: "寵物友善房源" },
    { title: "奧斯丁", subtitle: "平房" },
    { title: "休斯頓", subtitle: "度假屋" },
    { title: "達特茅斯", subtitle: "度假小木屋" },
    { title: "Edinburgh", subtitle: "度假屋" },
    { title: "利物浦", subtitle: "公寓" },
    { title: "聖艾夫斯", subtitle: "私有公寓" },
    { title: "Lake Powell", subtitle: "度假屋" },
    { title: "安娜湖", subtitle: "湖畔房源" },
    { title: "萊溫芙絲", subtitle: "度假小木屋" },
    { title: "西雅圖", subtitle: "度假屋" }
  ];
  
  const outdoorsData = [
    { title: "Lake Martin", subtitle: "度假屋" },
    { title: "Banff", subtitle: "私有公寓" },
    { title: "內爾哈", subtitle: "獨棟房屋" },
    { title: "Greer", subtitle: "度假屋" },
    { title: "哈瓦蘇湖城", subtitle: "度假屋" },
    { title: "Lake Powell", subtitle: "度假屋" },
    { title: "North Rim", subtitle: "度假屋" },
    { title: "Payson", subtitle: "度假屋" },
    { title: "派托普湖畔", subtitle: "度假屋" },
    { title: "Red Rock", subtitle: "度假屋" },
    { title: "Dinner Plain", subtitle: "寵物友善房源" },
    { title: "Streaky Bay", subtitle: "度假屋" },
    { title: "Emerald Lake", subtitle: "小木屋" },
    { title: "溫哥華島", subtitle: "寵物友善房源" },
    { title: "維多利亞", subtitle: "公寓" },
    { title: "Idyllwild-Pine Cove", subtitle: "獨棟房屋" },
    { title: "猛獁湖", subtitle: "度假屋" },
    { title: "棕櫚沙漠", subtitle: "私有公寓" },
    { title: "Shaver Lake", subtitle: "度假屋" },
    { title: "南太浩湖", subtitle: "度假屋" },
    { title: "Cultus Lake", subtitle: "鄉村小屋" },
    { title: "Georgian Bay", subtitle: "度假屋" },
    { title: "Manitoulin Island", subtitle: "度假屋" },
    { title: "Ottawa River", subtitle: "鄉村小屋" },
    { title: "The Blue Mountains", subtitle: "度假屋" },
    { title: "西基隆拿", subtitle: "海景房源" },
    { title: "大加那利島", subtitle: "配備泳池的房源" },
    { title: "蘭薩羅特島", subtitle: "獨棟房屋" },
    { title: "Castle Hill", subtitle: "度假屋" },
    { title: "阿斯彭", subtitle: "公寓" },
    { title: "科羅拉多斯普林斯", subtitle: "度假屋" },
    { title: "丹佛", subtitle: "度假屋" },
    { title: "杜蘭戈", subtitle: "獨棟房屋" },
    { title: "Estes Park", subtitle: "度假屋" },
    { title: "Grand Lake", subtitle: "度假屋" },
    { title: "Keystone", subtitle: "小木屋" },
    { title: "維爾", subtitle: "公寓" },
    { title: "冬季公園", subtitle: "小木屋" },
    { title: "Salcombe", subtitle: "度假屋" },
    { title: "斯沃尼奇", subtitle: "鄉村小屋" },
    { title: "珊瑚角", subtitle: "度假屋" },
    { title: "Blue Ridge", subtitle: "小木屋" },
    { title: "Jekyll Island", subtitle: "海邊私有公寓" },
    { title: "Lake Lanier", subtitle: "度假屋" },
    { title: "科孚", subtitle: "鄉村小屋" },
    { title: "McCall", subtitle: "小木屋" },
    { title: "Clear Lake", subtitle: "度假屋" },
    { title: "Lough Eske", subtitle: "度假屋" },
    { title: "Lake Cumberland", subtitle: "湖畔房源" },
    { title: "波特蘭", subtitle: "度假屋" },
    { title: "南波特蘭", subtitle: "度假屋" },
    { title: "深溪湖", subtitle: "獨棟房屋" },
    { title: "Lake Michigan Beach", subtitle: "湖畔房源" },
    { title: "湖畔", subtitle: "度假屋" },
    { title: "Torch Lake", subtitle: "湖畔房源" },
    { title: "特拉弗斯城", subtitle: "寵物友善房源" },
    { title: "Upper Peninsula of Michigan", subtitle: "度假屋" },
    { title: "Branson", subtitle: "湖畔房源" },
    { title: "歐扎克湖", subtitle: "度假屋" },
    { title: "大天空市", subtitle: "度假屋" },
    { title: "西黃石", subtitle: "小木屋" },
    { title: "Mount Charleston", subtitle: "度假屋" },
    { title: "Cloudcroft", subtitle: "小木屋" },
    { title: "Red River", subtitle: "公寓" },
    { title: "貝林根", subtitle: "寵物友善房源" },
    { title: "布藍茲維角", subtitle: "度假屋" },
    { title: "阿第倫達克山脈", subtitle: "度假屋" },
    { title: "Lake Placid", subtitle: "公寓" },
    { title: "尼亞加拉瀑布", subtitle: "小木屋" },
    { title: "Bald Head Island", subtitle: "寵物友善房源" },
    { title: "布賴森市", subtitle: "小木屋" },
    { title: "Emerald Isle", subtitle: "獨棟房屋" },
    { title: "Lake Gaston", subtitle: "寵物友善房源" },
    { title: "路爾湖", subtitle: "度假屋" },
    { title: "Lake Norman of Catawba", subtitle: "度假屋" },
    { title: "Mount Airy", subtitle: "小木屋" },
    { title: "奧克島", subtitle: "鄉村小屋" },
    { title: "Geneva-on-the-Lake", subtitle: "度假屋" },
    { title: "Medicine Park", subtitle: "度假屋" },
    { title: "Turner Falls", subtitle: "小木屋" },
    { title: "Muskoka Lakes", subtitle: "度假屋" },
    { title: "Tobermory", subtitle: "獨棟房屋" },
    { title: "班德", subtitle: "鄉村小屋" },
    { title: "Crater Lake", subtitle: "湖畔房源" },
    { title: "Northern Oregon Coast Range", subtitle: "度假屋" },
    { title: "Sunriver", subtitle: "度假屋" },
    { title: "和諧湖", subtitle: "度假屋" },
    { title: "Mount Pocono", subtitle: "適合家庭入住的房源" },
    { title: "蒙特朗布朗", subtitle: "公寓" },
    { title: "Aviemore", subtitle: "小木屋" },
    { title: "Isle of Mull", subtitle: "鄉村小屋" },
    { title: "羅布", subtitle: "度假屋" },
    { title: "Mountain Rest", subtitle: "度假屋" },
    { title: "St Helens", subtitle: "度假屋" },
    { title: "美國", subtitle: "度假屋" },
    { title: "峽谷湖", subtitle: "寵物友善房源" },
    { title: "Lake Austin", subtitle: "私有公寓" },
    { title: "Lake Buchanan", subtitle: "小木屋" },
    { title: "Betws-y-Coed", subtitle: "度假屋" },
    { title: "Filey", subtitle: "海景房源" },
    { title: "Fort William", subtitle: "公寓" },
    { title: "羅蒙湖", subtitle: "度假屋" },
    { title: "Port Isaac", subtitle: "度假屋" },
    { title: "摩押", subtitle: "私有公寓" },
    { title: "Mount Zion", subtitle: "度假屋" },
    { title: "Moraira", subtitle: "度假屋" },
    { title: "因沃洛什", subtitle: "度假屋" },
    { title: "Metung", subtitle: "度假屋" },
    { title: "Mount Buller", subtitle: "度假屋" },
    { title: "坎貝爾港", subtitle: "度假屋" },
    { title: "Wilsons Promontory", subtitle: "度假屋" },
    { title: "Shenandoah", subtitle: "度假屋" },
    { title: "史密斯山湖", subtitle: "度假屋" },
    { title: "Snowdon", subtitle: "鄉村小屋" },
    { title: "奇蘭湖", subtitle: "度假屋" },
    { title: "Lake Crescent", subtitle: "度假屋" },
    { title: "Lake Quinault", subtitle: "度假屋" },
    { title: "Quinault", subtitle: "度假屋" },
    { title: "Skamania", subtitle: "度假屋" },
    { title: "斯諾肖", subtitle: "度假屋" },
    { title: "日內瓦湖", subtitle: "度假屋" },
    { title: "威斯康星德爾斯", subtitle: "度假屋" },
    { title: "美國", subtitle: "度假屋" }
  ];
  
  const mountainData = [
    { title: "Mentone", subtitle: "度假屋" },
    { title: "塞多納", subtitle: "配備泳池的房源" },
    { title: "Helen", subtitle: "度假屋" },
    { title: "Pine Mountain", subtitle: "度假屋" },
    { title: "石頭山", subtitle: "小木屋" },
    { title: "Island Park", subtitle: "小木屋" },
    { title: "Blue Mountains", subtitle: "別墅" },
    { title: "阿什維爾", subtitle: "私有公寓" },
    { title: "Blowing Rock", subtitle: "小木屋" },
    { title: "Boone", subtitle: "度假屋" },
    { title: "Hochatown", subtitle: "度假屋" },
    { title: "Pigeon Forge", subtitle: "度假屋" },
    { title: "Townsend", subtitle: "度假屋" },
    { title: "Wears Valley", subtitle: "度假屋" },
    { title: "Cabins", subtitle: "度假屋" }
  ];
  
  const beachData = [
    { title: "Dauphin Island", subtitle: "私有公寓" },
    { title: "Fort Morgan", subtitle: "度假屋" },
    { title: "Gulf Shores", subtitle: "度假屋" },
    { title: "布魯尼島", subtitle: "度假屋" },
    { title: "Crescent Head", subtitle: "度假屋" },
    { title: "Gerringong", subtitle: "度假屋" },
    { title: "哈密爾頓島", subtitle: "獨棟房屋" },
    { title: "藍斯林", subtitle: "度假屋" },
    { title: "墨爾本海灘", subtitle: "海邊私有公寓" },
    { title: "Moonta Bay", subtitle: "度假屋" },
    { title: "海洋鎮", subtitle: "海邊獨棟房屋" },
    { title: "馬略卡島", subtitle: "海邊獨棟房屋" },
    { title: "Big Sur", subtitle: "寵物友善房源" },
    { title: "博德加灣", subtitle: "度假屋" },
    { title: "坎布里亞", subtitle: "度假屋" },
    { title: "卡尤科斯", subtitle: "度假屋" },
    { title: "杭廷頓海灘", subtitle: "獨棟房屋" },
    { title: "la Jolla Shores Beach", subtitle: "度假屋" },
    { title: "拉古納海灘", subtitle: "別墅" },
    { title: "長灘", subtitle: "獨棟房屋" },
    { title: "馬里布", subtitle: "海邊私有公寓" },
    { title: "Mission Beach", subtitle: "海景房源" },
    { title: "紐波特比奇", subtitle: "度假屋" },
    { title: "歐申賽德", subtitle: "私有公寓" },
    { title: "棕櫚泉", subtitle: "寵物友善房源" },
    { title: "皮斯莫海灘", subtitle: "寵物友善房源" },
    { title: "聖克魯茲", subtitle: "度假屋" },
    { title: "聖塔莫尼卡", subtitle: "海邊獨棟房屋" },
    { title: "Sea Ranch", subtitle: "私有公寓" },
    { title: "Playa Blanca", subtitle: "度假屋" },
    { title: "富埃特文圖拉島", subtitle: "度假屋" },
    { title: "卡門港", subtitle: "公寓" },
    { title: "特內里費島", subtitle: "平房" },
    { title: "阿依納帕", subtitle: "獨棟房屋" },
    { title: "貝瑟尼灘", subtitle: "海邊私有公寓" },
    { title: "Dewey Beach", subtitle: "獨棟房屋" },
    { title: "布萊克浦", subtitle: "海邊獨棟房屋" },
    { title: "Isle of Wight", subtitle: "鄉村小屋" },
    { title: "紐基", subtitle: "度假小木屋" },
    { title: "韋茅斯", subtitle: "度假小木屋" },
    { title: "阿爾布費拉", subtitle: "度假屋" },
    { title: "Alys Beach", subtitle: "度假屋" },
    { title: "安娜瑪麗亞島", subtitle: "度假屋" },
    { title: "Boca Grande", subtitle: "度假屋" },
    { title: "布雷登頓", subtitle: "寵物友善房源" },
    { title: "Cape San Blas", subtitle: "配備泳池的房源" },
    { title: "Clearwater Beach", subtitle: "海景房源" },
    { title: "可可海灘", subtitle: "獨棟房屋" },
    { title: "Daytona Beach", subtitle: "海邊私有公寓" },
    { title: "德斯坦", subtitle: "平房" },
    { title: "恩格爾伍德", subtitle: "海邊獨棟房屋" },
    { title: "勞德代爾堡", subtitle: "鄉村小屋" },
    { title: "Fort Myers Beach", subtitle: "私有公寓" },
    { title: "華爾頓堡灘", subtitle: "海邊私有公寓" },
    { title: "Grayton Beach", subtitle: "海邊獨棟房屋" },
    { title: "Gulf of Mexico", subtitle: "度假屋" },
    { title: "印度岩石海灘", subtitle: "獨棟房屋" },
    { title: "伊斯拉摩拉", subtitle: "獨棟房屋" },
    { title: "傑克遜維爾海灘", subtitle: "海邊獨棟房屋" },
    { title: "Key Largo", subtitle: "別墅" },
    { title: "馬德拉海灘", subtitle: "度假屋" },
    { title: "馬拉松", subtitle: "配備泳池的房源" },
    { title: "馬可島", subtitle: "寵物友善房源" },
    { title: "Mexico Beach", subtitle: "海邊私有公寓" },
    { title: "邁阿密海灘", subtitle: "度假屋" },
    { title: "邁阿密", subtitle: "別墅" },
    { title: "米拉馬爾海灘", subtitle: "獨棟房屋" },
    { title: "那不勒斯", subtitle: "度假屋" },
    { title: "Navarre Beach", subtitle: "度假屋" },
    { title: "新士麥那海灘", subtitle: "鄉村小屋" },
    { title: "Okaloosa Island", subtitle: "公寓" },
    { title: "巴拿馬城市海灘", subtitle: "度假屋" },
    { title: "彭薩科拉海灘", subtitle: "海邊獨棟房屋" },
    { title: "Perdido Key", subtitle: "度假屋" },
    { title: "Rosemary Beach", subtitle: "度假屋" },
    { title: "Saint George Island", subtitle: "私有公寓" },
    { title: "聖羅莎海灘", subtitle: "海景房源" },
    { title: "薩拉索塔", subtitle: "私有公寓" },
    { title: "Seagrove Beach", subtitle: "寵物友善房源" },
    { title: "錫賽德", subtitle: "海景房源" },
    { title: "South Beach", subtitle: "海邊私有公寓" },
    { title: "St. Augustine Beach", subtitle: "私有公寓" },
    { title: "St. Pete Beach", subtitle: "海邊獨棟房屋" },
    { title: "坦帕", subtitle: "寵物友善房源" },
    { title: "西棕櫚灘", subtitle: "公寓" },
    { title: "Bora-Bora", subtitle: "平房" },
    { title: "Tybee Island", subtitle: "寵物友善房源" },
    { title: "檀香山", subtitle: "公寓" },
    { title: "凱魯瓦-科納", subtitle: "獨棟房屋" },
    { title: "卡普魯亞", subtitle: "公寓" },
    { title: "可愛島", subtitle: "海邊獨棟房屋" },
    { title: "基黑", subtitle: "海邊獨棟房屋" },
    { title: "Ko Olina Beach", subtitle: "度假屋" },
    { title: "毛伊島", subtitle: "配備泳池的房源" },
    { title: "Topsail Island", subtitle: "度假屋" },
    { title: "老蘭花海灘", subtitle: "度假屋" },
    { title: "Wells", subtitle: "度假屋" },
    { title: "科德角", subtitle: "公寓" },
    { title: "Nantucket", subtitle: "度假屋" },
    { title: "比洛克西", subtitle: "鄉村小屋" },
    { title: "阿瓦隆", subtitle: "度假屋" },
    { title: "Jersey Shore", subtitle: "海邊獨棟房屋" },
    { title: "North Wildwood", subtitle: "海景房源" },
    { title: "大洋城", subtitle: "配備泳池的房源" },
    { title: "Sea Isle City", subtitle: "海景房源" },
    { title: "Stone Harbor", subtitle: "配備泳池的房源" },
    { title: "Hyams Beach", subtitle: "鄉村小屋" },
    { title: "火燒島", subtitle: "度假屋" },
    { title: "Montauk", subtitle: "寵物友善房源" },
    { title: "Ocean Beach", subtitle: "度假屋" },
    { title: "大西洋海灘", subtitle: "海邊獨棟房屋" },
    { title: "卡羅萊納海灘", subtitle: "度假屋" },
    { title: "Corolla", subtitle: "海景房源" },
    { title: "Holden Beach", subtitle: "度假屋" },
    { title: "基蒂霍克", subtitle: "度假屋" },
    { title: "Kure Beach", subtitle: "海景房源" },
    { title: "納格斯海德", subtitle: "度假屋" },
    { title: "Ocean Isle Beach", subtitle: "配備泳池的房源" },
    { title: "Sunset Beach", subtitle: "海邊獨棟房屋" },
    { title: "衝浪市", subtitle: "度假屋" },
    { title: "威明頓", subtitle: "海邊獨棟房屋" },
    { title: "Wrightsville Beach", subtitle: "鄉村小屋" },
    { title: "Sauble Beach", subtitle: "獨棟房屋" },
    { title: "華沙加灘", subtitle: "度假屋" },
    { title: "坎農比奇", subtitle: "度假屋" },
    { title: "錫賽德", subtitle: "獨棟房屋" },
    { title: "Carvoeiro", subtitle: "別墅" },
    { title: "黃金海岸", subtitle: "寵物友善房源" },
    { title: "摩爾頓島", subtitle: "度假屋" },
    { title: "Block Island", subtitle: "度假屋" },
    { title: "Puerto Peñasco", subtitle: "度假屋" },
    { title: "Charleston Oceanfront Villas", subtitle: "度假屋" },
    { title: "Edisto Beach", subtitle: "度假屋" },
    { title: "富麗海灘", subtitle: "配備泳池的房源" },
    { title: "Fripp Island", subtitle: "度假屋" },
    { title: "棕櫚島", subtitle: "配備泳池的房源" },
    { title: "Kiawah Island", subtitle: "度假屋" },
    { title: "默特爾比奇", subtitle: "私有公寓" },
    { title: "帕利斯島", subtitle: "私有公寓" },
    { title: "Seabrook Island", subtitle: "度假屋" },
    { title: "Sullivan's Island", subtitle: "度假屋" },
    { title: "衝浪海灘", subtitle: "海景房源" },
    { title: "阿利坎特", subtitle: "度假屋" },
    { title: "Costa Adeje", subtitle: "別墅" },
    { title: "Costa del Sol Occidental", subtitle: "度假屋" },
    { title: "豐希羅拉", subtitle: "度假屋" },
    { title: "洛斯克里斯蒂亞諾斯", subtitle: "公寓" },
    { title: "Corpus Christi", subtitle: "私有公寓" },
    { title: "阿蘭薩斯港", subtitle: "度假屋" },
    { title: "南帕諸島", subtitle: "海景房源" },
    { title: "衝浪海灘", subtitle: "獨棟房屋" },
    { title: "Bournemouth", subtitle: "寵物友善房源" },
    { title: "New Quay", subtitle: "度假屋" },
    { title: "安格爾西", subtitle: "度假屋" },
    { title: "Abersoch", subtitle: "海邊獨棟房屋" },
    { title: "Seabrook", subtitle: "度假屋" },
    { title: "Jurien Bay", subtitle: "度假屋" }
  ];
  
  const typeData = [
    { title: "驚豔泳池", subtitle: "" },
    { title: "北極圈", subtitle: "" },
    { title: "露營", subtitle: "" },
    { title: "露營車", subtitle: "" },
    { title: "城堡", subtitle: "" },
    { title: "貨櫃屋", subtitle: "" },
    { title: "鄉村", subtitle: "" },
    { title: "精心設計", subtitle: "" },
    { title: "生態屋", subtitle: "" },
    { title: "休閒農場", subtitle: "" },
    { title: "國家公園", subtitle: "" },
    { title: "葡萄園", subtitle: "" },
    { title: "前衛風格", subtitle: "" },
    { title: "迷你屋", subtitle: "" },
    { title: "塔樓", subtitle: "" },
    { title: "風車", subtitle: "" }
  ];
  
  const funData = [
    { title: "阿姆斯特丹", subtitle: "北荷蘭" },
    { title: "安塔利亞", subtitle: "Antalya, 冰島" },
    { title: "奧蘭多", subtitle: "佛羅里達" },
    { title: "巴塞隆納", subtitle: "加泰羅尼亞" },
    { title: "巴黎", subtitle: "法蘭西島" },
    { title: "布宜諾斯艾利斯", subtitle: "Buenos Aires" },
    { title: "布魯塞爾", subtitle: "布魯塞爾" },
    { title: "特內里費島", subtitle: "加那利群島" },
    { title: "都柏林", subtitle: "County Dublin, 德國" },
    { title: "墨西哥城", subtitle: "Mexico City" },
    { title: "墨西哥", subtitle: "米蘭, 倫巴第" },
    { title: "柏林", subtitle: "柏林" },
    { title: "新加坡", subtitle: "尼斯, Provence-Alpes-Côte d'Azur" },
    { title: "東京", subtitle: "日本" },
    { title: "瓦倫西亞", subtitle: "巴倫西亞自治區" },
    { title: "羅馬", subtitle: "拉齊奧" },
    { title: "聖地牙哥", subtitle: "加州" },
    { title: "聖托里尼", subtitle: "希臘" },
    { title: "薩凡納", subtitle: "喬治亞州" },
    { title: "阿姆斯特丹", subtitle: "北荷蘭" },
    { title: "邁阿密", subtitle: "佛羅里達" },
    { title: "雅典", subtitle: "希臘" },
    { title: "威尼斯", subtitle: "威尼托" },
    { title: "倫敦", subtitle: "英格蘭" },
    { title: "伊斯坦堡", subtitle: "土耳其" },
    { title: "巴黎", subtitle: "法蘭西島" },
    { title: "紐約", subtitle: "紐約" },
    { title: "巴塞隆納", subtitle: "加泰羅尼亞" },
    { title: "伊斯坦堡", subtitle: "土耳其" },
    { title: "峇里島", subtitle: "印尼" },
    { title: "邁阿密", subtitle: "佛羅里達" },
    { title: "馬德里", subtitle: "馬德里自治區" },
    { title: "洛杉磯", subtitle: "加州" },
    { title: "羅馬", subtitle: "拉齊奧" },
    { title: "里斯本", subtitle: "葡萄牙" },
    { title: "東京", subtitle: "日本" },
    { title: "維也納", subtitle: "維也納" },
    { title: "雅典", subtitle: "希臘" },
    { title: "Prague", subtitle: "捷克" },
    { title: "奧蘭多", subtitle: "佛羅里達" },
    { title: "坎昆", subtitle: "金塔納羅奧州" },
    { title: "聖托里尼", subtitle: "希臘" },
    { title: "墨西哥城", subtitle: "Mexico City" },
    { title: "威尼斯", subtitle: "威尼托" },
    { title: "卡門", subtitle: "金塔納羅奧州" },
    { title: "舊金山", subtitle: "加州" },
    { title: "拉斯維加斯", subtitle: "內華達州" },
    { title: "波士頓", subtitle: "麻薩諸塞州" },
    { title: "聖地牙哥", subtitle: "加州" },
    { title: "芝加哥", subtitle: "伊利諾伊州" },
    { title: "西雅圖", subtitle: "華盛頓" },
    { title: "哥倫比特區", subtitle: "華盛頓" },
    { title: "亞特蘭大", subtitle: "喬治亞州" },
    { title: "奧斯汀", subtitle: "德州" },
    { title: "毛伊島", subtitle: "夏威夷" },
    { title: "紐奧良", subtitle: "路易斯安那州" },
    { title: "聖胡安", subtitle: "San Juan, 歐胡島, 夏威夷" },
    { title: "丹佛", subtitle: "科羅拉多州" },
    { title: "那什維爾", subtitle: "田納西州" },
    { title: "查爾斯頓", subtitle: "南卡羅來納" },
    { title: "洛斯卡沃斯", subtitle: "Baja California Sur" },
    { title: "薩凡納", subtitle: "喬治亞州" },
    { title: "杜拜", subtitle: "迪拜" },
    { title: "首爾", subtitle: "首爾" },
    { title: "法國" },
    { title: "柏林", subtitle: "柏林" },
    { title: "加拿大", subtitle: "Toronto, 安大略省" },
    { title: "瑞士", subtitle: "布達佩斯, 匈牙利" },
    { title: "西班牙", subtitle: "葡萄牙" },
    { title: "美國", subtitle: "義大利" },
    { title: "希臘", subtitle: "馬爾他" },
    { title: "克羅地亞", subtitle: "溫哥華, 不列顛哥倫比亞省" },
    { title: "墨西哥", subtitle: "米蘭, 倫巴第" },
    { title: "都柏林", subtitle: "County Dublin, 德國" },
    { title: "哥斯大黎加", subtitle: "曼哈頓, 紐約" },
    { title: "日本", subtitle: "馬拉加, 安大路西亞" },
    { title: "哥本哈根", subtitle: "丹麥" },
    { title: "蒙特利爾", subtitle: "魁北克" },
    { title: "布魯塞爾", subtitle: "布魯塞爾" },
    { title: "瓦倫西亞", subtitle: "巴倫西亞自治區" },
    { title: "新加坡", subtitle: "尼斯, Provence-Alpes-Côte d'Azur" },
    { title: "慕尼黑", subtitle: "巴伐利亞" },
    { title: "馬略卡島", subtitle: "巴利阿里群島" },
    { title: "泰國", subtitle: "圖倫, 金塔納羅奧州" },
    { title: "愛爾蘭", subtitle: "波爾圖, 波爾圖區" },
    { title: "夏威夷", subtitle: "美國" },
    { title: "佛羅倫斯", subtitle: "托斯卡尼" },
    { title: "哥倫比亞", subtitle: "基輔, 烏克蘭" },
    { title: "基輔", subtitle: "烏克蘭" },
    { title: "安塔利亞", subtitle: "Antalya" },
    { title: "冰島" },
    { title: "曼谷", subtitle: "泰國" },
    { title: "布宜諾斯艾利斯", subtitle: "Buenos Aires" },
    { title: "波哥大", subtitle: "波哥大" },
    { title: "華沙", subtitle: "馬佐夫舍省" }
  ];
  
  // 生成 div
  function generateTabs(parentElement, data) {
    data.forEach((item) => {
      const tabItem = document.createElement("div");
      tabItem.classList.add("tab__item");
  
      const titleSpan = document.createElement("span");
      titleSpan.classList.add("tab__item-title");
      titleSpan.textContent = item.title;
  
      tabItem.appendChild(titleSpan);
  
      if (item.subtitle) {
        const subtitleSpan = document.createElement("span");
        subtitleSpan.classList.add("tab__item-subtitle");
        subtitleSpan.textContent = item.subtitle;
        tabItem.appendChild(subtitleSpan);
      }
  
      parentElement.appendChild(tabItem);
    });
  }
  
  const popularTab = document.getElementById("popular");
  generateTabs(popularTab, popularData); 
  const artcultureTab = document.getElementById("art&culture"); 
  generateTabs(artcultureTab, artcultureData); 
  const outdoorsTab = document.getElementById("outdoors"); 
  generateTabs(outdoorsTab, outdoorsData); 
  const mountainTab = document.getElementById("mountain"); 
  generateTabs(mountainTab, mountainData); 
  const beachTab = document.getElementById("beach"); 
  generateTabs(beachTab, beachData); 
  const typeTab = document.getElementById("type"); 
  generateTabs(typeTab, typeData); 
  const funTab = document.getElementById("fun"); 
  generateTabs(funTab, funData); 
  
  // Tab 切換
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
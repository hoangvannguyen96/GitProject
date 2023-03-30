class Dog {
    constructor(img, name, cost) {
      this.img = img;
      this.name = name;
      this.cost = cost;
    }
  }
  let pomeranian = new Dog(
    "https://petxinh.cdn.vccloud.vn/wp-content/uploads/2021/05/d9b933dd503d766156f8c66a8db8aac3.jpg",
    "Pomeranian",
    9000000
  );
  let cogi = new Dog(
    "https://petxinh.cdn.vccloud.vn/wp-content/uploads/2021/03/cooper-baby-corgi-dogs-8.jpg",
    "Cogi",
    12000000
  );
  let alaska = new Dog(
    "https://petxinh.cdn.vccloud.vn/wp-content/uploads/2021/03/9b45410d4de7f939aab12b7207111bf5-Copy.png",
    "Alaska",
    10000000
  );
  let poodle = new Dog(
    "https://petxinh.cdn.vccloud.vn/wp-content/uploads/2015/07/poodle-toy.jpeg",
    "Poodle",
    6000000
  );
  let dogs = [pomeranian, cogi, alaska, poodle];
  function renderDog() {
    let row = document.getElementById("row");
    for (let Dog of dogs) {
      row.innerHTML += `
  <div class="pet">
    <div class="picturePet">
      <img class="img" src="${Dog.img}" alt="">
      <p class="view">Xem thêm</p>
    </div>
    <p class="name">${Dog.name}</p>
    <p class="cost">${formatCurrency(Dog.cost)}</p>
  </div>`;
    }
  }
  function formatCurrency(number) {
    return number.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  }
  renderDog();
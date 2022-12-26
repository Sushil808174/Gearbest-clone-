let Category = document.getElementById("Category");
Category.addEventListener("mouseover", () => {
  let banner = document.getElementById("banner-2");
  banner.style.display = "block";
});
document.body.addEventListener("click", () => {
  let banner = document.getElementById("banner-2");
  banner.style.display = "none";
});

let recommendedData=[
  {
      id:1,
      Product:"Newest Kingsmith Walkingpad R2 English Version 12km Per Hour Fitness Equipment Sport Machine Indoor Treadmill For Running - EU",
      Price:739.00,
      Image:"https://www.gearbest.com/u_file/2212/15/products/Main-01-c90f.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500",
      sale:"Flash Sale",
  
  },
  {
      id:2,
      Product:"Wanbo T2 MAX Projector Global Version 1080P Mini LED Portable WIFI Full HD Projector 4K 1920 x 1080P Keystone Correction For Home - EU	",
      Price:175,
      Image:"https://www.gearbest.com/u_file/2212/24/products/Main-01-79e1.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_500",
      sale:"Flash Sale"
  },
  {
      id:3,
      Product:"Aspirapolvere Robot Kyvol Cybovac E30 - EU	10",
      Price:199.00,
      Image:"https://www.gearbest.com/u_file/2212/16/products/s-l1600-acea.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_500",
      sale:"Flash Sale"
  },
  {
      id:4,
      Product:"Dere Laptop MBook M11 15.6 Inch 12GB RAM 512GB SSD Intel Celeron N5095 with Fingerprint Unlock Backlit Keyboard Windows 10 Notebook - Silver 12GB 256GB EU",
      Price:499.00,
      Image:"https://www.gearbest.com/u_file/2212/15/products/3ba67337db.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_500",
      sale:"Flash Sale"
  },
  {
      id:5,
      Product:"Xiaomi Aqara Two-way Control Module Wireless Relay Controller 2 Channels Work with Apple Homekit Mi Home APP - White",
      Price:27.99,
      Image:"https://www.gearbest.com/u_file/2212/24/products/AirPurifier2S-02-5bcf.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_500",
      sale:"Flash Sale"
  },
  {
      id:6,
      Product:"New 4K HD Dual Lens Wifi Mini Camera 170° Wide Angle Portable Mini Camera Night Vision Home Surveillance Car Dash Cam - Black",
      Price:17.69,
      Image:"https://www.gearbest.com/u_file/2212/14/products/37dc724881.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_240,w_240",
      sale:"Flash Sale"
  },
  {
      id:7,
      Product:"Original Xiaomi Mi Band 7 Pro Smart Bracelet 1.64 inch AMOLED Screen GPS Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
      Price:67.99,
      Image:"https://www.gearbest.com/u_file/2212/15/products/df315d0c55.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_240,w_240",
      sale:"Flash Sale"
  },
  {
      id:8,
      Product:"New Xiaomi Magnetic Wireless Power Bank 5000mAh P05ZM Mi Vertical Wireless Charger For iPhone 12 13 14 Pro Mag-safe - White China",
      Price:44.52,
      Image:"https://www.gearbest.com/u_file/2212/15/products/e4d6ff085c.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500",
      sale:"Flash Sale"
  },
  {
      id:9,
      Product:"OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      Price:349.00,
      Image:"https://www.gearbest.com/u_file/2212/15/products/93673702fb.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500",
      sale:"Flash Sale"
  },
  {
      id:10,
      Product:"ENGWE EP-2 PRO 2022 Upgrade Version 750W Folding Electric Bike 12.8Ah Fat Tire 45km/h Top Speed E Bike for Mountain Snowfield Road - Orange EU",
      Price:1049.00,
      Image:"https://www.gearbest.com/u_file/2212/15/products/20221128170636-3ab5.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_500",
      sale:"Flash Sale"
  },
  {
      id:11,
      Product:"M-855 Wireless Router Wifi 300M Signal Amplifier Extender Router Signal Amplifier for Home - Black",
      Price:14.68,
      Image:"https://www.gearbest.com/u_file/2212/15/products/0d2db1e981.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_500",
      sale:"Flash Sale"
  },
  {
      id:12,
      Product:"Original Xiaomi Smart Magic Cube Bluetooth 3D Dynamic Teaching Six Axis Sensor Work With Mijia APP for Science Education Toy Gif - Multi China",
      Price:19.60,
      Image:"https://www.gearbest.com/u_file/2212/24/products/Main-04--939d.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_500",
      sale:"Flash Sale"
  },
  {
      id:13,
      Product:"A9 Mini WiFi Video Surveillance 1080p HD Infrared Night Vision Wireless Remote Monitor Mini Camera - Black - China Black",
      Price:11.90,
      Image:"https://www.gearbest.com/u_file/2212/15/products/Main-02-28be.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_500",
      sale:"Flash Sale"
  },
  {
      id:14,
      Product:"Smartphone S22 Ultra 5G Cellular 6.8 Inch 6800mAh Android 11 Global Version 16GB 512GB Smart Cell Mobile Hand Phone Telefon - CLARET-1 16 512",
      Price:129.90,
      Image:"https://www.gearbest.com/u_file/2212/15/products/b98534fb57.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_240,w_240",
      sale:"Flash Sale"
  },
  {
      id:15,
      Product:"UMIDIGI A11S Global Version Smartphone 4GB 32GB or 64GB 5150 mAh 16MP Triple Camera 6.53inch HD+ Large Full Display - 4GB 32GB Mist Blue GERMANY",
      Price:129.58,
      Image:"https://www.gearbest.com/u_file/2212/15/products/05b2665602.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500",
      sale:"Flash Sale"
  },
  {
      id:16,
      Product:"Original External SSD 2TB 1TB 4TB Mobile Solid State Hard Drive USB 3.1 External SSD TypcC Portable Hard Drive Laptop desktop - black 10TB 2TB",
      Price:69.38,
      Image:"https://www.gearbest.com/u_file/2212/15/products/8c88c1b577.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_500",
      sale:"Flash Sale"
  },
  {
      id:17,
      Product:"M11 Ultra Smartphone 16GB+1TB 24+48MP Global Version Android Mobile Phone HD Camera Celular 5G Network Unlocked Cellphones - Black 8GB256GB",
      Price:120.00,
      Image:"https://www.gearbest.com/u_file/2212/15/products/5-ebe6.png?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500",
      sale:"Flash Sale"
  },
  {
      id:18,
      Product:"WT09 Active Noise Cancelling Headphones Bluetooth 5.1 Headphones with Wireless Stereo ANC Suitable for listening to music in any noisy environment - Black China",
      Price:34.75,
      Image:"https://www.gearbest.com/u_file/2212/13/photo/13423155575248-e82e.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500",
      sale:"Flash Sale"
  },
  {
      id:19,
      Product:"UC28C home mobile phone with screen HD 1080P mini portable projector home conference projector - White",
      Price:38.99,
      Image:"https://www.gearbest.com/u_file/2212/13/photo/SKU-01-black-6b93.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500",
      sale:"Flash Sale"
  },
  {
      id:20,
      Product:"3Mode Waterproof 230 LED Solar Motion Sensor Lights Outdoor Sunlight Solar Powered Street Wall Lamp for Garden Decoration 14pcs - 140 LED 1 Piece China Cold Light",
      Price:19.35,
      Image:"https://www.gearbest.com/u_file/2212/15/products/21b4db7fe4.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500",
      sale:"Flash Sale"
  }
]

// filter part
let pricesort = document.getElementById("pricesort");
pricesort.addEventListener("click", () => {
  recommendedData.sort((a, b) => a.Price - b.Price);
  displayData(recommendedData);
});

let append = document.getElementById("append");
function displayData(data) {
  append.innerHTML = null;
  let arr = [];
  data.forEach((element) => {
    let ancor = document.createElement("a");
    ancor.setAttribute("href", "click.html");
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", element.Image);
    let name = document.createElement("p");
    name.innerText = element.Product;
    name.setAttribute("id", "productname");
    let price = document.createElement("h3");
    price.innerText = "$" + element.Price;
    let sale = document.createElement("span");
    sale.innerText = element.sale;
    div.append(image, name, price, sale);
    div.addEventListener("click", () => {
      arr.push({ ...element, quantity: 1 });
      localStorage.setItem("Click", JSON.stringify(arr));
    });
    ancor.append(div);
    append.append(ancor);
  });
}
displayData(recommendedData);

// Search functionality
function searchBar() {
    let myInput = document.getElementById("search");
    myInput.addEventListener("keyup", () => {
        let Filter = myInput.value.toUpperCase();
        let ProName = document.getElementById("append");
        let arr = ProName.getElementsByTagName("a");
        for (let i = 0; i < arr.length; i++) {
            let tet = a[i].getElementsByTagName("div")[0];
            let p = tet.getElementsByTagName("p")[0];
            let txt = p.textContent || p.innerText;
            if (txt.toUpperCase().indexOf(Filter) > -1) {
                arr[i].style.display = "";
            } else {
                arr[i].style.display = "none";
            }
        }
    });
}
searchBar();

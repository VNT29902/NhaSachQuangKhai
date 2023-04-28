import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { OrderedProduct } from 'src/app/model/response/OrderedProduct';
import { Product } from 'src/app/model/response/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderedProducts: OrderedProduct[] = [];

  // orderedProducts: Product[] = [
  //   {
  //     "documentID": "6m7Yl5P4bk725ZjwOHzk",
  //     "name": "TỘI ÁC VÀ HÌNH PHẠT",
  //     "sortingAlias": "TOOJI ASC VAF HIFNH PHAJT",
  //     "price": 240000,
  //     "description": "Raskolnikov, một cựu sinh viên luật, sống ở St. Petersburg trong sự nghèo đói, túng thiếu. Một mặt, chàng là một thanh niên lương thiện, tốt bụng; mặt khác, chàng nung nấu một niềm tin rằng mình thuộc về lớp người siêu phàm, loại người có thể phá bỏ luật lệ để làm nên việc lớn. Trong những ngày tháng bần cùng, bất mãn, chàng quyết định ra tay sát hại và cướp của một mụ già cầm đồ, mà chàng tin là không đáng sống trên đời này, hòng sử dụng số tiền đó để giúp đỡ mẹ và em gái ở quê, cũng như giải phóng bản thân khỏi cảnh ngộ hiện tại. Nhưng cái chàng không ngờ đến là hành động ấy, tưởng chừng là một bước chứng tỏ mình có thể vượt qua ranh giới luân lý của số đông để trở nên vĩ đại, lại đẩy chàng vào một cuộc khủng hoảng trầm trọng về đạo đức và tinh thần.",
  //     "images": [
  //       "../assets/image/product/UH8ZDY1I-transformed.jpg"
  //     ],
  //     "size": "14 x 20,5",
  //     "publisher": "pushlisher_id_ref",
  //     "publishDate": "2023-06-14T07:00:00.000Z",
  //     "createdDate": "2023-06-14T07:00:00.000Z",
  //     "updatedDate": "2023-06-14T07:00:00.000Z",
  //     "deletedDate": "2023-06-14T07:00:00.000Z",
  //     "isDeleted": false
  //   },
  //   {
  //     "documentID": "9CB0PBbmF4yGdCN6EbBw",
  //     "name": "TRẠI TRẺ ĐẶC BIỆT CỦA CÔ PEREGRINE",
  //     "sortingAlias": "TRAJI TRER DDAWJC BIEEJT CURA COO PEREGRINE",
  //     "price": 108000,
  //     "description": "Jacob lớn lên cùng những câu chuyện ông nội thường hay kể. Câu chuyện về thưở thiếu thời ông đã trải qua tại một trại trẻ đã được phù phép, nơi sinh sống của những đứa trẻ sở hữu năng lực phi thường : một cô bé biết bay, một cậu bé tàng hình, một cô bé có thể tạo ra lửa...",
  //     "images": [
  //       "../assets/image/product/O98SX8FO.jpg"
  //     ],
  //     "size": "14 x 20,5",
  //     "publisher": "pushlisher_id_ref",
  //     "publishDate": "2023-06-14T07:00:00.000Z",
  //     "createdDate": "2023-06-14T07:00:00.000Z",
  //     "updatedDate": "2023-06-14T07:00:00.000Z",
  //     "deletedDate": "2023-06-14T07:00:00.000Z",
  //     "isDeleted": false
  //   },
  //   {
  //     "documentID": "KIBIfStwZpNl9gut4fZx",
  //     "name": "CUỐN SÁCH TÀI CHÍNH ĐẦU ĐỜI",
  //     "sortingAlias": "CUOOSN SASCH TAFI CHISNH DDAAFU DDOWFI",
  //     "price": 52800,
  //     "description": "Làm thế nào chúng ta trang bị được cho con trẻ những kỹ năng tài chính cá nhân mà chúng có thể mang theo như một hành trang trong suốt cuộc đời? Tiếc rằng việc dạy con trẻ cách quản lý tài chính cá nhân lại là một việc cực chẳng đành với nhiều bậc làm cha mẹ!",
  //     "images": [
  //       "../assets/image/product/OHB5F8E6.jpg"
  //     ],
  //     "size": "14 x 20,5",
  //     "publisher": "pushlisher_id_ref",
  //     "publishDate": "2023-06-14T07:00:00.000Z",
  //     "createdDate": "2023-06-14T07:00:00.000Z",
  //     "updatedDate": "2023-06-14T07:00:00.000Z",
  //     "deletedDate": "2023-06-14T07:00:00.000Z",
  //     "isDeleted": false
  //   },
  //   {
  //     "documentID": "UgPVac9Ulxv8SQqSkHJF",
  //     "name": "CHÚ BÉ MANG PYJAMA SỌC",
  //     "sortingAlias": "CHUS BES MANG PYJAMA SOJC",
  //     "price": 63200,
  //     "description": "Rất khó miêu tả câu chuyện về Chú bé mang pyjama sọc này. Thường thì chúng tôi vẫn tiết lộ vài chi tiết về cuốn sách trên bìa, nhưng trong trường hợp này chúng tôi nghĩ làm như vậy sẽ làm hỏng cảm giác đọc của bạn. Chúng tôi nghĩ điều quan trọng là bạn nên đọc mà không biết trước nó kể về điều gì",
  //     "images": [
  //       "../assets/image/product/5BK3HGO4.jpg"
  //     ],
  //     "size": "14 x 20,5",
  //     "publisher": "pushlisher_id_ref",
  //     "publishDate": "2023-06-14T07:00:00.000Z",
  //     "createdDate": "2023-06-14T07:00:00.000Z",
  //     "updatedDate": "2023-06-14T07:00:00.000Z",
  //     "deletedDate": "2023-06-14T07:00:00.000Z",
  //     "isDeleted": false
  //   },
  //   {
  //     "documentID": "WxnXcdzntH6iCtwF0Xqr",
  //     "name": "NHỮNG ĐÊM TRẮNG",
  //     "sortingAlias": "NHUWXNG DDEEM TRAWSNG",
  //     "price": 420000,
  //     "description": "Cuộc đời Dostoevsky có một điểm đứt gãy – đó là khoảnh khắc thần Chết ập xuống pháp trường, rồi vụt bay đi, để lại một đại văn hào tương lai của nước Nga đang sống mà ngỡ mình đã chết.",
  //     "images": [
  //       "../assets/image/product/O98SX8FO.jpg"
  //     ],
  //     "size": "14 x 20,5",
  //     "publisher": "pushlisher_id_ref",
  //     "publishDate": "2023-06-14T07:00:00.000Z",
  //     "createdDate": "2023-06-14T07:00:00.000Z",
  //     "updatedDate": "2023-06-14T07:00:00.000Z",
  //     "deletedDate": "2023-06-14T07:00:00.000Z",
  //     "isDeleted": false
  //   },
  //   {
  //     "documentID": "eCoF55GfpUtqBGRLKtHj",
  //     "name": "BẢN ĐỒ THẾ GIỚI CÀ PHÊ - TỪ HẠT ĐẾN PHA CHẾ - KHÁM PHÁ, GIẢI THÍCH VÀ THƯỞNG THỨC CÀ PHÊ",
  //     "sortingAlias": "BARN DDOOF THEES GIOWSI CAF PHEE - TUWF HAJT DDEESN PHA CHEES - KHASM PHAS, GIARI THISCH VAF THUWOWNG THUWSC CAF PHEE",
  //     "price": 295200,
  //     "description": "James Hoffmann - một trong những barista nổi tiếng nhất thế giới, nhà vô địch World Barista năm 2007, đồng thời chủ nhân kênh vlog về cà phê đặc sản có gần 1,5 triệu người đăng ký trên Youtube - đã viết một cuốn sách được cả giới chuyên gia cà phê và những người mộ điệu yêu thích, trở thành một trong những cuốn sách nổi tiếng nhất thế giới về cà phê đặc sản. Bản đồ thế giới cà phê không chỉ giới thiệu về cây cà phê, lịch sử việc uống cà phê của loài người. các phong cách thưởng thức cà phê trên thế giới mà còn đưa bạn bước lên một hành trình vòng quanh thế giới đến thăm các nước sản xuất cà phê từ châu Phi, đến châu Á, châu Mỹ... với những hình ảnh, bản đồ sinh động, cung cấp các thông tin cô đọng về nguồn gốc, hồ sơ hương vị, các vùng trồng cà phê nổi tiếng của từng quốc gia. Một cuốn sách không thể thiếu cho những người say mê cả phê và muốn tìm hiểu về các loại cà phê tuyệt vời nhất thế giới.",
  //     "images": [
  //       "../assets/image/product/K86N2QWU.jpg"
  //     ],
  //     "size": "14 x 20,5",
  //     "publisher": "pushlisher_id_ref",
  //     "publishDate": "2023-06-14T07:00:00.000Z",
  //     "createdDate": "2023-06-14T07:00:00.000Z",
  //     "updatedDate": "2023-06-14T07:00:00.000Z",
  //     "deletedDate": "2023-06-14T07:00:00.000Z",
  //     "isDeleted": false
  //   },
  //   {
  //     "documentID": "oikginuYBLuvlfKneNks",
  //     "name": "TÔI LÀ AI VÀ NẾU VẬY THÌ BAO NHIÊU",
  //     "sortingAlias": "HOW MONEY WORKS - HIEERU HEEST VEEF TIEEFN",
  //     "price": 240000,
  //     "description": "Khi đọc cuốn sách này là lúc bạn đã dấn bước đầu tiên trên con đường dẫn đến hạnh phúc. - Elke Heidenreich",
  //     "images": [
  //       "../assets/image/product/BIBUQ5Q4.jpg"
  //     ],
  //     "size": "14 x 20,5",
  //     "publisher": "pushlisher_id_ref",
  //     "publishDate": "2017-06-14T07:00:00.000Z",
  //     "createdDate": "2017-06-14T07:00:00.000Z",
  //     "updatedDate": "2017-06-14T07:00:00.000Z",
  //     "deletedDate": "2017-06-14T07:00:00.000Z",
  //     "isDeleted": false
  //   }
  // ];

  totalAmount: number = 0;
  totalQuantity: Observable<number>;

  constructor(private productService: ProductService) {
    this.orderedProducts = this.productService.getRawOrderedProducts(); // shallow copy
    this.totalQuantity = this.productService.sharedTotalQuantity$; // shallow copy
    this.totalAmount = this.productService.countTotalAmount(this.orderedProducts);
  }

  ngOnInit() {
  }

  decreaseQuantity(i: number) {
    this.orderedProducts[i].decreaseQuantity();
    this.totalAmount = this.productService.countTotalAmount(this.orderedProducts);
    this.productService.setTotalQuantity(this.productService.totalQuantity - 1);

    if (this.orderedProducts[i].quantity === 0) {
      this.removeOrderedProduct(i);
    }
  }

  increaseQuantity(i: number) {
    this.orderedProducts[i].increaseQuantity();
    this.totalAmount = this.productService.countTotalAmount(this.orderedProducts);
    this.productService.setTotalQuantity(this.productService.totalQuantity + 1);
  }

  removeOrderedProduct(i: number) {
    console.log("Remove ordered product by index: " + i);
    const removedProduct = this.orderedProducts[i];
    this.orderedProducts.splice(i, 1);
    this.productService.setTotalQuantity(this.productService.totalQuantity - removedProduct.quantity);
    this.totalAmount = this.productService.countTotalAmount(this.orderedProducts);
  }
}

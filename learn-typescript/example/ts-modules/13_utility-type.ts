/**
 * 유틸리티 타입 사례 - Pick
 * 특정 타입에서 몇 개의 속성을 선택(pick)하여 타입을 정의
 *
 * @function fetchProducts(): Promise<Product[]> {}
 * : 상품 목록을 받아오기 위한 API 함수
 * @ShoppingItem
 * : 특정 상품의 상세정보를 나타내기 위한 함수
 */
interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: string;
}

/* V1: 타입을 직업 선언 */
function displayProductDetailV1(shoppingItem:
  {id:number; name: string,price: number}){}

/* V2: 인터페이스를 만들어 사용*/
interface ProductDetail {
    id: number;
    name: string;
    price: number;
}
function displayProductDetailV2(shoppingItem: ProductDetail) {}

/* V3: Pick(유틸리티) 타입을 이용한 사용 */
// xmrwjd
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>;

function displayProductDetailV3(shoppingItem: ShoppingItem) {}

/**
 * 유틸리티 타입 사례 - Partial(파셜)
 * 파셜(Partial) 타입은 특정 타입의 부분 집합을 만족하는 타입을 정의
 *
 * @function updateProductItem()
 * : 특정 상품의 정보를 업데이트하는 함수
 *
 * V1 ~ V5: Partial의 구현체 과정을 보여줌
 */

// interface UpdateProduct {
//     id: number;
//     name: string;
//     price: number;
//     brand: string;
//     stock: string;
// }

type UpdateProduct = Partial<Product>
function updateProductItem(productItem: UpdateProduct) {
   // ...
}

updateProductItem({
    brand: 'B',
    price: 1000,
    }
);

interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
}

// V1
interface UserProfileUpdateV1 {
    username?: string;
    email?: string;
    profilePhotoUrl?: string;
}

// V2
type UserProfileUpdateV2 = {
    username?: UserProfile['username'];
    email?: UserProfile['email'];
    profilePhotoUrl?: UserProfile['profilePhotoUrl']
}

// V3: 맵드 타입
type UserProfileV3 = {
    [p in 'username'|'email'|'profilePhotoUrl']?: UserProfile[p]
};

// V4
// type UserProfileKeys = keyof UserProfile

type UserProfileV4 = {
    [p in keyof UserProfile]?: UserProfile[p]
};

// V5
type Subset<T> = {
    [p in keyof T]?: T[p]
}


